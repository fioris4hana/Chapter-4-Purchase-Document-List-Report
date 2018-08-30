sap.ui.define(["sap/ui/base/Object"], function (BaseObject) {
	var DeliveryTimeHelper = BaseObject.extend("fiori.manage.purchase.documents.purchasedocumentslrp." +
		"model.DeliveryTimeHelper", {

			constructor: function (oDeliveryDateService) {
				this.oDeliveryDateService = oDeliveryDateService;
			},

			_getMaxDeliveryDate: function (aDeliveryDates) {
				return new Date(Math.max.apply(null, aDeliveryDates));
			},

			_getDaysUntilDelivery: function (oMaxDeliveryDate) {
				var oToday = new Date();
				var deliveryTimeInMilliseconds = oMaxDeliveryDate - oToday;
				return Math.ceil(deliveryTimeInMilliseconds / (1000 * 60 * 60 * 24));
			},

			getDeliveryTime: function (sPurchaseDocument) {
				var aDeliveryDates = this.oDeliveryDateService.getDeliveryDatesOfItems(sPurchaseDocument);

				var oMaxDeliveryDate = this._getMaxDeliveryDate(aDeliveryDates);
				jQuery.sap.log.debug("Max Delivery Date Purchase Document Items: " + oMaxDeliveryDate.toString());

				var iDays = this._getDaysUntilDelivery(oMaxDeliveryDate);
				return "" + iDays + "d";
			}
		});

	return DeliveryTimeHelper;
});

