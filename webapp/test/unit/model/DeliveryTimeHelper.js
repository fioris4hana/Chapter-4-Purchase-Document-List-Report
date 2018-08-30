sap.ui.define(["fiori/manage/purchase/documents/purchasedocumentslrp/model/DeliveryTimeHelper",
		"fiori/manage/purchase/documents/purchasedocumentslrp/model/deliveryDateService",
		"sap/ui/thirdparty/sinon"
	],
	function (DeliveryTimeHelper, oDeliveryDateService, sinon) {
		"use strict";

		var PURCHASE_DOCUMENT = "1";

		QUnit.module("Get Delivery Time in Days", {
			beforeEach: function () {
				var oDeliveryServiceStub = sinon.stub(oDeliveryDateService, "getDeliveryDatesOfItems");
				var oToday = new Date();
				var oDeliveryDate1 = new Date().setDate(oToday.getDate() + 6);
				var oDeliveryDate2 = new Date().setDate(oToday.getDate() + 5);
				oDeliveryServiceStub.returns([oDeliveryDate1, oDeliveryDate2]);
			},
			afterEach: function () {
				oDeliveryDateService.getDeliveryDatesOfItems.restore();
			}
		});

		QUnit.test("6 days until delivery of all Purchase Document Items", function (assert) {
			// Arrange
			var oDeliveryTimeHelper = new DeliveryTimeHelper(oDeliveryDateService);
			// Act
			var iDaysUntilDelivery = oDeliveryTimeHelper.getDeliveryTime(PURCHASE_DOCUMENT);
			// Assert
			assert.strictEqual(iDaysUntilDelivery, "6d", "OK - Returned: " + iDaysUntilDelivery);
		});
	});
	
	