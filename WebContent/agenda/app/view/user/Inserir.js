Ext.define('AG.view.user.Inserir',{
	extend: 'Ext.window.Window',
	alias: 'widget.inserirusuario',

    title: 'Novo Cliente',
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
		    					name: 'cliente.nome',
		    					fieldLabel: 'Nome',
		    					rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'cliente.cpf',
	    						fieldLabel: 'CPF',
	    						rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'cliente.matricula',
	    						fieldLabel: 'Matricula',
	    						rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'cliente.idade',
	    						fieldLabel: 'Idade',
	    						colspan: 2
	    					},
	    					{
	    						xtype: 'combobox',
	                            store: Ext.create('Ext.data.Store', {
	                                fields: ['abbr', 'name'],
	                                data : [
	                                    {"abbr":"F", "name":"Feminino"},
	                                    {"abbr":"M", "name":"Masculino"}                               
	                                ]
	                            }),
	                            displayField: 'name',
	                            valueField: 'abbr',
	    						name: 'cliente.sexo',
	    						fieldLabel: 'Sexo',
	    						value: 'M',
	    						rowspan: 2
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'cliente.endereco',
	    						fieldLabel: 'Endereco',
	    						colspan: 2
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'cliente.conta',
	    						hidden: true,
	    						value: 0
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
