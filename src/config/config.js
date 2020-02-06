"use strict";

const release = "10.5.7";
const config = {
    // The URLs to convert
    urls: [
        // Concepts guide
        { 
            saveAs: `guides/${release}/concepts/introduction.pdf`,
            from: "https://cumulocity.com/guides/concepts/introduction/"
        },
        { 
            saveAs: `guides/${release}/concepts/domain-model.pdf`,
            from: "https://cumulocity.com/guides/concepts/domain-model/"
        },
        { 
            saveAs: `guides/${release}/concepts/interfacing-devices.pdf`,
            from: "https://cumulocity.com/guides/concepts/interfacing-devices/"
        },
        { 
            saveAs: `guides/${release}/concepts/realtime.pdf`,
            from: "https://cumulocity.com/guides/concepts/realtime/"
        },
        { 
            saveAs: `guides/${release}/concepts/applications.pdf`,
            from: "https://cumulocity.com/guides/concepts/applications/"
        },
        { 
            saveAs: `guides/${release}/concepts/security.pdf`,
            from: "https://cumulocity.com/guides/concepts/security/"
        },

        // Microservice SDK guide
        {
            saveAs: `guides/${release}/microservice-sdk/introduction.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/introduction/"
        },
        {
            saveAs: `guides/${release}/microservice-sdk/concept.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/concept/"
        },
        {
            saveAs: `guides/${release}/microservice-sdk/java.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/java/"
        },
        {
            saveAs: `guides/${release}/microservice-sdk/cs.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/cs/"
        },
        {
            saveAs: `guides/${release}/microservice-sdk/rest.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/rest/"
        },
        {
            saveAs: `guides/${release}/microservice-sdk/examples.pdf`,
            from: "https://cumulocity.com/guides/microservice-sdk/http/"
        }
    ]
};

module.exports = config;
