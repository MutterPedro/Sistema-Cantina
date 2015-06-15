Ext.define('AG.view.user.Opcoes',{
	extend: 'Ext.window.Window',
	alias: 'widget.useropcoes',

    title: 'Op��es',
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
