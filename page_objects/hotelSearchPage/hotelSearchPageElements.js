var EC = protractor.ExpectedConditions;
var hotelSearchPageElements = function () {

    this.starRatingCheckbox = function (n) {
        var fltr = 'StarRatingFilter' + n
        return element(by.xpath("(//label[@for='" + fltr + "']/span)[1]"))
    }

    this.firstChooseRoomButton = function () {

        return element(by.xpath("(//button[text()='Choose Room'])[1]"))


    }
    this.roomListNames = function () {
        return element.all(by.xpath("//ul[@class='hotel-rooms-container hotel-redesign-rooms-container js-room-list']/li/div/div/div/div/dl/dd/h4"))
    }

    this.firstRoom = function () {
        return element(by.xpath("(//ul[@class='hotel-rooms-container hotel-redesign-rooms-container js-room-list']/li/div/div/div/div/dl/dd/h4)[1]"))
    }

}


module.exports = new hotelSearchPageElements();