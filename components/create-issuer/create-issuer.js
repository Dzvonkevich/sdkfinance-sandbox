'use strict';

import Component from '../component';

class CreateIssuer extends Component {
	constructor({el, onSubmit, isRender = true}) {
		super();

		this.el       = el;
		this.onSubmit = onSubmit;
		this.onSubmit = isRender;

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
		this.el && this.isRender && this.render(this._html);
	}
}

export default CreateIssuer;