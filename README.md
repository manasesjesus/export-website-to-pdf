## Export a website to PDF

Most things that you can do manually in the browser can be automated, e.g. saving a web page as PDF.
For instance, you may need to save tutorials or user guides to access them offline or print them (hopefully not, save trees).

This program saves as PDF all the specified web pages: 

**_src/config/config.js_**
```json
urls: [
    // Microservice SDK guide
    {
        saveAs: `guides/${release}/microservice-sdk/introduction.pdf`,
        from: "https://cumulocity.com/guides/microservice-sdk/introduction/"
    },
    {
        saveAs: `guides/${release}/microservice-sdk/concept.pdf`,
        from: "https://cumulocity.com/guides/microservice-sdk/concept/"
    }
]
```

#### Install the dependencies

```shell
$ npm install
```

#### Run the application

```shell
$ npm start
```
