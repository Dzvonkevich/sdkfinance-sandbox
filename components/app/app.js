'use strict';

import Request from '../../modules/request/request';
import Registration from '../registration/registration';

class App {
	constructor() {
		this.asyn = new Request();

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