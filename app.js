const puppeteer = require('puppeteer');

(async () => {
  try {
    // Launch a new browser instance in headless mode
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    // Define the URL to crawl
    const url = 'https://www.lme.com/api/trading-data/day-delayed?datasourceId=762a3883-b0e1-4c18-b34b-fe97a1f2d3a5';
  
    // Navigate to the URL
    await page.goto(url, { waitUntil: 'networkidle2' });
  
    // Wait for the response and get the JSON data
    const response = await page.waitForResponse(response => response.url() === url && response.status() === 200);
    const data = await response.json();
  
    // Output the extracted data
    console.log(data);
  
    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
