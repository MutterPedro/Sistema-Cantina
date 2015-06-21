Ext.define('AG.store.Venda', {
    extend: 'Ext.data.Store',
    model: 'AG.model.Venda',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/venda/list',
    		create: 'http://localhost:8080/Agenda/venda/add',
        	update: 'http://localhost:8080/Agenda/venda/update',
        	destroy: 'http://localhost:8080/Agenda/venda/remove'
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