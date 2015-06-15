Ext.define('AG.store.Fornecedor', {
    extend: 'Ext.data.Store',
    model: 'AG.model.Fornecedor',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/fornecedor/list',
    		create: 'http://localhost:8080/Agenda/fornecedor/add',
        	update: 'http://localhost:8080/Agenda/fornecedor/update',
        	destroy: 'http://localhost:8080/Agenda/fornecedor/remove'
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