require('babel/register');

import path from 'path';

import gm from 'gm';


export default function dummyImage() {
  let dummy = 'images/dummy.png';
  let options = {};

  return (req, res, next) => {
    let params = req.query;

    res.set('Content-Type', 'image/png');

    let w = params.w;
    let h = params.h;

    if (!(w || h)) {
      res.sendFile(path.resolve(dummy));
    }

    gm(dummy)
      .options({imageMagick: true})
      .resize(w, h, '!')
      .stroke('#eeeeee')
      .fill('#eeeeee')
      .font('./fonts/NotoSans-Regular.ttf', w / 5)
      .drawText(0, h / 3, `Dummy!\n${w}:${h}`)
      .stream((err, stdout, stderr) => {
        if (err) console.log(err, stderr);
        else stdout.pipe(res);
      });
  };
}
