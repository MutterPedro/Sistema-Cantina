Ext.define('AG.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users',
        'Telefones'
    ],

    models: [
        'User',
        'Telefone'
    ],

    views: [
       'user.List',
	   'user.Edit',
       'user.Inserir',
       'user.Remover',
       'telefone.List',
       'user.Opcoes',
       'telefone.Inserir',
       'user.Pesquisar'
    ],

    init: function() {
        this.control({
            'panel > userlist': {
                itemdblclick: this.listarContatos,
                itemclick: this.opcoes
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'button[action=inserir]':{
                click: this.inserirUsuario
            },
            'inserirusuario button[action=save]':{
                click: this.addUsuario
            },
            'removerusuario button[action=save]':{
                click: this.remUsuario
            },
            'telefonelist button[action=novo]':{
            	click: this.inserirTelefone
            },
            'inserirtelefone button[action=save]':{
            	click: this.addTelefone
            },
            'useropcoes button[action=remove]':{
            	click: this.remUsuario
            },
            'useropcoes button[action=edit]':{
            	click: this.editUser
            },
            'button[action=pesquisar]':{
            	click: this.pesquisarUsuario
            }
        });
    },

    editUser: function(button,record,grid) {
    	var win    = button.up('window');
        var window = Ext.create('AG.view.user.Edit',{
        	pessoa: win.pessoa
        });
              
        window.show();
    },

    updateUser: function(button,grid) {
        var win    = button.up('window'),
        	form   = win.down('form'),
        	record = form.getRecord(),
        	values = form.getValues(),
            pessoa = this.store = Ext.getStore('store-1');
        
        
        Ext.Ajax.request({
             url: 'http://localhost:8080/Agenda/cliente/update',
             params: values,
             scope: this,
             success: function(response){
                 var text = response.responseText;
                 pessoa.load();
             }
         });
        
        win.close();
        this.getUsersStore().sync();
    },

    inserirUsuario: function(grid) {
        var view = Ext.create('AG.view.user.Inserir');
        view.show();
    },

    addUsuario: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            pessoa = this.store = Ext.getStore('store-1');
        
       Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/cliente/add',
            params: values,
            scope: this,
            success: function(response){
                var text = response.responseText;
                pessoa.load();
            }
        });
        

        win.close();
        this.getUsersStore().sync();
    },

    removerUsuario: function(grid){
        var view = Ext.widget('removerusuario');
    },

    remUsuario: function(button){ 
        var win    = button.up('window');
        var pessoa = this.store = Ext.getStore('store-1'),
        ID = win.pessoa.get('id');
        //console.log(win.pessoa.get('id'));
        
        Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/cliente/remove',
            params:{
            	'pessoa.id': ID
            },
            scope: this,
            success: function(response){              
                pessoa.load();
            }
        });  
        win.close();
        this.getUsersStore().sync();
    },
    
    listarContatos: function(grid, record){
        var window = Ext.create('AG.view.telefone.List',{
        	heigth:500,
        	width:500,
        	pessoa:record
        });
        window.show();
    },
    
    inserirTelefone: function(button,grid){
    	var win    = button.up('window');
    	//console.log(win.pessoa);
    	var window = Ext.create('AG.view.telefone.Inserir',{	
    		pessoa: win.pessoa  
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
    	var window = Ext.create('AG.view.user.Opcoes',{
    		height:100,
    		width: 270,
    		resizable: false,
    		pessoa: record
    	});
    	//console.log(record);
    	window.show();
    },
    
    pesquisarUsuario: function(button,record,grid){
        var win    = button.up('panel');
    	var form   = win.down('textfield');
    	var	value = form.value;
        
        pesquisa = this.store = Ext.getStore('store-1');
        
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
});