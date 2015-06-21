Ext.define('AG.controller.Produto', {
    extend: 'Ext.app.Controller',

    stores: [
        'Produto'        
    ],

    models: [
        'Produto'       
    ],

    views: [
       'produto.List',
	   'produto.Edit',
       'produto.Inserir',
       'produto.Remover',       
       'produto.Opcoes',
       'produto.Inserir',
       'produto.Pesquisar'
    ],

    init: function() {
        this.control({
            'panel > produtolist': {                
                itemclick: this.opcoes
            },
            'produtoedit button[action=save]': {
                click: this.updateProduto
            },
            'button[action=inserir]':{
                click: this.inserirProduto
            },
            'inserirproduto button[action=save]':{
                click: this.addProduto
            },
            'removerproduto button[action=save]':{
                click: this.remProduto
            },                      
            'produtoopcoes button[action=remove]':{
            	click: this.remProduto
            },
            'produtoopcoes button[action=edit]':{
            	click: this.editProduto
            },
            'button[action=pesquisar]':{
            	click: this.pesquisarProduto
            }
        });
    },

    editProduto: function(button,record,grid) {
    	var win    = button.up('window');
        var window = Ext.create('AG.view.produto.Edit',{
        	produto: win.produto
        });
        
        win.close();
        window.show();
    },

    updateProduto: function(button,grid) {
        var win    = button.up('window'),
        	form   = win.down('form'),
        	record = form.getRecord(),
        	values = form.getValues(),
            produto = this.store = Ext.getStore('store-produto');
        
        
        Ext.Ajax.request({
             url: 'http://localhost:8080/Agenda/produto/update',
             params: values,
             scope: this,
             success: function(response){
                 var text = response.responseText;
                 produto.load();
             }
         });
        
        win.close();
        this.getProdutoStore().sync();
    },

    inserirProduto: function(grid) {
        var view = Ext.create('AG.view.produto.Inserir');
        if(Ext.getCmp('tabpanel-main').currentStore=='store-produto')
        	view.show();
    },

    addProduto: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            produto = this.store = Ext.getStore('store-produto');
        
       Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/produto/add',
            params: values,
            scope: this,
            success: function(response){
                var text = response.responseText;
                produto.load();
            }
        });
        

        win.close();
        this.getProdutoStore().sync();
    },

    removerProduto: function(grid){
        var view = Ext.widget('removerproduto');
    },

    remProduto: function(button){ 
        var win    = button.up('window');
        var produto = this.store = Ext.getStore('store-produto');        
        var ID = win.produto.get('id');  
        console.log(win);
        
        Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/produto/remove',
            params:{'id':win.produto.get('id')},
            method: "POST",
            scope: this,
            success: function(response){              
                produto.load();
            }
        });  
        win.close();
        this.getProdutoStore().sync();
    },
        
    opcoes: function(grid,record){
    	var window = Ext.create('AG.view.produto.Opcoes',{
    		height:100,
    		width: 270,
    		resizable: false,
    		produto: record
    	});
    	//console.log(record);
    	window.show();
    },
    
    pesquisarProduto: function(button,record,grid){
    	if(Ext.getCmp('tabpanel-main').currentStore=='store-produto'){
	        var win    = button.up('panel');
	    	var form   = win.down('textfield');
	    	var	value = form.value;
	        
	        pesquisa = this.store = Ext.getStore('store-produto');	        
	        if(!value){
	        	pesquisa.load();
	        }
	        else{	        	
	        	pesquisa.removeAll();
	        	pesquisa.getProxy().setExtraParam('nome',value);
	        	console.log(pesquisa.getProxy());
		        pesquisa.load();
		        pesquisa.getProxy().setExtraParam('nome',null);
	        }
	        form.setValue(null);
    	}
    }
});