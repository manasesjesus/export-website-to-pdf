"use strict";

const config = {
    // Base path that is used to load files (images, css, js) when they aren't referenced using a host
    base: "https://cumulocity.com",
    // Paper size
    format: "A4",
    // The URLs to convert
    urls: [
        // Concepts guide
        "https://cumulocity.com/guides/concepts/introduction/",
        "https://cumulocity.com/guides/concepts/domain-model/",
        "https://cumulocity.com/guides/concepts/interfacing-devices/",
        "https://cumulocity.com/guides/concepts/realtime/",
        "https://cumulocity.com/guides/concepts/applications/",
        "https://cumulocity.com/guides/concepts/security/"
    ]
};
   
module.exports = config;
