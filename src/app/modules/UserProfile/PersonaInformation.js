import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as auth from "../Auth";

function PersonaInformation(props) {

  // Fields
  const [loading, setloading] = useState(false);
  const user = useSelector((state) => state.auth.user, shallowEqual);

  loading(true);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedUser = Object.assign(user, values);
    // user for update preparation
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    pic: user.pic,
    firstname: user.firstname,
    lastname: user.lastname,
    companyName: user.companyName,
    phone: user.phone,
    email: user.email,
    website: user.website,
    address: user.addressLine,
  };
  const Schema = Yup.object().shape({
    pic: Yup.string(),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    companyName: Yup.string(),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    website: Yup.string(),
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <form
      className='card card-custom card-stretch'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Header */}
      <div position='sticky' className='card-header py-3  card-sticky'>
        <div className='card-title align-items-start flex-column'>
          <h3 className='card-label font-weight-bolder text-dark'>
            Personal Information
          </h3>
          <span className='text-muted font-weight-bold font-size-sm mt-1'>
            Update your personal informaiton
          </span>
        </div>
      </div>

      {/* end::Header */}
      {/* begin::Form */}
      <div>
        <div className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='form-group row'>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>First Name</label>
                  <input
                    type='text'
                    placeholder='First name'
                    className={`form-control form-control-lg form-control-solid ${getInputClasses(
                      "firstname"
                    )}`}
                    name='firstname'
                    {...formik.getFieldProps("firstname")}
                  />
                </div>
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className='invalid-feedback'>
                    {formik.errors.firstname}
                  </div>
                ) : null}
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>Middle Name</label>
                  <input
                    type='text'
                    placeholder='Middle name'
                    className={`form-control form-control-lg form-control-solid ${getInputClasses(
                      "middlename"
                    )}`}
                    name='middlename'
                    {...formik.getFieldProps("middlename")}
                  />
                  {formik.touched.middlename && formik.errors.middlename ? (
                    <div className='invalid-feedback'>
                      {formik.errors.middlename}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>Last Name</label>
                  <input
                    type='text'
                    placeholder='Last name'
                    className={`form-control form-control-lg form-control-solid ${getInputClasses(
                      "lastname"
                    )}`}
                    name='lastname'
                    {...formik.getFieldProps("lastname")}
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className='invalid-feedback'>
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>Gender</label>
                  <select
                    className='form-control form-control-lg form-control-solid'
                    name='gender'
                    {...formik.getFieldProps("gender")}
                  >
                    <option>Select Gender</option>
                    <option value='Male'>Male </option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 pt-0.5'>
                <div>
                  <label className='col-form-label'> Date of Birth </label>
                  <div className='input-group date'>
                  <input type="text" className="form-control form-control-lg form-control-solid" value="02-16-2012" />
                  <div className="input-group-addon">
                        <span className="glyphicon glyphicon-th"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>Contact Phone</label>
                  <div className='input-group input-group-lg input-group-solid'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fa fa-phone'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      placeholder='+1(123)112-11-11'
                      className={`form-control form-control-lg form-control-solid ${getInputClasses(
                        "phone"
                      )}`}
                      name='phone'
                      {...formik.getFieldProps("phone")}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className='invalid-feedback display-block'>
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-xl-4 col-lg-4 col-md-4'>
                <div>
                  <label className='col-form-label'>Email Address</label>
                  <div className='input-group input-group-lg input-group-solid'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fa fa-at'></i>
                      </span>
                    </div>
                    <input
                      type='email'
                      placeholder='Email'
                      className={`form-control form-control-lg form-control-solid ${getInputClasses(
                        "email"
                      )}`}
                      name='email'
                      {...formik.getFieldProps("email")}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className='invalid-feedback display-block'>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12'>
                <div>
                  <label className='col-form-label'>Address</label>
                  <div className='input-group input-group-lg input-group-solid'>
                    <textarea
                      className='form-control'
                      name='address'
                      placeholder='152, Seattle'
                      rows='3'
                    ></textarea>
                  </div>
                  {formik.touched.address && formik.errors.address ? (
                    <div className='invalid-feedback display-block'>
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="card-toolbar text-right">
              <button
                type="submit"
                className="btn btn-success mr-2"
                disabled={
                  formik.isSubmitting || (formik.touched && !formik.isValid)
                }
              >
                Save Changes
                {formik.isSubmitting}
              </button>
              <Link
                to="/user-profile/profile-overview"
                className="btn btn-secondary"
              >
                Cancel
              </Link>
            </div>
          </div>
          {/* end::Body */}
        </div>
        {/* end::Form */}
      </div>
    </form>
  );
}

export default connect(null, auth.actions)(PersonaInformation);
