Ext.define('AG.view.user.Inserir',{
	extend: 'Ext.window.Window',
	alias: 'widget.inserirusuario',

    title: 'Inserir Usuario',
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
		    					name: 'pessoa.nome',
		    					fieldLabel: 'Nome',
		    					rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'pessoa.idade',
	    						fieldLabel: 'Idade',
	    						colspan: 2
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'pessoa.sexo',
	    						fieldLabel: 'Sexo',
	    						rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'pessoa.endereco',
	    						fieldLabel: 'Endereço',
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
