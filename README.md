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
## util.qrcode
```javascript
import util  from 'phj-util'

let test = () => {
	// need <div id="qrcode" style="width:100px;height:100px;"></div>
	
	// canvas
	util.qrcode({
		id	: 'qrcode',
		type: 'canvas',
		text: 'https://github.com/panghaojie/npm'
	});

	// img
	util.qrcode({
		id	: 'qrcode',
		type: 'img',
		text: 'https://github.com/panghaojie/npm'
	});
	
	// svg
	util.qrcode({
		id	: 'qrcode',
		type: 'svg',
		text: 'https://github.com/panghaojie/npm'
	});
};

test();
```
# version
## 0.0.1.20191101
