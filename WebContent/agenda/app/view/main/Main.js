Ext.define('AG.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'AG.view.main.MainController',
        'AG.view.main.MainModel'
    ],
    
    xtype: 'app-main',
    listeners: {    	      
        afterrender: function(main,eOpts){        	
        	Ext.getCmp('caixa-total').setText('Total em caixa R$ '+ Ext.util.Format.number(this.caixa, '0.00'));
        } 
    },
    
    controllers: [
        'main',
        'Users',
        'Fornecedor',
        'Produto'
    ],
    viewModel: {
        type: 'main'
    },
    caixa: 0.00,
    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'tabpanel',
        id: 'tabpanel-main',  
        currentStore: 'store-1',        
        listeners: {
        	tabchange: function( tabPanel, newCard, oldCard, eOpts ){
        		console.log(newCard);
        		if(newCard.xtype=='userlist'){
        			this.currentStore='store-1';
        			Ext.getCmp('btn-inserir').setText('Inserir Cliente');
        		}
        		
        		else if(newCard.xtype=='produtolist'){
        			this.currentStore='store-produto';
        			Ext.getCmp('btn-inserir').setText('Inserir Produto');
        		}
        			
        		else{
        			this.currentStore='store-fornecedor';
        			Ext.getCmp('btn-inserir').setText('Inserir Fornecedor');
        		}

        	}
        },
      
        items:[{
            title: 'Clientes',
            
            xtype: 'userlist'            
        },{
        	title: 'Produtos',
        	xtype: 'produtolist'
        },{
        	title: 'Fornecedores',
        	xtype: 'fornecedorlist'
        }]
    },
    {
        xtype: 'panel',
        bodyStyle:{"background-color":'rgb(172, 186, 185)'},
        draggable: false,
        
        layout:{
            type: 'vbox'
        },
        bind: {
            title: 'Gerenciador de Cantina'
        },
        
        region: 'west',
        width: 250,
        split: true,
        splitterResize: false,
        resizable : true,
        defaults: {
            labelWidth: 80,
            width: 250,
            xtype: 'button',
            
        },
        items: [
        {
        	//aplica o style no elemento que estiver abaixo
        	style: {
                padding: '10px',
                marginTop : '2px',
            
            },
        	xtype: 'button',
        	text: 'Nova Venda',
        	
        	action: 'inserir-venda'
        },
        {
        	//aplica o style no elemento que estiver abaixo
        	style: {
                padding: '10px',
                marginBottom : '5px',
                marginTop:'2px',
            
            },
            xtype: 'button',
            text: 'Inserir Cliente',
            action: 'inserir',
            id: 'btn-inserir'
        },
        {
        	xtype: 'panel',
        	layout: {
        		type: 'hbox'
        	},
        	bodyStyle:{"background-color":'transparent'},
        	
        	items:[
        	       {         
        	    	   	xtype: 'textfield',
        	    	   
        	    	   	width:208,
        	    	   	labelHeight: 40,
        	    	   	labelWidth: 40,
        	    	   	name : 'pesquisar',
        	    	   
        	    	   	fieldLabel: 'Buscar',
        	    	   	
        	    	   	emptyText: 'nome a ser buscado'
        	       },
        	       {	 
        	    	   						
        	    	   xtype: 'button', 
        	    	   width:40,
        	    	   text: 'Ir',
        	    	  // scale   : 'large',
        	    	   action: 'pesquisar',
        	    	   
        	       }
        	]
        },{
        	region: 'south',
        	xtype: 'label',
        	id: 'caixa-total',        	
        	style:{
        		'margin-top': '30px;',
        		'font-family':'initial;',
        		'font-weight':'bold;'
        	},
        	text: 'total caixa'
        }        
        ]
    }
    ]
});
