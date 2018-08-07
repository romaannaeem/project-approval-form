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
      ((error && (
        <span className="error">
          <b>{error}</b>
        </span>
      )) ||
        (warning && (
          <span className="error">
            <b>{warning}</b>
          </span>
        )))}
  </div>
);

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <b>Contact</b>
          <span className="requiredStar">*</span>
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
          <b>Company/Client</b>
          <span className="requiredStar">*</span>
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
          <b>Email</b>
          <span className="requiredStar">*</span>
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
          <b>Web Site or Domain</b>
          <span className="requiredStar">*</span>
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
          <b>Approved By</b>
          <span className="requiredStar">*</span>
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
        <button
          className="btn-flat"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple'
})(SimpleForm);
