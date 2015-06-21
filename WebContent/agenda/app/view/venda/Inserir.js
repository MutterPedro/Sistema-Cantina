Ext.define('AG.view.venda.Inserir',{
	extend: 'Ext.window.Window',
	alias: 'widget.inserirvenda',

    title: 'Nova venda',
    layout: 'fit',
  
	initComponent: function() {		
		
		this.width = '632px';
		this.height = '292px';
		this.resizable = false;
		this.store = Ext.create('Ext.data.Store', {
		    storeId: 'produto-venda',
		    fields:[ 'id','nome', 'preco', 'quantidade']
		});
        this.items = [
            {
            	xtype: 'panel',         	                                               
            	items: [
            		{
            			xtype: 'panel',
            			layout: {
            		        type: 'hbox',
            		        align: 'stretch',
            		        padding: '10px'
            		    },
		    			items: [
		    			    {
		    					xtype: 'textfield',
		    					name: 'venda.matriculaCliente',
		    					fieldLabel: 'Matricula',		    					
		    					style:{
		    						'margin-right':'10px;',
		    						'height': '24px;'
		    					}
	    					},
	    					{
	    						xtype: 'datefield',
	    						value: Ext.Date.format(new Date(),'d/m/Y'),
	    						name: 'venda.dataVenda',	    						
	    						hidden: true
	    					},
	    					{
	    						xtype: 'combobox',
	    						store: Ext.create('Ext.data.Store', {
	                                fields: ['abbr', 'name'],
	                                data : [
	                                    {"abbr":"1", "name":"Dinheiro"},
	                                    {"abbr":"2", "name":"Cart&atilde;o"},
	                                    {"abbr":"3", "name":"Conta"}
	                                ]
	                            }),
	                            displayField: 'name',
	                            valueField: 'abbr',
	                            value: 1,
	    						name: 'venda.tipoPagamento',
	    						fieldLabel: 'Pagamento'	    						
	    					}]
		        	},{		        		
		        		xtype: 'panel',		        		
	        			style: {
	        			    borderColor: '#3892d3',
	        			    borderStyle: 'double'
	        			},
		        		layout: {
            		        type: 'hbox',
            		        align: 'stretch',
            		        padding: '10px'
            		    },
		        		items:[{
		        			xtype: 'textfield',
		        			fieldLabel: 'ID do produto',
		        			name: 'produto.id',
		        			id: 'id-produto-busca',
		        			style:{
	    						'margin-right':'10px;',
	    						'height': '24px;'
	    					}
		        		},{
		        			xtype: 'textfield',
		        			fieldLabel: 'Quantidade',
		        			value: 1
		        		},{
		        			xtype: 'button',
		        			text: 'Ir',
		        			action: 'buscar-produto'
		        		}]
		        	},{
		        		xtype: 'gridpanel',
		        		store: Ext.data.StoreManager.lookup('produto-venda'),
		        		columns:[
		        		    {text: 'ID',  dataIndex: 'id',  flex: 1},
		                    {text: 'Nome',  dataIndex: 'nome',  flex: 1},          
		                    {text: 'Preço', dataIndex: 'precoVenda', flex: 1},
		                    {text: 'Quantidade', dataIndex: 'quantidade', flex: 1}
		        		]
		        	}
	    		]
		        	
            }
            
    	];


    	this.buttons = [
            {
                text: 'Finalizar',
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
