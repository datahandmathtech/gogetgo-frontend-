
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5005", { waitUntil: "networkidle0" });
  
  const styles = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    
    return {
      h1: h1 ? window.getComputedStyle(h1).fontFamily : "No H1",
      h2: h2 ? window.getComputedStyle(h2).fontFamily : "No H2",
      h1Class: h1 ? h1.className : "",
      h2Class: h2 ? h2.className : "",
      cssVars: {
        playfair: getComputedStyle(document.body).getPropertyValue("--font-playfair"),
        heading: getComputedStyle(document.body).getPropertyValue("--font-heading")
      }
    };
  });
  
  console.log(JSON.stringify(styles, null, 2));
  
  await browser.close();
})();

