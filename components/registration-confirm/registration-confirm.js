import Component from '../component';

class RegistrationConfirm extends Component {
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
			otp: `
        <div class="form-group">
          <input name="otp" type="text" class="form-control" required="">
        </div>
			`,
		};

		// will be rendered
		this._html = `
      <h2>Registration Confirmation</h2>
      <div>
				${this._fields.login}
				${this._fields.otp}
			</div>
      <button type="submit" class="btn btn-primary block full-width m-b">Submit</button>
      <p class="text-muted text-center"><small>Already have an account?</small> <a href="#"><small>Log in</small></a></p>
		`;

		// render component
		this.el && this.isRender && this.render(this._html);
	}
}

export default RegistrationConfirm;