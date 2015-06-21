Ext.define('AG.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Editar Usuário',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                //da um padding no formulário
                style: {borderColor:'#ABCDEF', borderStyle:'solid', borderWidth:'3px',padding:'7px'},
                items: [
                    {
                        xtype: 'textfield',
                        name : 'cliente.nome',
                        fieldLabel: 'Nome',
                        value: this.cliente.get('nome')
                    },
                    {
                        xtype: 'textfield',
                        name : 'cliente.cpf',
                        fieldLabel: 'CPF',
                        value: this.cliente.get('cpf')
                    },
                    {
                        xtype: 'textfield',
                        name : 'cliente.matricula',
                        fieldLabel: 'Matricula',
                        value: this.cliente.get('matricula')
                    },
                    {
                        xtype: 'textfield',
                        name : 'cliente.idade',
                        fieldLabel: 'Idade',
                        value: this.cliente.get('idade')
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
                        name : 'cliente.sexo',
                        fieldLabel: 'Sexo',
                        value: this.cliente.get('sexo')
                    },
                    {
                        xtype: 'textfield',
                        name : 'cliente.endereco',
                        fieldLabel: 'Endereco',
                        value: this.cliente.get('endereco')
                    },
                    {
                        xtype: 'textfield',
                        name : 'cliente.id',                     
                        value: this.cliente.get('id'),
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