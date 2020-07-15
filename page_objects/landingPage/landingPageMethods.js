const baseVD = require("../../utilities/baseVD");

var EC = protractor.ExpectedConditions;

var landingPageMethods = function () {

    this.enterHotelDetailsAndSearch = function (city, checkindate, checkoutdate, adultCount, childrenCount, age, starCount) {
        //select city
        browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().destinationTextbox()), 1500)
        baseVD.landingPageElements().destinationTextbox().sendKeys(city)
        //enter checkin-date
        baseVD.utilities().clickElement(baseVD.landingPageElements().checkinDateTextbox(), "calendar")
        browser.sleep(1000)
        browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectDate("jd-" + checkindate)), 5000)
        baseVD.utilities().clickElement(baseVD.landingPageElements().selectDate("jd-" + checkindate), "date")
        //enter checkout date
        baseVD.utilities().clickElement(baseVD.landingPageElements().checkoutDateTextbox(), "calendar")
        browser.sleep(1000)
        browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectDate("jd-" + checkoutdate)), 5000)
        baseVD.utilities().clickElement(baseVD.landingPageElements().selectDate("jd-" + checkoutdate), "date")
        //select adult count
        browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectNumberOfAdultsDropdown()), 5000)
        baseVD.utilities().clickElement(baseVD.landingPageElements().selectNumberOfAdultsDropdown(), "adult dropdown")
        browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectValuesofAdults(adultCount), 5000))
        baseVD.utilities().clickElement(baseVD.landingPageElements().selectValuesofAdults(adultCount), "no of adults")
        if (childrenCount) {
            //select children count
            browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectChilderenCountDropdown()), 5000)
            baseVD.utilities().clickElement(baseVD.landingPageElements().selectChilderenCountDropdown(), "children dropdown")
            browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().selectValuesofChildren(childrenCount), 5000))
            baseVD.utilities().clickElement(baseVD.landingPageElements().selectValuesofChildren(childrenCount), "no of children")
            baseVD.utilities().clickElement(baseVD.landingPageElements().childerenAgeDropdown(), "age dropdown")
            browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().childrenAge(age), 5000))
            baseVD.utilities().clickElement(baseVD.landingPageElements().childrenAge(age), "age")
        }
        //hit more options & select hotel star {This is a bug on web application that selecting star rating on "More Options ++ link" doesn't list hotels in search hotel page.}
        baseVD.utilities().clickElement(baseVD.landingPageElements().hotelOptionsLink(), "option link")
        browser.sleep(1000)
        baseVD.utilities().clickElement(baseVD.landingPageElements().starRatingDropdown(), "star rating dropdown")
        baseVD.utilities().clickElement(baseVD.landingPageElements().selectHotelRating(starCount), "star rating dropdown")
        browser.sleep(1000)
        baseVD.utilities().clickElement(baseVD.landingPageElements().hotelSearchButton(), "search hotel button")

    }

}


module.exports = new landingPageMethods();