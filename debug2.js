
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5005/multi-day-taxi-packages", { waitUntil: "networkidle0" });
  
  const fonts = await page.evaluate(() => {
    const el = document.querySelector("h2"); // ONE VEHICLE. ONE DRIVER...
    if (!el) return null;
    return {
      text: el.innerText,
      className: el.className,
      computedFont: window.getComputedStyle(el).fontFamily,
      bodyVar: window.getComputedStyle(document.body).getPropertyValue("--font-playfair")
    };
  });
  
  console.log(JSON.stringify(fonts, null, 2));
  await browser.close();
})();

