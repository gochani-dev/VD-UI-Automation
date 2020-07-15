// conf.js
const DescribeFailureReporter = require('protractor-stop-describe-on-failure');
var capabilities = {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ['--no-sandbox', '--disable-gpu', '--disable-features=NetworkService', '--window-size=1920x1080', '--disable-features=VizDisplayCompositor', '--disable-dev-shm-usage', '--test-type=browser'],

    }

};

exports.config = {
    framework: 'jasmine',
    //directConnect: true,
    specs: ['../tests/spec.js'],

    allScriptsTimeout: 25000,
    capabilities: capabilities,
    jasmineNodeOpts: { defaultTimeoutInterval: 260000 },

    onPrepare: function () {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(DescribeFailureReporter(jasmine.getEnv()));
        let HtmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports_new',
            screenshotsSubfolder: 'screenshotsOnFailure',
            takeScreenShotsOnlyForFailedSpecs: true,
            jsonsSubfolder: 'jsonFiles',
            excludeSkippedSpecs: true,
            preserveDirectory: false,
            clientDefaults: {
                showTotalDurationIn: "header",
                totalDurationFormat: "h:m:s",
                gatherBrowserLogs: true
            },
        }).getJasmine2Reporter());
    }
}