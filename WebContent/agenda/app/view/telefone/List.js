Ext.define('AG.view.telefone.List' ,{
	extend: 'Ext.window.Window',
    alias: 'widget.telefonelist',

    title: 'Contatos',
    
    initComponent: function() {
        this.telefonesStore = Ext.create('AG.store.Telefones',{
            id:'store-2',
            proxy:{
            	extraParams:{'id':this.pessoa.get('id')}
            }
        });
    	Ext.apply(this,{
    		items: [{
    		        xtype: 'grid',
    		        store: this.telefonesStore,
    		        columns: [
    		                  {header: 'DDI',  dataIndex: 'ddi',  flex: 1},
    		                  {header: 'DDD', dataIndex: 'ddd', flex: 1},
    		                  {header: 'Numero', dataIndex: 'numero', flex: 1},
    		                  {header: 'Tipo', dataIndex: 'tipo', flex: 1}
    		                  ],
    		       buttons: [
    		                 {
    		                	 text: 'Novo',
    		                	 action: 'novo'
    		                 },
    		                 {
    		                	 text: 'Cancel',
    		                	 scope: this,
    		                	 handler: this.close
    		                 }
    		                 ]
    		}]
    	})
    	this.telefonesStore.load();
        /*this.columns = [
                {header: 'DDI',  dataIndex: 'ddi',  flex: 1},
                {header: 'DDD', dataIndex: 'ddd', flex: 1},
                {header: 'Numero', dataIndex: 'numero', flex: 1},
                {header: 'Tipo', dataIndex: 'tipo', flex: 1}
        ],*/
         

        this.callParent(arguments);
    } 
});