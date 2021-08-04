/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import LabelIcon from '@material-ui/icons/Label';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));





function Languages(props) {
  const classes = useStyles();
  // Fields
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {}, [user]);

  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedUser = Object.assign(user, {
      name: values.name,
      language: values.language,
      communication: {
        email: values.communicationEmail,
        sms: values.communicationSMS,
        phone: values.communicationPhone,
      },
    });
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
      // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    name: user.name,
    language: user.language,
  };
  const Schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    language: Yup.string(),
    communicationEmail: Yup.bool(),
    communicationSMS: Yup.bool(),
    communicationPhone: Yup.bool(),
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
    <form className='card card-custom' onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className='card-header py-3'>
        <div className='card-title align-items-start flex-column'>
          <h3 className='card-label font-weight-bolder text-dark'>Languages</h3>
          <span className='text-muted font-weight-bold font-size-sm mt-1'>
            Update your Languages
          </span>
        </div>
        <div className='card-toolbar'>
          <button
            type='submit'
            className='btn btn-success mr-2'
            disabled={
              formik.isSubmitting || (formik.touched && !formik.isValid)
            }
          >
            Save Changes
            {formik.isSubmitting}
          </button>
          <Link
            to='/user-profile/profile-overview'
            className='btn btn-secondary'
          >
            Cancel
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className='form'>
        <div className='card-body'>
          <div style={{ display: "flex" }}>
            {/* begin::Form Group */}
            <div className='form-group row'>
              <label className='col-xl-3 col-lg-3 col-form-label'>
                Language
              </label>
              <div className='col-lg-9 col-xl-6'>
                <select
                  className='form-control form-control-lg form-control-solid'
                  name='language'
                  {...formik.getFieldProps("language")}
                >
                  <option>Select Language...</option>
                  <option value='id'>Bahasa Indonesia - Indonesian</option>
                  <option value='msa'>Bahasa Melayu - Malay</option>
                  <option value='ca'>Català - Catalan</option>
                  <option value='cs'>Čeština - Czech</option>
                  <option value='da'>Dansk - Danish</option>
                  <option value='de'>Deutsch - German</option>
                  <option value='en'>English</option>
                  <option value='en-gb'>English UK - British English</option>
                  <option value='es'>Español - Spanish</option>
                  <option value='eu'>Euskara - Basque (beta)</option>
                  <option value='fil'>Filipino</option>
                  <option value='fr'>Français - French</option>
                  <option value='pt'>Português - Portuguese</option>
                  <option value='ro'>Română - Romanian</option>
                  <option value='ru'>Русский - Russian</option>
                  <option value='sr'>Српски - Serbian</option>
                  <option value='uk'>Українська мова - Ukrainian</option>
                </select>
              </div>
            </div>
            {/* begin::Form Group */}
            <div className='form-group row'>
              <label
                style={{ whiteSpace: "nowrap", marginRight: "30px" }}
                className='col-xl-3 col-lg-3 col-form-label'
              >
                Speak Level
              </label>
              <div className='col-lg-9 col-xl-6'>
                <select
                  style={{ width: "10em" }}
                  className='form-control form-control-lg form-control-solid'
                  name='speakLevel'
                  {...formik.getFieldProps("speakLevel")}
                >
                  <option value='Normal'>Normal</option>
                  <option value='Good'>Good</option>
                </select>
              </div>
            </div>
            <div style={{paddingLeft: "25px"}} className='mt-2'>
              <a
                href='#'
                className='btn btn-sm btn-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1'
              >
                Add
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end::Form */}
      <List className={classes.root} subheader={<li />}>
        <li className={classes.listSection}>
        <div style={{display: 'flex', paddingLeft: '15px', paddingBottom: '10px'}}>
          <LabelIcon /><ul>English</ul>
          <div style={{paddingLeft:'15px'}}>(Good)</div>
        </div>
        <div style={{display: 'flex', paddingLeft: '15px', paddingBottom: '10px'}}>
          <LabelIcon /><ul>Chineese</ul>
          <div style={{paddingLeft:'15px'}}>(Normal)</div>
        </div>
        </li>
    </List>
    </form>
  );
}
export default connect(null, auth.actions)(Languages);


