'use strict';

import Component from '../component';

class Authorization extends Component {
	constructor({el, onSubmit, isRender = true}) {
		super();

		this.el       = el;
		this.onSubmit = onSubmit;
		this.isRender = isRender;

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
      <p class="text-muted text-center"><small>Don't have an account?</small> <a href="#registration"><small>Sign up</small></a></p>
		`

		// render component
		this.el && isRender && this.render(this._html);
	}
}

export default Authorization;