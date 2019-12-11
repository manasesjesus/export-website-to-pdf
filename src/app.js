"use strict";

const pdf = require("html-pdf");
const requestify = require("requestify");

var externalURL= "http://...";


requestify.get(externalURL).then(function (response) {
    // Get the raw HTML response body
    let html = response.body; 
    let config = {
        format: "A4", 
        base: "https://cumulocity.com"
    };

    // Create the PDF
    pdf.create(html, config).toFile('generated-pdf/generated.pdf', function (err, res) {
      if (err) return console.log(err);
      console.log(res);     // { filename: '...' }
   });
});
