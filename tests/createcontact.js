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

  // go to contact form
  await page.click('.all')

  //fill contact form
  await page.waitForSelector('[name="firstname"]')
  await page.type('[name="firstname"]', 'firstname 1')
  await page.waitForSelector('[name="lastname"]')
  await page.type('[name="lastname"]', 'lastname 1')
  await page.waitForSelector('[name="address"]')
  await page.type('[name="address"]', 'address')

  await page.screenshot({
      path: 'contact_form.png'
    })

  // click on button "Enter information"
  await page.click('[name="submit"]')

  // return to group page
  await page.click('[name=home page]')

  await page.waitFor(1000)

  await page.screenshot({
      path: 'newcontact.png'
    })

  await browser.close()

})()