Ext.define('AG.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Users',{
            id:'store-1'
        });
        this.store.load();
        this.columns = [
            {header: 'Name',  dataIndex: 'nome',  flex: 1},
            {header: 'Idade', dataIndex: 'idade', flex: 1},
            {header: 'Sexo', dataIndex: 'sexo', flex: 1},
            {header: 'Endereço', dataIndex: 'endereco', flex: 1}
        ];

        this.callParent(arguments);
    }
});