Ext.define('AG.store.Busca', {
    extend: 'Ext.data.Store',
    model: 'AG.model.User',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/pessoa/pesquisar',
    		create: 'http://localhost:8080/Agenda/pessoa/add',
        	update: 'http://localhost:8080/Agenda/pessoa/update',
        	destroy: 'http://localhost:8080/Agenda/pessoa/remove'
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