Ext.define('AG.store.Telefones', {
    extend: 'Ext.data.Store',
    model: 'AG.model.Telefone',

    proxy: {
    	type: 'ajax',
    	api: {
    		read: 'http://localhost:8080/Agenda/telefone/list',
    		create: 'http://localhost:8080/Agenda/telefone/add',
    		update: 'http://localhost:8080/Agenda/telefone/update',
    		destroy: 'http://localhost:8080/Agenda/telefone/remove'
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