
var baseVD = require("./../utilities/baseVD.js");
var EC = protractor.ExpectedConditions;

describe('Hotel Search Suite >> ', function () {

    it('User should be able to launch vacationsdirect page', function () {
        try {
            baseVD.launchVD("https://vacationsdirect.com/")
            browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().landingPageTagLine()), 60000);
            var txt = baseVD.utilities().getTextValue(baseVD.landingPageElements().landingPageTagLine(), "tagline")
            expect(txt).toBe("Spread your wings and discover new destinations!")
            expect(browser.getTitle()).toEqual('Home');
        } catch (error) {
            console.log("Seems like an unwanted error in automation code. If error persists, please check with developer - gauravochani18@gmail.com]" + error)
        }
    });

    it('User should be able to search hotels based on user inputs', function () {
        try {
            browser.wait(EC.elementToBeClickable(baseVD.landingPageElements().hotelSearchLink()), 60000);
            baseVD.utilities().clickElement(baseVD.landingPageElements().hotelSearchLink(), "hotel link")
            // User Inputs: Add city, checkindate, checkoutdate, adultCount, childrenCount, age, starCount
            baseVD.landingPageMethods().enterHotelDetailsAndSearch("New York, NY", "08-18-20", "08-22-20", "2", "1", "3", "2")

        } catch (error) {
            console.log("Seems like an unwanted error in automation code. If error persists, please check with developer - gauravochani18@gmail.com]" + error)
        }
    })

    it('User should be able to see hotel rooms based on selecting the hotel', function () {
        try {
            //User Input: Select Star rating on hotel search page
            browser.sleep(5000)
            browser.wait(EC.elementToBeClickable(baseVD.hotelSearchPageElements().starRatingCheckbox("5"), 15000))
            baseVD.utilities().clickElement(baseVD.hotelSearchPageElements().starRatingCheckbox("5"), "star rating checkbox")
            browser.wait(EC.elementToBeClickable(baseVD.hotelSearchPageElements().firstChooseRoomButton(), 15000))
            baseVD.utilities().clickElement(baseVD.hotelSearchPageElements().firstChooseRoomButton(), "choose room button")
            browser.wait(EC.elementToBeClickable(baseVD.hotelSearchPageElements().firstRoom(), 15000))
            baseVD.hotelSearchPageMethods().getAllHotelNames()
        } catch (error) {
            console.log("Seems like an unwanted error in automation code. If error persists, please check with developer - gauravochani18@gmail.com]" + error)
        }
    })

});