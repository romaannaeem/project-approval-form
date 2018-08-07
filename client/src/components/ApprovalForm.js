import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Contact</label>
        <div className="row">
          <Field
            className="col-lg-5 col-md-5 col-sm-12"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <Field
            className="col-lg-5 col-md-5 col-sm-12"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <br />
      <div>
        <label>Company/Client</label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="company"
            component="input"
            type="text"
          />
        </div>
      </div>
      <br />
      <div>
        <label>Email</label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="contactEmail"
            component="input"
            type="email"
          />
        </div>
      </div>
      <br />
      <div>
        <label>Web Site or Domain</label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="domain"
            component="input"
            type="text"
          />
        </div>
      </div>
      <br />
      <div>
        <label>Approved By</label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="approvedBy"
            component="input"
            type="text"
          />
        </div>
      </div>
      <br />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);
