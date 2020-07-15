var EC = protractor.ExpectedConditions;
var landingPageElements = function () {

    this.hotelSearchLink = function () {
        return element(by.id("search-hotel-button"))
    }

    this.destinationTextbox = function () {
        return element(by.id("inputDestination"))
    }

    this.checkinDateTextbox = function () {
        return element(by.id("inputCheckInDate"))
    }

    this.checkoutDateTextbox = function () {
        return element(by.id("inputCheckOutDate"))
    }

    this.selectNumberOfAdultsDropdown = function () {
        return element(by.id("selectHotelNumberAdults"))
    }//select[@id='selectHotelNumberAdults']/option[@value='1']

    this.selectValuesofAdults = function (n) {
        return element(by.xpath("//select[@id='selectHotelNumberAdults']/option[@value=" + n + "]"))
    }

    this.selectValuesofChildren = function (n) {
        return element(by.xpath("//select[@id='selectHotelNumberChildren']/option[@value=" + n + "]"))
    }

    this.selectChilderenCountDropdown = function () {
        return element(by.id("selectHotelNumberChildren"))
    }

    this.childerenAgeDropdown = function () {
        return element(by.id("child0HotelAge"))
    }

    this.childrenAge = function (age) {
        intAge = parseInt(age)
        if (intAge < 2)
            return element(by.xpath("//select[@id='child0HotelAge']/option[@value='1']"))
        else {
            return element(by.xpath("//select[@id='child0HotelAge']/option[@value=" + age + "]"))
        }
    }


    this.hotelOptionsLink = function () {
        return element(by.id("hotelOptionsLink"))
    }

    this.starRatingDropdown = function () {
        return element(by.id("selectStarRating"))
    }

    this.selectHotelRating = function (starCount) {
        var str = starCount + "+ stars"
        return element(by.xpath("//option[contains(text(),'" + str + "')]"))
    }

    this.hotelSearchButton = function () {
        return element(by.id("hotelSearchButton"))
    }

    this.landingPageTagLine = function () {
        return element(by.xpath("//h2[text()='Spread your wings and discover new destinations!']"))
    }

    this.selectDate = function (id) {
        return element(by.id(id))
    }



}


module.exports = new landingPageElements();