Ext.define('AG.view.produto.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.produtoedit',

    title: 'Editar produto',
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
                        name : 'produto.nome',
                        fieldLabel: 'Nome',
                        value: this.produto.get('nome')
                    },
                    {
                        xtype: 'datefield',
                        name : 'produto.fabricacao',
                        fieldLabel: 'Fabrica&ccedil;&atilde;o',
                        value: this.produto.get('fabricacao')
                    },
                    {
                        xtype: 'datefield',
                        name : 'produto.validade',
                        fieldLabel: 'Validade',
                        value: this.produto.get('validade')
                    },
                    {
                        xtype: 'textfield',
                        name : 'produto.precoCusto',
                        fieldLabel: 'Pre&ccedil;o de Custo',
                        value: this.produto.get('precoCusto')
                    },
                    {
                        xtype: 'textfield',
                        name : 'produto.precoVenda',
                        fieldLabel: 'Pre&ccedil;o de Venda',
                        value: this.produto.get('precoVenda')
                    },
                    {
                        xtype: 'textfield',
                        name : 'produto.qtdeEstoque',
                        fieldLabel: 'Quantidade Estoque',
                        value: this.produto.get('qtdeEstoque')
                    },
                    {
                        xtype: 'textfield',
                        name : 'produto.id',                     
                        value: this.produto.get('id'),
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