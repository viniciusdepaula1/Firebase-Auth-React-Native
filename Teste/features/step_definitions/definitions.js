const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/get_driver');
const $ = require('webdriverio');

const short_time = 2000;
const long_time = 5000;

Given("I'm on the home page", async function () {
    await driver.pause(long_time);
});

Given("I click on the {string} button", async function (arg1) {
    await driver.pause(short_time);
    await driver.click(`android=new UiSelector().description("${arg1}")`);
});

Given("The {string} field is filled with {string}", async function (arg1, arg2) {
    await driver.pause(long_time);
    await driver.setValue(`android=new UiSelector().description("${arg1}")`, arg2);
}); 

//***Encontra botão pelo classname e pelo index***
Given("I click on the button with classname {string} and index = {string}", async function (arg1,arg2) {
    await driver.pause(short_time);
  await driver.click(`android=new UiSelector().className("${arg1}").enabled(true).instance(${arg2})`);
});

Given("I click on the item with classname {string} and index = {string}, which has coordinates x = {string} and y = {string}", async function (arg1, arg2, arg3, arg4) {
    await driver.pause(short_time);
    // webdriver.io example
    //O ponto (0, 0) refere-se ao canto superior esquerdo da página. As coordenadas do elemento são retornadas como um objeto JSON com propriedades x e y
    let location = await driver.getLocation(`android=new UiSelector().className("${arg1}").enabled(true).instance(${arg2})`);
    console.log(location);
    await driver.pause(short_time);
    await driver.touchPerform([{
        action: 'tap',
        options: {
            x: arg3,
            y: arg4
        }
    }]);
});

Then("Test DONE -> Written {string} on the page", async function (arg1) {
    await driver.pause(long_time);
    const texto_esperado = await driver.getText(`android=new UiSelector().textMatches("${arg1}")`);
    
    console.log(texto_esperado)

    await driver.pause(short_time);
});

//***Encontra o botão pelo que está escrito nele***
When("I click on the button with the text {string}", async function (arg1) {
    await driver.pause(short_time);
    await driver.click(`android=new UiSelector().textMatches("${arg1}")`);
});

Given("The field written {string} is filled with {string}", async function (arg1, arg2) {
    await driver.pause(long_time);
    await driver.setValue(`android=new UiSelector().textStartsWith("${arg1}")`, arg2);
});


When("I click on the page", async function () {
    await driver.pause(long_time);
    await driver.touchPerform([{
        action: 'tap',
        options: {
            x: 100,
            y: 250
        
        }
    }]);
});


Given("The field with the text {string} is filled with {string}", async function (arg1, arg2) {
    await driver.pause(long_time);
    await driver.setValue(`android=new UiSelector().textMatches("${arg1}")`, arg2);
}); 

When("I move the screen", async function () {
    await driver.pause(long_time);
    
    // Javascript
    // webdriver.io example
    await driver.touchPerform([
        { action: 'press', options: { x: 100, y: 250 } },
        { action: 'moveTo', options: { x: 400, y: 100 } },
        { action: 'release' }
    ]);
});

Then("The data {string} will appear on top of the marker with classname {string} and index = {string}", async function (arg1, arg2, arg3) {
    await driver.pause(long_time);
    const texto_esperado = await driver.getText(`android=new UiSelector().className("${arg2}").enabled(true).instance(${arg3})`);
    const nova_Tela = await driver.getText().then((text) => {
        console.log(text, "segundo console ")
        resultado = text.substring(0, 6)
        assert.equal(resultado, arg1)

    })
});



//PARA CLICAR - await driver.click('android=new UiSelector().textStartsWith("Digit")');
//<Text style={} accessibilityLavel="texto_Titulo_Selecione" resource-id="texto_Titulo_Selecione" >
//Selecione a estação
//</Text>

// android:id/button2
// bounds	[450,1045][656,1189]

// Identificador no botão entrar