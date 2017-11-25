'use strict';

class Registration {
	constructor({el, onSubmit}) {
		this.el       = el || document.getElementById('registration');
		this.onSubmit = onSubmit;
		this._fields  = {
			name: `
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

		this._initEvents();
		this.render();
	}

	render() {
		this.el.innerHTML = `
	        <h2>Registration</h2>

	        <div class="registration__fields">
				${this._fields.name}
				${this._fields.role}
			</div>

            <button type="submit" class="btn btn-primary block full-width m-b">Submit</button>
            <p class="text-muted text-center"><small>Already have an account?</small> <a href="#"><small>Log in</small></a></p>
		`;	
	}

	_initEvents() {
		this.el.addEventListener('submit', this._onSubmit.bind(this));
		this.el.addEventListener('change', this._onChange.bind(this));
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

export default Registration;