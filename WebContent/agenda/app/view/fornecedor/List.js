Ext.define('AG.view.fornecedor.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.fornecedorlist',

    title: 'All Users',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Fornecedor',{
            id:'store-2'
        });
        this.store.load();
        this.columns = [
            {header: 'Name',  dataIndex: 'nome',  flex: 1},
            {header: 'Cnpj', dataIndex: 'cnpj', flex: 1},            
            {header: 'Endereço', dataIndex: 'endereco', flex: 1},
            {header: 'Produtos', dataIndex: 'produtos', flex: 1}
        ];

        this.callParent(arguments);
    }
});