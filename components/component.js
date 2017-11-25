'use strict';

import Request from '../modules/request/request';

class Component {
	constructor() {
		// init Promise
		this.asyn = new Request();
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

export default Component;