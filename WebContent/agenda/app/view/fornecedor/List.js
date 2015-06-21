Ext.define('AG.view.fornecedor.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.fornecedorlist',

    title: 'Fornecedores',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Fornecedor',{
            id:'store-fornecedor'
        });
        this.store.load();
        this.columns = [
          
            {header: 'Nome',  dataIndex: 'nome',  flex: 1},
            {header: 'Cnpj', dataIndex: 'cnpj', flex: 1},            
            {header: 'Endere&ccedil;o', dataIndex: 'endereco', flex: 1},
            {header: 'Produtos', dataIndex: 'produtos', flex: 1}
        ];

        this.callParent(arguments);
    }
});