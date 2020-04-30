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

  // click on button "New group"
  await page.click('[name="new"]')

  //fill group form
  await page.waitForSelector('[name="group_name"]')
  await page.type('[name="group_name"]', 'name 1')
  await page.waitForSelector('[name="group_header"]')
  await page.type('[name="group_header"]', 'header 1')
  await page.waitForSelector('[name="group_footer"]')
  await page.type('[name="group_footer"]', 'footer 1')

  await page.screenshot({
      path: 'group_form_filled.png'
    })

  // click on button "Enter information"
  await page.click('[name="submit"]')

  // return to group page
  await page.click('#container > #content > .msgbox > i > a')

  await page.waitFor(1000)

  await page.screenshot({
      path: 'newgroup.png'
    })

  await browser.close()

})()
