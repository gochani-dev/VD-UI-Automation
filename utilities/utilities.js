var utilities = function () {

    this.clickElement = function (element, logMessage) {
        browser.sleep(750)
        var msgPrefix = "clicking "
        return element.click().then(function () {
            console.log(msgPrefix + logMessage)
        })
    }

    this.getTextValue = function (element, logMessage) {
        var msgPrefix = "Value of "
        return element.getText().then(function (text) {
            console.log(msgPrefix + logMessage + " is: " + text)
            return text
        });
    }

}
module.exports = new utilities();