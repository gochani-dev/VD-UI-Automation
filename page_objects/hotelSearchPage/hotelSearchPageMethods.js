const baseVD = require("../../utilities/baseVD");

var EC = protractor.ExpectedConditions;

var hotelSearchPageMethods = function () {

    this.getAllHotelNames = function () {
        var names = baseVD.hotelSearchPageElements().roomListNames()
        names.each(function (name) {
            name.getText().then(function (val) {
                console.log("Available room: " + val)
            })
        })


    }


}


module.exports = new hotelSearchPageMethods();