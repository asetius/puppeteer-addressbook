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

  // select contact
  await page.click('[type="checkbox"]')

  // click on button "Delete"
  await page.click('[value="Delete"]')

  // popup click on button "OK"
  await page.waitForNavigation()

  await page.waitFor(1000)

  await page.screenshot({
      path: 'deletecontact.png'
    })

  await browser.close()

})()

