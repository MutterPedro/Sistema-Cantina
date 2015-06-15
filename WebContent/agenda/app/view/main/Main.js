/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AG.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'AG.view.main.MainController',
        'AG.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controllers: [
        'main',
        'Users',
        'Fornecedor'

    ],
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Clientes',
            xtype: 'userlist'
        },{
        	title: 'Produtos'
        },{
        	title: 'Fornecedores',
        	//xtype: 'fornecedorlist'
        }]
    },
    {
        xtype: 'panel',
        layout:{
            type: 'vbox'
        },
        bind: {
            title: 'Gerenciador de Cantina'
        },
        region: 'west',
        width: 250,
        split: true,
        defaults: {
            labelWidth: 80,
            width: 250,
            xtype: 'button',
            style: {
                padding: '10px',
                marginBottom : '5px'
            }
        },
        items: [
        {
            xtype: 'button',
            text: 'Inserir',
            action: 'inserir'
        },
        {
        	xtype: 'panel',
        	items:[
        	       {         
        	    	   	xtype: 'textfield',
        	    	   	height: 50,
        	    	   	labelHeight: 30,
        	    	   	labelWidth: 50,
        	    	   	name : 'pesquisar',
        	    	   	fieldLabel: 'Buscar',
        	    	   	emptyText: 'Digite um nome a ser buscado'
        	       },
        	       {
        	    	   xtype: 'button',
        	    	   text: 'Ir',
        	    	   action: 'pesquisar'
        	       }
        	]
        }        
        ]
    }
    ]
});
