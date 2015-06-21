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
            {header: 'Nome',  dataIndex: 'nome',  flex: 1},
            {header: 'CPF', dataIndex: 'cpf', flex: 1},
            {header: 'Matrícula', dataIndex: 'matricula', flex: 1},
            {header: 'Idade', dataIndex: 'idade', flex: 1},
            {header: 'Sexo', dataIndex: 'sexo', flex: 1},
            {header: 'Endere&ccedil;o', dataIndex: 'endereco', flex: 1},
            {header: 'Devendo', dataIndex: 'conta', flex: 1, renderer:this.monetario}
        ];        
        
        this.callParent(arguments);
    },
    monetario: function(n){
    	real = "R$"+Ext.util.Format.number(n, '0.00');
    	return real;
    }
});