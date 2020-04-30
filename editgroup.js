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

  // select group
  await page.click('[type="checkbox"]')

  // click on button "Edit group"
  await page.click('[name="edit"]')

  //fill group form
  let name_form = await page.$('[name="group_name"]')
  await name_form.waitForSelector()
  await name_form.click({clickCount: 3})
  await name_form.press('Backspace')
  await name_form.type('name 2')
  let header_form = await page.$('#group_header')
  await header_form.waitForSelector()
  await header_form.click({clickCount: 3})
  await header_form.press('Backspace')
  await header_form.type('header 2')
  let footer_form = await page.$('#group_footer')
  await footer_form.waitForSelector()
  await footer_form.click({clickCount: 3})
  await footer_form.press('Backspace')
  await footer_form.type('footer 2')

  await page.screenshot({
      path: 'group_form_modified.png'
    })

  // click on button "Enter information"
  await page.click('[name="update"]')

  // return to group page
  await page.click('#container > #content > .msgbox > i > a')

  await page.waitFor(1000)

  await page.screenshot({
      path: 'editgroup.png'
    })

  await browser.close()

})()