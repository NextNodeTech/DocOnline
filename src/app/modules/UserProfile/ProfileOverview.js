import React, { useState } from "react";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as auth from "../Auth";

function ProfileOverview(props) {
  //   const classes = useStyles();

  // Fields
  const [loading, setloading] = useState(false);
  const user = useSelector((state) => state.auth.user, shallowEqual);

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
            Profile Overview
          </h3>
          <span className='text-muted font-weight-bold font-size-sm mt-1'>
            Updated Profile Information
          </span>
        </div>
      </div>

      {/* end::Header */}
      {/* begin::Form */}
      <div>
        <table className='table table-borderless ml-6 mt-3'>
          <tbody>
            <tr>
              <td className='font-weight-bold'>Name</td>
              <td>Muhammad Amir Saleem</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Email Address</td>
              <td>ameirsaleem231@gmail.com</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Phone Number</td>
              <td>(333) 333-3333</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Address</td>
              <td>152 Reiman Street, Paulo Alto Road, Paulo Alto, USA</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Languages</td>
              <td>English & Chineese</td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Allergy</td>
              <td> Acute </td>
            </tr>
            <tr>
              <td className='font-weight-bold'>Medication</td>
              <td> Panadol ( Aug 15, 2021 - Aug 22, 2021 )</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(ProfileOverview);
