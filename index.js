const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
      height: 1280,
      width: 1024
  });
  await page.goto('http://quertium.com');
  await page.waitFor(2000);
  await page.screenshot({path: 'quertium.png'});

  await browser.close();
})();