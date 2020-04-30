const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({
      headless: false
    })

  const page = await browser.newPage()

  await page.goto('http://localhost/addressbook/')
  
  // input username
  await page.waitForSelector('[name="user"]')
  await page.type('[name="user"]', 'admin')

  // input password
  await page.waitForSelector('[name="pass"]')
  await page.type('[name="pass"]', 'secret')
  
  // click on button "Login"
  await page.click('[type="submit"]')

  // go to group page
  await page.click('.admin')

  // click on checkbox
  await page.click('[type="checkbox"]')

  // click on button "Delete"
  await page.click('[name="delete"]')

  // return to group page
  await page.click('#container > #content > .msgbox > i > a')

  await page.screenshot({
      path: 'deletegroup.png'
    })

  await browser.close()

})()