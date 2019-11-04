# urls
## github
[https://github.com/panghaojie/npm](https://github.com/panghaojie/npm)

## npm
[https://www.npmjs.com/package/phj-util](https://www.npmjs.com/package/phj-util)

# started
## install
```
npm install phj-util
```

# api
## qrcode
```javascript
import {qrcode}  from 'phj-util'

// need DOM
// <div id="qrcode" style="width:100px;height:100px;"></div>

/**
 * @description: generate qrcode
 * @param id(string): 'qrcode' ,id of dom
 * @param type(string): 'canvas' || 'img' || 'svg'
 * @param text(string): 'https://github.com/panghaojie/npm'
 */
qrcode({
	id	: 'qrcode',
	type: 'canvas',
	text: 'https://github.com/panghaojie/npm'
});
qrcode({
	id	: 'qrcode',
	type: 'img',
	text: 'https://github.com/panghaojie/npm'
});
qrcode({
	id	: 'qrcode',
	type: 'svg',
	text: 'https://github.com/panghaojie/npm'
});
```
# version
## 0.0.5.20191104
modify phj-util

## 0.0.4.20191104
modify index

## 0.0.3.20191104
modify the mode of import

## 0.0.2.20191104
add keywords

## 0.0.1.20191101
init
