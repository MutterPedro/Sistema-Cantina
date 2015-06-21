Ext.define('AG.controller.Venda', {
    extend: 'Ext.app.Controller',

    stores: [
        'Venda',
        'Produto'
    ],

    models: [
        'Venda',
        'Produto'
    ],

    views: [       
       'venda.Inserir'
    ],

    init: function() {
        this.control({
            'button[action=inserir-venda]':{
                click: this.inserirVenda
            },
            'inserirvenda button[action=save]':{
                click: this.addVenda
            },          
            'inserirvenda button[action=buscar-produto]':{
            	click: this.buscarProduto
            }
            
        });
    },

       
    inserirVenda: function(grid) {
        var view = Ext.create('AG.view.venda.Inserir');       
      	view.show();
    },

    addVenda: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            venda = this.store = Ext.getStore('store-venda');
        
       Ext.Ajax.request({
            url: 'http://localhost:8080/Agenda/venda/add',
            params: values,
            scope: this,
            success: function(response){
                var text = response.responseText;
                venda.load();
            }
        });
        

        win.close();
        this.getVendaStore().sync();
    },
    
    buscarProduto: function(button) {   	 
         
         var value = button.up('panel').down('textfield[id=id-produto-busca]').getValue();
         var venda = this.store = Ext.getStore('produto-venda');
      console.log(value);
     Ext.Ajax.request({
          url: 'http://localhost:8080/Agenda/produto/pesquisar',
          params: {'id':value},
          method: 'GET',
         // scope: this,
          success: function(response){
              console.log(response);
              venda.load();
          }
      });      

     Ext.getCmp('id-produto-busca').setValue(null);
     }
    
});