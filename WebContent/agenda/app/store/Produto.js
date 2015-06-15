Ext.define('AG.store.Produto', {
    extend: 'Ext.data.Store',
    model: 'AG.model.Produto',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/produto/list',
    		create: 'http://localhost:8080/Agenda/produto/add',
        	update: 'http://localhost:8080/Agenda/produto/update',
        	destroy: 'http://localhost:8080/Agenda/produto/remove'
    	},
    	reader: {
    		type: 'json',
    		rootProperty: 'data',
    		successProperty: 'success'
    	},
    	writer: {
    		type: 'json',
    		rootProperty: 'data',
    		successProperty: 'success',
    		writeAllFields : true,
    		encode: true
    	}
    }
});