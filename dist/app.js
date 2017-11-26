/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_request_request__ = __webpack_require__(3);




class Component {
	constructor() {
		// init Promise
		this.asyn = new __WEBPACK_IMPORTED_MODULE_0__modules_request_request__["a" /* default */]();
	}

	render(html) {
		this._initEvents();
		this.el.innerHTML = html;	
	}

	_initEvents() {
		this.el.addEventListener('submit', this._onSubmit.bind(this));
		this.el.addEventListener('change', this._onChange.bind(this));
		this.el.addEventListener('click', this._onClick.bind(this));
	}

	_onSubmit(event) {
		event.preventDefault();

		const data = {};

		this.el.querySelectorAll('input, select').forEach(element => {
			data[element.name] = this.getField(element.name).value;
		});

		this.onSubmit && this.onSubmit(data);
	}

	_onChange(event) {
		// nothing to default
	}

	_onClick(event) {
		// nothing to default
	}

	getField(name) {
		return this.el.querySelector(`[name="${name}"]`);
	}

	trigger(eventName, eventData) {
		const event = new CustomEvent(eventName, {
			detail: eventData,
		});

		this.el.dispatchEvent(event);
	}

	on(eventName, callback) {
		this.el.addEventListener(eventName, callback);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Component);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registration_registration__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_authorization__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_issuer_create_issuer__ = __webpack_require__(5);






class App {
	constructor() {
		// init registration
		this.registration = new __WEBPACK_IMPORTED_MODULE_0__registration_registration__["a" /* default */]({
			el: document.getElementById('registration'),
			onSubmit: function (data) {
				this.asyn.request(
					'POST', 
					'https://emanat.sdk.finance/api/v1/registration',
					data
				)
				.then(result => console.dir(result))
				.catch(err => console.dir(err));
			},
		});

		// init authorization
		this.authorization = new __WEBPACK_IMPORTED_MODULE_1__authorization_authorization__["a" /* default */]({
			el: document.getElementById('authorization'),
			onSubmit: function (data) {
				this.asyn.request(
					'POST', 
					'https://sandbox.sdk.finance/api/v1/authorization',
					data
				)
				.then(result => console.dir(result))
				.catch(err => console.dir(err));
			},
		});

		// init create-issuer
		this.createIssuer = new __WEBPACK_IMPORTED_MODULE_2__create_issuer_create_issuer__["a" /* default */]({
			el: document.getElementById('create-issuer'),
			onSubmit: function (data) {
				console.log('Submitted');
			},
		});
	}
}

const app = new App();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(0);




class Registration extends __WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */] {
	constructor({el, onSubmit}) {
		super();

		this.el       = el;
		this.onSubmit = onSubmit;

		// fields of the form
		this._fields  = {
			login: `
	            <div class="form-group">
	                <input name="login" type="text" class="form-control" placeholder="Email or Phone" required="">
	            </div>
	        `,
			role: `
	            <div class="form-group">
	                <select class="form-control m-b" name="role">
	                    <option value="individual">Individual</option>
	                    <option value="merchant">Merchant</option>
	                </select>
	            </div>
			`,
			legalType: `
	            <div class="form-group registration__legal-type">
	                <select class="form-control m-b" name="legalType">
	                    <option value="individual">Individual person</option>
	                    <option value="merchant">Corporation entity</option>
	                </select>
	            </div>
			`,
		};

		// will be rendered
		this._html = `
	        <h2>Registration</h2>
	        <div class="registration__fields">
				${this._fields.login}
				${this._fields.role}
			</div>
            <button type="submit" class="btn btn-primary block full-width m-b">Submit</button>
            <p class="text-muted text-center"><small>Already have an account?</small> <a href="#"><small>Log in</small></a></p>
		`

		// render component
		this.el && this.render(this._html);
	}

	_onChange(event) {
		// trigger legaltype field
		if (event.target.name === 'role') {
			// whether changed to merchant
			if (event.target.value === 'merchant') 
				// and there ain't legal type field yet
				!this.el.querySelector('.registration__legal-type') 
					// insert the field
					&& this.el.querySelector('.registration__fields')
						.insertAdjacentHTML('beforeEnd', this._fields.legalType);
			else
				this.el.querySelector('.registration__legal-type').remove();
		}
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Registration);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Request {
	request(method, url, data) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.addEventListener('load', () => {
				if (xhr.status === 200) {
					const result = JSON.parse(xhr.responseText);

					resolve(result);
				} else {
					reject(xhr);
				}
			});
			
			xhr.open(method, url, true);

			xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

			const dataJSON = data ? JSON.stringify(data) : null;
			xhr.send(dataJSON);
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Request);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(0);




class Authorization extends __WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */] {
	constructor({el, onSubmit}) {
		super();

		this.el       = el;
		this.onSubmit = onSubmit;

		// fields of the form
		this._fields  = {
			login: `
	            <div class="form-group">
	                <input name="login" type="text" class="form-control" placeholder="Email or Phone" required="">
	            </div>
	        `,
			password: `
	            <div class="form-group">
	                <input name="password" type="password" class="form-control" placeholder="Password" required="">
	            </div>
			`,
		};

		// will be rendered
		this._html = `
	        <h2>Authorization</h2>
	        <div>
				${this._fields.login}
				${this._fields.password}
			</div>
            <button type="submit" class="btn btn-primary block full-width m-b">Submit</button>
            <p class="text-muted text-center"><small>Don't have an account?</small> <a href="#"><small>Sign up</small></a></p>
		`

		// render component
		this.el && this.render(this._html);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Authorization);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(0);




class CreateIssuer extends __WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */] {
	constructor({el, onSubmit}) {
		super();

		this.el       = el;
		this.onSubmit = onSubmit;

		// fields of the form
		this._fields  = {
			name: `
	            <div class="form-group">
	                <input name="name" type="text" class="form-control" placeholder="Issuer name" required="">
	            </div>
	        `,
			currency: `
	            <div class="form-group">
	                <select class="form-control m-b" name="currency">
	                    <option value="usd">USD</option>
	                    <option value="eur">EUR</option>
	                </select>
	            </div>
			`,
		};

		// will be rendered
		this._html = `
	        <h2>Create Issuer</h2>
	        <div>
				${this._fields.name}
				${this._fields.currency}
			</div>
            <button type="submit" class="btn btn-primary block full-width m-b">Submit</button>
		`

		// render component
		this.el && this.render(this._html);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (CreateIssuer);

/***/ })
/******/ ]);