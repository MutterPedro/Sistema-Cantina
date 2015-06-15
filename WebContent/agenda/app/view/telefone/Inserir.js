Ext.define('AG.view.telefone.Inserir' ,{
	extend: 'Ext.window.Window',
    alias: 'widget.inserirtelefone',
    
    
    initComponent: function() {      
        this.items =[{
		        	xtype: 'form',
	            	//width: 400,
	    			border: 1,
	    			title: 'Contato',
	    			style: {borderColor:'#ABCDEF', borderStyle:'solid', borderWidth:'3px'},
	    		    defaults: {labelWidth: 80,xtype: 'textfield',flex: 1,style: {padding: '10px'}},
	    		    layout: {type: 'table',columns: 2},
	    			items: [
	    			{
		    			xtype: 'textfield',
		    			name: 'telefone.ddi',
		    			fieldLabel: 'DDI',
		    			rowspan: 1
		    		},
	    			{	    				
	    				xtype: 'textfield',
	    				name: 'telefone.ddd',
	    				fieldLabel: 'DDD',
	    				rowspan: 1
	    			},
	    			{
	    				xtype: 'textfield',
	    				name: 'telefone.numero',
	    				fieldLabel: 'Numero',
	    				rowspan: 1
	    			},
	    			{
	    				xtype: 'textfield',
	    				name: 'telefone.tipo',
	    				fieldLabel: 'Tipo',
	    				rowspan: 1
	    			},
	    			{
	    				xtype: 'textfield',
	    				name: 'telefone.pessoa.id',
	    				hidden: true,
	    				value: this.pessoa.id
	    			}
	    			]
        }];
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