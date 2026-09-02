
const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5005/multi-day-taxi-packages", { waitUntil: "networkidle0" });
  
  const rules = await page.evaluate(() => {
    let fontSerifRule = null;
    let fontHeadingRule = null;
    for (let sheet of document.styleSheets) {
      try {
        for (let rule of sheet.cssRules) {
          if (rule.selectorText === ".font-serif") fontSerifRule = rule.cssText;
          if (rule.selectorText === "h1, h2, h3, h4, h5, h6") fontHeadingRule = rule.cssText;
        }
      } catch(e) {}
    }
    return { fontSerifRule, fontHeadingRule };
  });
  
  console.log(JSON.stringify(rules, null, 2));
  await browser.close();
})();

