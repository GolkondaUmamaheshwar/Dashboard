sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
     "sap/m/library",
     "ux/dashboardbas/util/formatter",
     "sap/ui/model/odata/v2/ODataModel"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, mobilelibrary, JSONModel, formatter, ODataModel ) {
        "use strict";
        var PopinLayout = mobilelibrary.PopinLayout;
     
		return Controller.extend("ux.dashboardbas.controller.main", {
            formatter:formatter,
             
             
			onInit: function () {
                
         
        var oVizFrame = this.getView().byId("idVizFrame2");
	 var oModel = new sap.ui.model.json.JSONModel();
   var data = {
		   'Count' : [
			   {"Status": "Total","Value": "1234"},
			   {"Status": "Inbound","Value": "9127"},
			  
				{"Status": "Outbound","Value": "15957"},
				{"Status": "Profit","Value": "20000"},
				
			  ]};
   oModel.setData(data);
   
   var oDataset = new sap.viz.ui5.data.FlattenedDataset({
	   dimensions : [{
		   name : 'Status',
		   value : "{Status}"}],
					  
	   measures : [{
		   name : 'Count',
		   value : '{Value}'} ],
					
	   data : {
		   path : "/Count"
	   }
   });		
   oVizFrame.setDataset(oDataset);
   oVizFrame.setModel(oModel);	
   oVizFrame.setVizType('line');
   
   
   oVizFrame.setVizProperties({
   
	   plotArea: {
	  // 	colorPalette : d3.scale.category20().range
	   dataLabel: {
					   visible: "true"
				   }
				
		   }});
   
   var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		 'uid': "valueAxis",
		 'type': "Measure",
		 'values': ["Count"],
		 'label':"true"
	   }), 
	   feedDataAxis =   new sap.viz.ui5.controls.common.feeds.FeedItem({
		'uid': "DataAxis",
		'type': "Measure",
		'values': ["Count"],
		'label':"true"
	  }), 
	   feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		 'uid': "categoryAxis",
		 'type': "Dimension",
		 'values': ["Status"]
	   });
   oVizFrame.addFeed(feedValueAxis);
   oVizFrame.addFeed(feedCategoryAxis);
   oVizFrame.addFeed(feedDataAxis);
   



// end of bar Chart 

// Pie Chart
this._setIceCreamModel();

//End of Pie Chart

                //   var that=this;
				//    var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
	
				//       var oModel = new ODataModel(sServiceUrl);
				// //      // @ts-ignore
                //   this.getView().setModel(oModel);
                  
			// crm model
				  var oCRMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1001')?$format=json");
				  // @ts-ignore
				  this.getView().byId("crmcontainer").setModel(oCRMModel,"CRM");

				  // workday model
				  var oWDModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1011')?$format=json");
				  // @ts-ignore
				  this.getView().byId("wdcontainer").setModel(oWDModel,"WD");
				  
			},

			onAfterRendering:function(){
				// ecc model
				var oECCModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-FB-1005')?$format=json");
				// @ts-ignore
				this.getView().byId("ecccontainer").setModel(oECCModel,"ECC");

				// successfactors model
				var oSFCModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products('AR-T-1005')?$format=json");
				// @ts-ignore
				this.getView().byId("sapsfcontainer").setModel(oSFCModel,"SFC");
			},

			onBeforeRendering:function(){
			
				var oBWModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("bwcontainer").setModel(oBWModel,"oBWModel");

				var oPLMModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("plmcontainer").setModel(oPLMModel,"oPLMModel");
				   // java model
				var oAWSModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("awscontainer").setModel(oAWSModel,"AWS");
				   // Aws model
				var oSFModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
				// @ts-ignore
				this.getView().byId("sfcontainer").setModel(oSFModel,"SF");

            },
            onOpenAppDialog: function(oEvent){
				// @ts-ignore
				// @ts-ignore
				var   IvSystem ;
			//	var InpDate ="";
			//	var 	InpDate =this.getView().byId("CurrentDate").getValue();
			//	   var oModel =  new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/ZPI_DASHBOARD_SRV/PI_DSHBRDSet(IvSystem='ECC',IvDate='"+InpDate+"')?$expand=EtResultQueueSet,EtResultSystemSet,EtResultAppSet&$format=json");
				//   oModel.setSizeLimit(mSize);
				
				
					
				   // @ts-ignore
				   var oView = this.getView();
				   var oDialog = oView.byId("ADialog");
				 //  oDialog.setModel(oModelFetch, "tableModel");
				   // create dialog lazily
				   if (!oDialog) {
					   // create dialog via fragment factory
			           // @ts-ignore
			           oDialog = sap.ui.xmlfragment(oView.getId(), "ux.dashboardbas.view.AppDialog", this);
			           oView.addDependent(oDialog);
				   }
				  
                   oDialog.open();

				   var oModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Suppliers?$format=json");
				this.getView().byId("ADialog").setModel(oModel,"oModel");


			


                    // @ts-ignore
			//	var oModel=	this.getView().byId("crmcontainer").getModel("CRM");
				// @ts-ignore
			//	oModel.refresh();
				// @ts-ignore
		//		this.getView().setModel(oModel,"oModel");
               },
               
			   _setIceCreamModel:function(){

				var aData = {
						Items : [  
							{
								Flavor:"Blue Moon",
								Sales : 700
							},
							{
								Flavor:"Matcha Green Tea",
								Sales : 1100
							},
							{
								Flavor:"ButterScotch",
								Sales : 1400
							},
							{
								Flavor:"Black Current",
								Sales : 560
							}
							]
				};
				var oIceCreamModel = new sap.ui.model.json.JSONModel();
				oIceCreamModel.setData(aData);
				this.getView().byId("chartContainer").setModel(oIceCreamModel, "IceCreamModel");
    },
    
    onReport: function(){
       var serviceurl="/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
        var oModel= new ODataModel(serviceurl);
         this.getView().byId("items").setModel(oModel);
		},
    

 onPopinLayoutChanged: function() {
			var oTable = this.byId("ProductsTable");
			var oComboBox = this.byId("idPopinLayout");
			var sPopinLayout = oComboBox.getSelectedKey();
			switch (sPopinLayout) {
				case "Block":
					oTable.setPopinLayout(PopinLayout.Block);
					break;
				case "GridLarge":
					oTable.setPopinLayout(PopinLayout.GridLarge);
					break;
				case "GridSmall":
					oTable.setPopinLayout(PopinLayout.GridSmall);
					break;
				default:
					oTable.setPopinLayout(PopinLayout.Block);
					break;
			}
        },
        
		onSelect: function(oEvent) {
			var bSelected = oEvent.getParameter("selected"),
				sText = oEvent.getSource().getText(),
				oTable = this.byId("ProductsTable"),
				aSticky = oTable.getSticky() || [];

			if (bSelected) {
				aSticky.push(sText);
			} else if (aSticky.length) {
				var iElementIndex = aSticky.indexOf(sText);
				aSticky.splice(iElementIndex, 1);
			}

			oTable.setSticky(aSticky);
		},

		onToggleInfoToolbar: function(oEvent) {
			var oTable = this.byId("ProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
        }
        




     
		});
	});
