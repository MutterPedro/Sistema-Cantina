Ext.define('AG.view.fornecedor.Remover',{
	extend: 'Ext.window.Window',
	alias: 'widget.removerfornecedor',

    title: 'Remover fornecedor',
    layout: 'fit',
    autoShow: true,

	initComponent: function() {
		this.items = [
            {
            	xtype: 'panel',
            	items: [
            		{
		            	xtype: 'form',
		            	width: 400,
		    			renderTo: Ext.getBody(),
		    			border: 1,
		    			style: {borderColor:'#ABCDEF', borderStyle:'solid', borderWidth:'3px'},
		    		    defaults: {
		        			labelWidth: 80,
		        			xtype: 'textfield',
		        			flex: 1,
		        			style: {
		            			padding: '10px'
		        			}
		        		},
		    			items: [
		    			{
		    				xtype: 'textfield',
		    				name: 'id',
		    				fieldLabel: 'ID'
	    				}
	    				]
	    			}
	    		]
	    	}
	    ];

		this.buttons = [
            {
                text: 'Remover',
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