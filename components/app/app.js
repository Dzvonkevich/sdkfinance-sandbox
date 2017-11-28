'use strict';

import Registration from '../registration/registration';
import Authorization from '../authorization/authorization';
import CreateIssuer from '../create-issuer/create-issuer';

class App {
	constructor() {
		// init registration
		this.registration = new Registration({
			el: document.getElementById('registration'),

			/**
			 * Call the expression below when the form is clicked
			 * @param data - an object of fields submitted through the form
			 */ 
			onSubmit: function (data) {
				this.asyn.request('POST', 'https://sandbox.sdk.finance/api/v1/registration', data)
				.then(result => {
					console.dir(result);

					// render confirmation form
					this.renderConfirmation();
				})
				.catch(err => console.dir(err));
			}
		});

		// init authorization
		this.authorization = new Authorization({
			el: document.getElementById('authorization'),
			onSubmit: function (data) {
				this.asyn.request(
					'POST', 
					'https://sandbox.sdk.finance/api/v1/authorization',
					data
				)
				.then(result => console.dir(result))
				.catch(err => console.dir(err));
			}
		});

		// init create-issuer
		this.createIssuer = new CreateIssuer({
			el: document.getElementById('create-issuer'),
			onSubmit: function (data) {
				console.log('Submitted');
			}
		});
	}
}

const app = new App();