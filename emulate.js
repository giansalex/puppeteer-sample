const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  const browser = await puppeteer.launch({timeout: 0})
  const page = await browser.newPage()
  await page.emulate(devices['iPhone 6'])
  await page.goto('http://quertium.com/')

  await page.waitFor(2000); // load animation
  await page.screenshot({path: 'full.png', fullPage: true})
  console.log(await page.title())
  await browser.close()
})()