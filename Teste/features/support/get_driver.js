const webdriverio = require('webdriverio');

//paramters to find device and application
let options = {
    desiredCapabilities: {
        platformName: "Android",
        deviceName: "LGK220ZH4LO77S",
        platformVersion: "6.0.1",
        appPackage: "com.firebasetutorial", //package name
        appActivity: ".MainActivity", //activity name
        resetKeyboard: true,
        noReset: true,
        unicodeKeyboard: true
    },
    host: "127.0.0.1",
    port: 4723
}

//create WebDriverIO instance with the options;
function createDriver() {
    const client = webdriverio.remote(options);
    return client;
}

exports.driver = createDriver();