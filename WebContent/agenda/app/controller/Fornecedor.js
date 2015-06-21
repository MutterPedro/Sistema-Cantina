Ext.define('AG.controller.Fornecedor', {
    extend: 'Ext.app.Controller',

    stores: [
        'Fornecedor',
        'Telefones'
    ],

    models: [
        'Fornecedor',
        'Telefone'
    ],

    views: [
       'fornecedor.List',
	   'fornecedor.Edit',
       'fornecedor.Inserir',
       'fornecedor.Remover',
       'telefone.List',
       'fornecedor.Opcoes',
       'fornecedor.Inserir',
       'fornecedor.Pesquisar'
    ],

    init: function() {
        this.control({
            'panel > fornecedorlist': {
                itemdblclick: this.listarContatos,
                itemclick: this.opcoes
            },
            'fornecedoredit button[action=save]': {
                click: this.updateFornecedor
            },
            'button[action=inserir]':{
                click: this.inserirFornecedor
            },
            'inserirfornecedor button[action=save]':{
                click: this.addFornecedor
            },
            'removerfornecedor button[action=save]':{
                click: this.remFornecedor
            },
            'telefonelist button[action=novo]':{
            	click: this.inserirTelefone
            },
            'inserirtelefone button[action=save]':{
            	click: this.addTelefone
            },
            'fornecedoropcoes button[action=remove]':{
            	click: this.remFornecedor
            },
            'fornecedoropcoes button[action=edit]':{
            	click: this.editFornecedor
            },
            'button[action=pesquisar]':{
            	click: this.pesquisarFornecedor
            }
        });
    },

    editFornecedor: function(button,record,grid) {
    	var win    = button.up('window');
        var window = Ext.create('AG.view.fornecedor.Edit',{
        	fornecedor: win.fornecedor
        });
        
        win.close();
        window.show();
    },

    updateFornecedor: function(button,grid) {
        var win    = button.up('window'),
        	form   = win.down('form'),
        	record = form.getRecord(),
        	values = form.getValues(),
            fornecedor = this.store = Ext.getStore('store-fornecedor');
        
        
        Ext.Ajax.request({
             url: 'http://localhost:8080/Agenda/fornecedor/update',
             params: values,
             scope: this,
             success: function(response){
                 var text = response.responseText;
                 fornecedor.load();
             }
         });
        
        win.close();
        this.getFornecedorStore().sync();
    },

    inserirFornecedor: function(grid) {
        var view = Ext.create('AG.view.fornecedor.Inserir');
        if(Ext.getCmp('tabpanel-main').currentStore=='store-fornecedor')
        	view.show();
    },

    addFornecedor: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            fornecedor = this.store = Ext.getStore('store-fornecedor');
        
       Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/fornecedor/add',
            params: values,
            scope: this,
            success: function(response){
                var text = response.responseText;
                fornecedor.load();
            }
        });
        

        win.close();
        this.getFornecedorStore().sync();
    },

    removerFornecedor: function(grid){
        var view = Ext.widget('removerfornecedor');
    },

    remFornecedor: function(button){ 
        var win    = button.up('window');
        var fornecedor = this.store = Ext.getStore('store-fornecedor'),
        ID = win.fornecedor.get('id');        
        
        Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/fornecedor/remove',
            params:{'id':ID},
            scope: this,
            success: function(response){              
                fornecedor.load();
            }
        });  
        win.close();
        this.getFornecedorStore().sync();
    },
    
    listarContatos: function(grid, record){
        var window = Ext.create('AG.view.telefone.List',{
        	heigth:500,
        	width:500,
        	fornecedor:record
        });
        window.show();
    },
    
    inserirTelefone: function(button,grid){
    	var win    = button.up('window');    	
    	var window = Ext.create('AG.view.telefone.Inserir',{	
    		fornecedor: win.fornecedor  
    	});
    	win.close();
    	window.show();
    },
    
    addTelefone: function(button){
    	var win    = button.up('window'),
        form   = win.down('form'),
        values = form.getValues(),
        telefone = this.store = Ext.getStore('store-2');
    
	   Ext.Ajax.request({
	        url: 'http://localhost:8080/Agenda/telefone/add',
	        params: values,
	        scope: this,
	        success: function(response){
	            //var text = response.responseText;
	            telefone.load();
	        }
	    });
    

    win.close();
    this.getTelefonesStore().sync();
    },
    
    opcoes: function(grid,record){
    	var window = Ext.create('AG.view.fornecedor.Opcoes',{
    		height:100,
    		width: 270,
    		resizable: false,
    		fornecedor: record
    	});
    	//console.log(record);
    	window.show();
    },
    
    pesquisarFornecedor: function(button,record,grid){
    	if(Ext.getCmp('tabpanel-main').currentStore=='store-fornecedor'){
    		var win    = button.up('panel');
        	var form   = win.down('textfield');
    		var	value = form.value;
        
        	pesquisa = this.store = Ext.getStore('store-fornecedor');
        	//console.log(Ext.getCmp('tabpanel-main'));
        	if(!value){
        		pesquisa.load();
        	}
        	else{
        		pesquisa.removeAll();
        		pesquisa.getProxy().setExtraParam('nome',value);
	        	pesquisa.load();
	        	pesquisa.getProxy().setExtraParam('nome',null);
        	}
        	form.setValue(null);
    	}
    }
});