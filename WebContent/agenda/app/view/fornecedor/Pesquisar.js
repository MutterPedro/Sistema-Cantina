Ext.define('AG.view.fornecedor.Pesquisar' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.pesquisarfornecedor',

    title: 'Pesquisa',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Fornecedor',{
            id:'store-fornecedor-pesquisa'
        });
        console.log(this);
        this.store.load();
        this.columns = [
            {header: 'Nome',  dataIndex: 'nome',  flex: 1},
            {header: 'CNPJ', dataIndex: 'cnpj', flex: 1},
            {header: 'Endereço', dataIndex: 'endereco', flex: 1},
            {header: 'Produtos', dataIndex: 'produtos', flex: 1}
        ];

        this.callParent(arguments);
    }
});