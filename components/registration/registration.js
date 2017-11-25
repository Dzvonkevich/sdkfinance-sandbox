'use strict';

import Component from '../component';

class Registration extends Component {
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

export default Registration;