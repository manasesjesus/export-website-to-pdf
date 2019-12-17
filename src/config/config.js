"use strict";

const config = {
    // Base path that is used to load files (images, css, js) when they aren't referenced using a host
    base: "https://cumulocity.com",
    // Paper size
    format: "A4",
    // The URLs to convert
    urls: [
        // Concepts guide
        { 
            saveAs: "concepts/introduction.pdf",
            from: "https://cumulocity.com/guides/concepts/introduction/"
        },
        { 
            saveAs: "concepts/domain-model.pdf",
            from: "https://cumulocity.com/guides/concepts/domain-model/"
        },
        { 
            saveAs: "concepts/interfacing-devices.pdf",
            from: "https://cumulocity.com/guides/concepts/interfacing-devices/"
        },
        { 
            saveAs: "concepts/realtime.pdf",
            from: "https://cumulocity.com/guides/concepts/realtime/"
        },
        { 
            saveAs: "concepts/applications.pdf",
            from: "https://cumulocity.com/guides/concepts/applications/"
        },
        { 
            saveAs: "concepts/security.pdf",
            from: "https://cumulocity.com/guides/concepts/security/"
        }        
    ]
};

module.exports = config;
