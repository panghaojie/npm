import QRcode from 'qrcode'
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
const qrcodeCanvas = obj => {
    // lets
    let id = obj.id
    let text = obj.text
    let options = obj.options || {}
    if (!id || !text) return

    // div
    let $div = document.getElementById(id)
    if (!$div) return

    // canvas
    let cid = id + '-canvas'
    let canvas = '<canvas id="' + cid + '"></canvas>'
    $div.innerHTML = canvas

    // render
    options.width = options.width || $div.offsetWidth
    QRcode.toCanvas(document.getElementById(cid), text, options, function (error) {
        if (error) {
            console.error(error)
            return
        }
    })
}

const qrcodeImg = obj => {
    // lets
    let id = obj.id
    let text = obj.text
    let options = obj.options || {}
    if (!id || !text) return

    // div
    let $div = document.getElementById(id)
    if (!$div) return

    // render
    options.width = options.width || $div.offsetWidth
    QRcode.toDataURL(text, options, function (error, url) {
        if (error) {
            console.error(error)
            return
        }

        let img = new Image()
        img.src = url
        img.width = options.width
        img.height = options.width

        $div.appendChild(img)
    })
}

const qrcodeSvg = obj => {
    // lets
    let id = obj.id
    let text = obj.text
    let options = obj.options || {}
    if (!id || !text) return

    // div
    let $div = document.getElementById(id)
    if (!$div) return

    // render
    options.width = options.width || $div.offsetWidth
    QRcode.toString(text, options, function (error, svg) {
        if (error) {
            console.error(error)
            return
        }

        $div.innerHTML = svg
    })
}

export const qrcode = obj => {
    if (!obj.type) return

    if (obj.type == 'canvas') qrcodeCanvas(obj)
    if (obj.type == 'img') qrcodeImg(obj)
    if (obj.type == 'svg') qrcodeSvg(obj)
}