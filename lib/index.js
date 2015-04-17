import path from 'path';

import gm from 'gm';


export default function dummyImage() {
  const dummy = 'images/dummy.png';

  return (req, res, next) => {
    const params = req.query;

    res.set('Content-Type', 'image/png');

    const w = params.w;
    const h = params.h;
    let size;

    if (!(w || h)) {
      res.sendFile(path.resolve(dummy));
    }

    if (w > 80) {
      size = 20;
    } else {
      size = 10;
    }

    gm(dummy)
      .options({imageMagick: true})
      .resize(w, h, '!')
      .stroke('#eeeeee')
      .fill('#eeeeee')
      .font('./fonts/NotoSans-Regular.ttf', size)
      .drawText(0, 0, `${w} x ${h}`, ['center'])
      .stream((err, stdout, stderr) => {
        if (err) console.log(err, stderr);
        else stdout.pipe(res);
      });
  };
}
