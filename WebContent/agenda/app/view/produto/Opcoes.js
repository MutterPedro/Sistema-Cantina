Ext.define('AG.view.produto.Opcoes',{
	extend: 'Ext.window.Window',
	alias: 'widget.produtoopcoes',

    title: 'Op&ccedil;&otilde;es',
    layout: 'fit',
  
	initComponent: function() {
		
    	this.buttons = [
            {
                text: 'Remover',
                action: 'remove'
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
