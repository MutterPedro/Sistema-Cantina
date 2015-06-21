Ext.define('AG.view.fornecedor.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.fornecedoredit',

    title: 'Editar fornecedor',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                
                style: {borderColor:'#ABCDEF', borderStyle:'solid', borderWidth:'3px',padding:'7px'},
                items: [
                    {
                        xtype: 'textfield',
                        name : 'fornecedor.nome',
                        fieldLabel: 'Name',
                        value: this.fornecedor.get('nome')
                    },
                    {
                        xtype: 'textfield',
                        name : 'fornecedor.cnpj',
                        fieldLabel: 'CNPJ',
                        value: this.fornecedor.get('cnpj')
                    },
                    {
                        xtype: 'textfield',
                        name : 'fornecedor.produtos',
                        fieldLabel: 'Produtos',
                        value: this.fornecedor.get('produtos')
                    },
                    {
                        xtype: 'textfield',
                        name : 'fornecedor.endereco',
                        fieldLabel: 'Endereco',
                        value: this.fornecedor.get('endereco')
                    },
                    {
                        xtype: 'textfield',
                        name : 'fornecedor.id',                     
                        value: this.fornecedor.get('id'),
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