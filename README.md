# express dummy image

middleware for Express to serve dummy image

[![NPM](https://nodei.co/npm/express-dummy-image.png)](https://nodei.co/npm/express-dummy-image/)

## Requirement

* [ImageMagick](http://www.imagemagick.org/)

## Usage

```js
var express = require('express')
var dummy = require('express-dummy-image')

var app = express()

app.use('/images', dummy())

app.listen(3000)
```

get:

* `http://localhost:3000/images/?w=70&h=70`
* `http://localhost:3000/images/?w=400&h=300`

see also example directory.

## Install

`npm install express-dummy-image`

## License

[MIT](https://github.com/tgfjt/express-dummy-image/blob/master/LICENSE)

### NotoSans-Regular.ttf
[Apache License, version 2.0](http://www.google.com/fonts/specimen/Noto+Sans)
