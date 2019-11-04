import {qrcode}  from '../index'

let test = () => {
    // need <div id="qrcode" style="width:100px;height:100px;"></div>

    // canvas
    qrcode({
        id: 'qrcode',
        type: 'canvas',
        text: 'http://insistime.com/'
    });

    // img
    qrcode({
        id: 'qrcode',
        type: 'img',
        text: 'http://insistime.com/'
    });

    // svg
    qrcode({
        id: 'qrcode',
        type: 'svg',
        text: 'http://insistime.com/'
    });
};

test();