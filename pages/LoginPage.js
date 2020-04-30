const puppeteer = require('../node_modules/puppeteer');

class LoginPage {
    async typeUserName(page, text) {
        await page.type('[name="user"]', text)
    }

    async typePassword(page, text) {
        await page.type('[name="pass"]', text)
    }

    async clickLogin(page) {
        await page.click('[type="submit"]')
    }
}

module.exports = LoginPage;