"use strict";

const pdf = require("html-pdf");
const requestify = require("requestify");


const config  = require("./config/config");
const options = {
    base: config.base,
    format: config.format
};

config.urls.forEach(url => {
    console.log(`Converting ${url} to PDF...`); 
    
    // Set directory and filename 
    let dir = url.substring(url.indexOf("guides/"));
    let filename = dir.replace(/\//g, "_") + ".pdf";

    requestify.get(url).then(function (response) {
        // Get the raw HTML response body
        let html = response.body; 

        // Create the PDF
        pdf.create(html, options).toFile(dir + filename, function (err, res) {
            if (err) return console.log(err);
            console.log(res);     // { filename: '...' }
        });
    });
}); 
