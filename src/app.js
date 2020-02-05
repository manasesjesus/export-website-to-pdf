"use strict";

const puppeteer = require("puppeteer");
const fs = require("fs");

const config = require("./config/config");

// Format settings
const options = {
    format: "A4",
    printBackground: true,
    margin: {
        top: "30px",
        bottom: "30px",
        left: "38px",
        right: "38px"
    }
};

// Where the magic happens...
console.log(`Converting ${config.urls.length} pages to PDF...`);
console.log("You may take a coffee meanwhile...");

config.urls.forEach(url => {
    (async () => {
        const browser = await puppeteer.launch();
        const page    = await browser.newPage();

        await page.goto(url.from, {
            waitUntil: "networkidle2"
        });
        await page.setViewport({ width: 1680, height: 1050 });

        // Check if the directory exists, create it otherwise
        let dir = url.saveAs.substr(0, url.saveAs.lastIndexOf("/"));
        !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

        // Create the PDF
        options["path"] = url.saveAs;
        await page.pdf(options);

        await browser.close();
    })();
});
