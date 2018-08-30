sap.ui.define([], function () {
	"use strict";
	return {
		getDeliveryDatesOfItems: function (sPurchaseDocument) {
			var iNumOfItems = Math.floor((Math.random() * 5) + 1);
			var aDeliveryTimes = [];
			for (var i = 0; i < iNumOfItems; i++) {
				var oDate = new Date();
				var iDays = Math.floor((Math.random() * 30) + 1);
				oDate.setDate(oDate.getDate() + iDays);
				jQuery.sap.log.debug("Purchase Document Item Delivery Date: " + oDate.toString());
				aDeliveryTimes.push(oDate);
			}
			return aDeliveryTimes;
		}
	};
});