Ext.define('AG.view.fornecedor.Opcoes',{
	extend: 'Ext.window.Window',
	alias: 'widget.fornecedoropcoes',

    title: 'Op&ccedil;&otilde;es',
    layout: 'fit',
  
	initComponent: function() {
		
    	this.buttons = [
            {
                text: 'Remover',
                action: 'remove',
                handler: this.close
            },
            {
            	text: 'Editar',
            	action: 'edit'            	
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
