'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = dummyImage;

var _path = require('path');

var _path2 = _interopRequireWildcard(_path);

var _gm = require('gm');

var _gm2 = _interopRequireWildcard(_gm);

require('babel/register');

function dummyImage() {
  'use strict';

  var dummy = 'images/dummy.png';
  var options = {};

  return function (req, res, next) {
    var params = req.query;

    res.set('Content-Type', 'image/png');

    var w = params.w;
    var h = params.h;

    if (!(w || h)) {
      res.sendFile(_path2['default'].resolve(dummy));
    }

    _gm2['default'](dummy).options({ imageMagick: true }).resize(w, h, '!').stroke('#eeeeee').fill('#eeeeee').font('./fonts/NotoSans-Regular.ttf', w / 5).drawText(0, h / 3, 'Dummy!\n' + w + ':' + h).stream(function (err, stdout, stderr) {
      if (err) console.log(err, stderr);else stdout.pipe(res);
    });
  };
}

;
module.exports = exports['default'];

