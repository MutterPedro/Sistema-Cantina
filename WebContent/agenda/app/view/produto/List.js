Ext.define('AG.view.produto.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.produtolist',

    title: 'Produtos',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Produto',{
            id:'store-produto'
        });
        this.store.load();
        this.columns = [
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: 'Nome',  dataIndex: 'nome',  flex: 1},
            {header: 'Fabrica&ccedil;&atilde;o', dataIndex: 'fabricacao', flex: 1, renderer:  Ext.util.Format.dateRenderer('d/m/Y')},
            {header: 'Validade', dataIndex: 'validade', flex: 1, renderer:  Ext.util.Format.dateRenderer('d/m/Y')},
            {header: 'Pre&ccedil;o Custo', dataIndex: 'precoCusto', flex: 1,renderer:this.monetario},
            {header: 'Pre&ccedil;o Venda', dataIndex: 'precoVenda', flex: 1,renderer:this.monetario},
            {header: 'Quantidade Estoque', dataIndex: 'qtdeEstoque', flex: 1}
        ];

        this.callParent(arguments);
    },
    monetario: function(n){
        real = "R$"+Ext.util.Format.number(n, '0.00');
        return real;
    }
});