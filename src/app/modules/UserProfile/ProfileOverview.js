import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as auth from "../Auth";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

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
        <div className='form d-flex p-2'>
          {/* begin::Body */}
          <div className='card-body col-6'>
            <List className='form-group row'>
              <ListItem className="row justify-content-between">
                <div className="text-dark">Name</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-dark">Email</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-dark">Gender</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-dark">Date of Birth</div>
              </ListItem>

               <ListItem className="row justify-content-between">
                <div className="text-dark">Phone No</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-dark">Postal Address</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-dark">Languages</div>
              </ListItem>
            </List>
          </div>
          {/* end::Body */}
          {/* begin::Body */}
          <div className='card-body col-6'>
            <List className='form-group row'>
              <ListItem className="row justify-content-between">
                <div className="text-muted">Muhammad Amir Saleem</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-muted">ameirsaleem231@gmail.com</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-muted">Male</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-muted">24/09/1998</div>
              </ListItem>

               <ListItem className="row justify-content-between">
                <div className="text-muted">(333) 333-3333</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-muted">201 street D-block Gulshan Ravi Lahore</div>
              </ListItem>

              <ListItem className="row justify-content-between">
                <div className="text-muted">English & Urdu</div>
              </ListItem>
            </List>
          </div>
          {/* end::Body */}
        </div>
        {/* end::Form */}
      </div>
    </form>
  );
}

export default connect(null, auth.actions)(ProfileOverview);

