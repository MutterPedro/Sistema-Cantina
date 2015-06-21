Ext.define('AG.view.produto.ListProdutoVenda' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.produtolistvenda',

    title: 'Produtos',
    
    initComponent: function() {
        this.store = Ext.create('AG.store.Produto',{
            id:'store-produto-venda'
        });
        
        //this.store.load();
        this.columns = [
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: 'Nome',  dataIndex: 'nome',  flex: 1},          
            {header: 'Preço', dataIndex: 'precoVenda', flex: 1,renderer:this.monetario},
            {header: 'Quantidade', dataIndex: 'id', flex: 1}
            
        ];

        this.callParent(arguments);
    },
    monetario: function(n){
        real = "R$"+Ext.util.Format.number(n, '0.00');
        return real;
    }
});