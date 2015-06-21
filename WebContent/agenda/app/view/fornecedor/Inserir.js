Ext.define('AG.view.fornecedor.Inserir',{
	extend: 'Ext.window.Window',
	alias: 'widget.inserirfornecedor',

    title: 'Inserir Fornecedor',
    layout: 'fit',
  
	initComponent: function() {
        this.items = [
            {
            	xtype: 'panel',
            	//height: 400,
            	items: [
            		{
		            	xtype: 'form',
		    			border: 1,
		    			style: {borderColor:'#ABCDEF', borderStyle:'solid', borderWidth:'3px'},
		    		    defaults: {labelWidth: 80,xtype: 'textfield',flex: 1,style: {padding: '10px'}},
		    		    layout: {type: 'table',columns: 2},
		    			items: [
		    			    {
		    					xtype: 'textfield',
		    					name: 'fornecedor.nome',
		    					fieldLabel: 'Nome',
		    					rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'fornecedor.cnpj',
	    						fieldLabel: 'CNPJ',
	    						colspan: 2
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'fornecedor.endereco',
	    						fieldLabel: 'Endere&ccedil;o',
	    						rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'fornecedor.produtos',
	    						fieldLabel: 'Produtos',
	    						colspan: 2
	    					}
	    				]
		        	}
	    		]
		        	
            }
            
    	];


    	this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

    	this.callParent(arguments);
    }
});
