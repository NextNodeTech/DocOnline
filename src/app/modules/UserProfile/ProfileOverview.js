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
        <div className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <List className='form-group row'>
              <ListItem>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Name</h6></div>
                <ListItemText>
                  Muhammad Aamir Saleem
                </ListItemText>
              </ListItem>
              <ListItem>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Email Address</h6></div>
                <ListItemText className='d-flex flex-nowrap'>
                  aamirsaleem@mail.com
                </ListItemText>
              </ListItem>
              <ListItem>
                <div className='col-xl-4 col-lg-4 col-md-6'><h6>Gender</h6></div>
                <ListItemText className='d-flex flex-nowrap'>
                  Male
                </ListItemText>
              </ListItem>
              <ListItem>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Date of Birth</h6></div>
                <ListItemText className='d-flex flex-nowrap'>
                  22 August, 1986
                </ListItemText>
              </ListItem>
              <ListItem>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Phone Number</h6></div>
                <ListItemText className='d-flex flex-nowrap'>
                  (333) 333-3333
                </ListItemText>
              </ListItem>
              <ListItem className='d-flex flex-nowrap'>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Postal Address</h6></div>
                <ListItemText>
                30 Church Drive Bridgewater, NJ 08807, Paulo Alto, USA.
                </ListItemText>
              </ListItem>
              <ListItem className='d-flex flex-nowrap'>
                <div className='col-xl-4 col-lg-4 col-md-4'><h6>Languages</h6></div>
                <ListItemText>
                English (Good), Chineese (Normal)
                </ListItemText>
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
