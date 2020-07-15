var baseVD = function () {

    this.utilities = function () {
        return require('../utilities/utilities.js')
    }

    this.hotelSearchPageElements = function () {
        return require('../page_objects/hotelSearchPage/hotelSearchPageElements.js')
    }

    this.hotelSearchPageMethods = function () {
        return require('../page_objects/hotelSearchPage/hotelSearchPageMethods.js')
    }

    this.landingPageElements = function () {
        return require('../page_objects/landingPage/landingPageElements.js')
    }

    this.landingPageMethods = function () {
        return require('../page_objects/landingPage/landingPageMethods.js')
    }

    this.launchVD = function (url) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }

}
module.exports = new baseVD();