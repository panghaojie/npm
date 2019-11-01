import util  from '../lib/phj-util'

let test = function () {
    // need <div id="qrcode" style="width:100px;height:100px;"></div>

    // canvas
    util.qrcode({
        id: 'qrcode',
        type: 'canvas',
        text: 'http://insistime.com/'
    });

    // img
    util.qrcode({
        id: 'qrcode',
        type: 'img',
        text: 'http://insistime.com/'
    });

    // svg
    util.qrcode({
        id: 'qrcode',
        type: 'svg',
        text: 'http://insistime.com/'
    });
};

test();