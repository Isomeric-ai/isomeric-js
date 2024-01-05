# isomeric-js
Automatically translate unstructured text to machine readable JSON

This package is for integrating with the [Isomeric](https://isomeric.ai) API

# Example Usage

``` javascript
const isomeric = new Isomeric(ISOMERIC_KEY, PLASMO_PUBLIC_ISOMERIC_HOST)

isomeric
    .setText(req.body.html)
    .setSchema(req.body.data)
    .parse()
    .then(response => {
      console.log(response)
    })
```
