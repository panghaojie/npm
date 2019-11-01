'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.qrcode = undefined;

var _qrcode = require('qrcode');

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * qrcode
 * 	obj.type
 * 		canvas，img，svg
 * 	obj.id
 * 		父容器，<div id="qrcode"></div>
 * 	obj.text
 * 		二维码内容
 * 	obj.options
 * 		二维码选项，https://www.npmjs.com/package/qrcode#options
 */
var qrcodeCanvas = function qrcodeCanvas(obj) {
    // lets
    var id = obj.id;
    var text = obj.text;
    var options = obj.options || {};
    if (!id || !text) return;

    // div
    var $div = document.getElementById(id);
    if (!$div) return;

    // canvas
    var cid = id + '-canvas';
    var canvas = '<canvas id="' + cid + '"></canvas>';
    $div.innerHTML = canvas;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode.toCanvas(document.getElementById(cid), text, options, function (error) {
        if (error) {
            console.error(error);
            return;
        }
    });
};

var qrcodeImg = function qrcodeImg(obj) {
    // lets
    var id = obj.id;
    var text = obj.text;
    var options = obj.options || {};
    if (!id || !text) return;

    // div
    var $div = document.getElementById(id);
    if (!$div) return;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode.toDataURL(text, options, function (error, url) {
        if (error) {
            console.error(error);
            return;
        }

        var img = new Image();
        img.src = url;
        img.width = options.width;
        img.height = options.width;

        $div.appendChild(img);
    });
};

var qrcodeSvg = function qrcodeSvg(obj) {
    // lets
    var id = obj.id;
    var text = obj.text;
    var options = obj.options || {};
    if (!id || !text) return;

    // div
    var $div = document.getElementById(id);
    if (!$div) return;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode.toString(text, options, function (error, svg) {
        if (error) {
            console.error(error);
            return;
        }

        $div.innerHTML = svg;
    });
};

var qrcode = exports.qrcode = function qrcode(obj) {
    if (!obj.type) return;

    if (obj.type == 'canvas') qrcodeCanvas(obj);
    if (obj.type == 'img') qrcodeImg(obj);
    if (obj.type == 'svg') qrcodeSvg(obj);
};
exports.default = {
    qrcode: qrcode
};