# isomeric-js

This javascript SDK is a basic implementation of the Isomeric generate request.

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
