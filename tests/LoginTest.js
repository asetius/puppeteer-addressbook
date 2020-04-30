const puppeteer = require('../node_modules/puppeteer');
const LoginPage = require('../pages/LoginPage');
var data = require('../config/data.json');
var loginPage = new LoginPage();

(async() => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-fullscreen']});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto(data.url);

    await loginPage.typeUserName(page, data.user);
    await loginPage.typePassword(page, data.password);
    await loginPage.clickLogin(page);
    await page.screenshot({path: '../screenshots/LoggedPage.png'});

    await browser.close();
})();