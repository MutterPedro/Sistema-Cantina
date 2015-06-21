Ext.define('AG.view.produto.Pesquisar' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.pesquisarproduto',

    title: 'Pesquisa',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.produtos',{
            id:'store-produto-pesquisa'
        });
        this.store.load();
        this.columns = [
            {header: 'Name',  dataIndex: 'nome',  flex: 1},
            {header: 'Fabrica��o', dataIndex: 'fabricacao', flex: 1},
            {header: 'Validade', dataIndex: 'validade', flex: 1},
            {header: 'Pre�o Custo', dataIndex: 'precoCusto', flex: 1,renderer:this.monetario},
            {header: 'Pre�o Venda', dataIndex: 'precoVenda', flex: 1,renderer:this.monetario},
            {header: 'Quantidade Estoque', dataIndex: 'qtdeEstoque', flex: 1}
        ];

        this.callParent(arguments);
    },
    monetario: function(n){
        real = "R$"+Ext.util.Format.number(n, '0.00');
        return real;
    }
});