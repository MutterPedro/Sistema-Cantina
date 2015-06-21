Ext.define('AG.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AG.model.User',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/cliente/list',
    		create: 'http://localhost:8080/Agenda/cliente/add',
        	update: 'http://localhost:8080/Agenda/cliente/update',
        	destroy: 'http://localhost:8080/Agenda/cliente/remove'
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