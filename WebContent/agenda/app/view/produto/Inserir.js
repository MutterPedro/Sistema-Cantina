Ext.define('AG.view.produto.Inserir',{
	extend: 'Ext.window.Window',
	alias: 'widget.inserirproduto',

    title: 'Inserir Produto',
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
		    					name: 'produto.nome',
		    					fieldLabel: 'Nome',
		    					rowspan: 1
	    					},
	    					{
	    						xtype: 'datefield',
	    						format: 'd/m/Y',
	    						name: 'produto.fabricacao',
	    						fieldLabel: 'Fabrica&ccedil;&atilde;o',
	    						colspan: 1
	    					},
	    					{
	    						xtype: 'datefield',
	    						format: 'd/m/Y',
	    						name: 'produto.validade',
	    						fieldLabel: 'Validade',
	    						rowspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'produto.precoCusto',
	    						fieldLabel: 'Pre&ccedil;o Custo',	    						
	    						colspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'produto.precoVenda',
	    						fieldLabel: 'Pre&ccedil;o Venda',
	    						colspan: 1
	    					},
	    					{
	    						xtype: 'textfield',
	    						name: 'produto.qtdeEstoque',
	    						fieldLabel: 'Quantidade Estoque',
	    						colspan: 1
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
