Ext.define('AG.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'pessoa.nome',
                        fieldLabel: 'Name',
                        value: this.pessoa.get('nome')
                    },
                    {
                        xtype: 'textfield',
                        name : 'pessoa.idade',
                        fieldLabel: 'Idade',
                        value: this.pessoa.get('idade')
                    },
                    {
                        xtype: 'textfield',
                        name : 'pessoa.sexo',
                        fieldLabel: 'Sexo',
                        value: this.pessoa.get('sexo')
                    },
                    {
                        xtype: 'textfield',
                        name : 'pessoa.endereco',
                        fieldLabel: 'Endereco',
                        value: this.pessoa.get('endereco')
                    },
                    {
                        xtype: 'textfield',
                        name : 'pessoa.id',                     
                        value: this.pessoa.get('id'),
                        hidden: true
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