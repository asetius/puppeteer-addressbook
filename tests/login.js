const puppeteer = require('../node_modules/puppeteer');

const screenshot = '../screenshots/login.png';

(async () => {

  const browser = await puppeteer.launch({
      headless: false
    })

  const page = await browser.newPage()

  await page.goto('http://localhost/addressbook/')

  await page.waitForSelector('[name="user"]', {visible: true})
  await page.type('[name="user"]', 'admin')

  await page.waitForSelector('[name="pass"]', {visible: true})
  await page.type('[name="pass"]', 'secret')

  await page.click('[type="submit"]', {visible: true})
 
  await page.screenshot({
      path: screenshot
    })

  await browser.close()

  //console.log('See screenshot: ' + screenshot)

})()

