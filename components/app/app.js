'use strict';

import Request from '../../modules/request/request';
import Registration from '../registration/registration';

class App {
	constructor() {
		// init Promise
		this.asyn = new Request();

		// init registration
		this.registration = new Registration({
			el: document.getElementById('registration'),
			onSubmit: data => {
				this.asyn.request(
					'POST', 
					'https://emanat.sdk.finance/api/v1/registration',
					data
				)
				.then(result => console.dir(result))
				.catch(err => console.dir(err));
			},
		});
	}
}

const app = new App();