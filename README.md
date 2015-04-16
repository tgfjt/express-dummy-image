# express dummy image

middleware for Express to serve dummy image



## Requirement

* ImageMagick


## Usage

```js
var express = require('express')
var dummy = require('express-dummy-image')

var app = express()

app.use('/images', dummy())

app.listen(3000)
```

see also example directory.

## Install

`npm install express-dummy-image`


## License

[MIT](https://github.com/tgfjt/express-dummy-image/blob/master/LICENSE)

### NotoSans-Regular.ttf
[Apache License, version 2.0](http://www.google.com/fonts/specimen/Noto+Sans)
