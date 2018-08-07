import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');

const renderField = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div className="row">
    <input
      className={className}
      {...input}
      placeholder={placeholder}
      type={type}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Contact<span className="requiredStar">*</span>
        </label>
        <Field
          className="col-lg-6 col-md-6 col-sm-12"
          name="firstName"
          component={renderField}
          type="text"
          placeholder="First Name"
          validate={required}
        />
        <div className="small-br" />
        <Field
          className="col-lg-6 col-md-6 col-sm-12"
          name="lastName"
          component={renderField}
          type="text"
          placeholder="Last Name"
          validate={required}
        />
      </div>
      <br />
      <div>
        <label>
          Company/Client<span className="requiredStar">*</span>
        </label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="company"
            component={renderField}
            type="text"
            validate={required}
          />
        </div>
      </div>
      <br />
      <div>
        <label>
          Email<span className="requiredStar">*</span>
        </label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="contactEmail"
            component={renderField}
            type="email"
            validate={required}
          />
        </div>
      </div>
      <br />
      <div>
        <label>
          Web Site or Domain<span className="requiredStar">*</span>
        </label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="domain"
            component={renderField}
            type="text"
            validate={required}
          />
        </div>
      </div>
      <br />
      <div>
        <label>
          Approved By<span className="requiredStar">*</span>
        </label>
        <div>
          <Field
            className="col-lg-6 col-md-6 col-sm-12"
            name="approvedBy"
            component={renderField}
            type="text"
            validate={required}
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
  form: 'simple'
})(SimpleForm);
