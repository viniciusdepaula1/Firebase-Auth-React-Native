const { After, BeforeAll, Before, AfterAll, setDefaultTimeout } = require('cucumber');
const { driver } = require('./get_driver');

//set default step timeout
setDefaultTimeout(60 * 1000);

BeforeAll(function () {
    return driver.init();
})

//Before Scenario Hook
Before(async function () {
})

//After Scenario Hook
After(async function () {
    //capture screenshot after each scenario
    let screenshot = await driver.saveScreenshot();
    this.attach(screenshot, 'image/png');
});

AfterAll(async function () {
    //perform teardown
    await driver.end();
})
