sap.ui.define(function() {
	"use strict";

	var Formatter = {

		Measure : function (oValue){
			var oValue;
	   
			if(oValue =="g"){
	   var oText= "grams"
			  return oText;
	   
           }else if(oValue == "kg"){
		   return "kilogram";
		   }
		   else
		   {
			return oValue;
	   
		   }
    
        },
         MeasureState : function (oValue){
		var oValue;
   
		if(oValue =="g"){
   
		  return "Warning";
   
	   }else if(oValue == "kg"){
	   return "Success";
	   }
	   else
	   {
		return "Error";
   
	   }
   },
    weightState :  function (fValue) {
	 	try {
    		fValue = parseFloat(fValue);
     		if (fValue < 0) {
				return "None";
	 		} else if (fValue < 1000) {
			return "Success";
		} else if (fValue < 2000) {
				return "Warning";
			} else {
				return "Error";
	 		}
	} catch (err) {
	 		return "None";
	 	}
	},
        formatDate : function(inpt) {
         		   if(inpt)
         		   {
         			   var value = inpt.toString();
         			   
         			   if (value.startsWith("/")) 
         			   {
         				   var sJsonDate = value;
         				   
         				   var sNumber = sJsonDate.replace(/[^0-9]+/g,'');
         				   var iNumber = sNumber * 1; 
         				   var oDate = new Date(iNumber);
         				   
         				   return oDate;
         		       }
         			   else
         			   {
         				   return inpt; 
         			   }
         		   }
         		   else
         		   {
         			   return inpt;
         		   }
                },
                formatJSONDate:function(Input){
							if(Input){
							var dateString = Input.substring(6,19);
							var currentTime = new Date(parseInt(dateString ));
							var month = currentTime.getMonth() + 1;
							var day = currentTime.getDate();
							var year = currentTime.getFullYear();
							var hour = currentTime.getHours();
							var minutes = currentTime.getMinutes();
							var seconds = currentTime.getSeconds();
							var date = day + "-" + month + "-" + year +"  "+ hour +":" + minutes +":"+ seconds;	
						//	var date = "" + hour +":" + minutes +":"+ seconds;
						//	var date = "" + hour +":" + minutes;
												return date;
							}
							else
								{
								return Input;
								}
						},
						
						SystemStatus:function(oValue, oThreshold)
						{
							var Value=parseInt(oValue);
							var Threshold = parseInt(oThreshold);
							
							if(Value < Threshold){
								return "Success"	
							}
							else if(Value >= Threshold)
								{
								return "Error"
								}
							else
								{
								return "None"
								}
							
						},
						
						QueueDepthStatus:function(oQDepth, oQThreshold,oQueueAge,oThreadAge)
						{
							var QueueAge = oQueueAge;
							var ThreadAge = oThreadAge;
							
							if(QueueAge == "X" || ThreadAge == "X"){
								return "Error"
							}
							else {
							var QDepth = parseInt(oQDepth);
							var QThreshold= parseInt(oQThreshold);
							
							if(QDepth < QThreshold){
								return "Good"
								
							}else if(QDepth >= QThreshold)
								{
								return "Error"
								}
							else
								{
								return "Neutral"
								}
							}
						},
						
	};

	return Formatter;

}, /* bExport= */ true);