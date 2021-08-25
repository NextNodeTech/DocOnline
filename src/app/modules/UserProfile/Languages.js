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
  useEffect(() => { }, [user]);

  // Methods
  const saveUser = (values, setSubmitting) => {
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
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: ({ resetForm }) => {
      resetForm();
    },
  });

  return (
    <form className='card card-custom' onSubmit={ formik.handleSubmit }>
      { loading && <ModalProgressBar /> }

      {/* begin::Header */ }
      <div className='card-header py-3'>
        <div className='card-title align-items-start flex-column ml-3'>
          <h3 className='card-label font-weight-bolder text-dark'>Languages</h3>
          <span className='text-muted font-weight-bold font-size-sm mt-1'>
            Update your Languages
          </span>
        </div>

      </div>
      {/* end::Header */ }
      {/* begin::Form */ }

      <div className="form-group row fv-plugins-icon-container mt-7 p-12 align-items-center">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <label>Select language</label>
          <select className="form-control form-control-solid" name="billing_card_exp_month">
            <option>Select Language</option>
            <option value="id">Indonesian</option>
            <option value="msa">Bahasa Melayu - Malay</option>
            <option value="ca">Català - Catalan</option>
            <option value="cs">Čeština - Czech</option>
            <option value="da">Dansk - Danish</option>
            <option value="de">Deutsch - German</option>
            <option value="en" selected="selected">English</option>
            <option value="en-gb">English UK - British English</option>
            <option value="es">Español - Spanish</option>
            <option value="eu">Euskara - Basque (beta)</option>
            <option value="fil">Filipino</option>
            <option value="fr">Français - French</option>
            <option value="ga">Gaeilge - Irish (beta)</option>
            <option value="gl">Galego - Galician (beta)</option>
            <option value="hr">Hrvatski - Croatian</option>
            <option value="it">Italiano - Italian</option>
            <option value="hu">Magyar - Hungarian</option>
            <option value="nl">Nederlands - Dutch</option>
            <option value="no">Norsk - Norwegian</option>
            <option value="pl">Polski - Polish</option>
            <option value="pt">Português - Portuguese</option>
            <option value="ro">Română - Romanian</option>
            <option value="sk">Slovenčina - Slovak</option>
            <option value="fi">Suomi - Finnish</option>
            <option value="sv">Svenska - Swedish</option>
            <option value="vi">Tiếng Việt - Vietnamese</option>
            <option value="tr">Türkçe - Turkish</option>
            <option value="el">Ελληνικά - Greek</option>
            <option value="bg">Български език - Bulgarian</option>
            <option value="ru">Русский - Russian</option>
            <option value="sr">Српски - Serbian</option>
            <option value="uk">Українська мова - Ukrainian</option>
            <option value="he">עִבְרִית - Hebrew</option>
            <option value="ur">اردو - Urdu (beta)</option>
            <option value="ar">العربية - Arabic</option>
            <option value="fa">فارسی - Persian</option>
            <option value="mr">मराठी - Marathi</option>
            <option value="hi">हिन्दी - Hindi</option>
            <option value="bn">বাংলা - Bangla</option>
            <option value="gu">ગુજરાતી - Gujarati</option>
            <option value="ta">தமிழ் - Tamil</option>
            <option value="kn">ಕನ್ನಡ - Kannada</option>
            <option value="th">ภาษาไทย - Thai</option>
            <option value="ko">한국어 - Korean</option>
            <option value="ja">日本語 - Japanese</option>
            <option value="zh-cn">简体中文 - Simplified Chinese</option>
            <option value="zh-tw">繁體中文 - Traditional Chinese</option>
          </select>
          <div className="fv-plugins-message-container"></div></div>
        <div className="col-xl-4 col-lg-4 col-md-4">
          <label>Select level</label>
          <select className="form-control form-control-solid" name="billing_card_exp_year">
            <option>Select Level</option>
            <option value="normal">Normal</option>
            <option value="Good">Good</option>

          </select>
          <div className="fv-plugins-message-container"></div></div>
      </div>
      <div className='row pl-14 col-12 pb-10 '>
            <div className='col-4'>
              <div className='text-hover-primary cursor-pointer p-1'>Urdu</div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={ { width: "80%" } } aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Best</div>
              </div>
              <div className='text-hover-primary cursor-pointer p-1'>English</div>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={ { width: "50%" } } aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Good</div>
              </div>
              <div className='text-hover-primary cursor-pointer p-1'>Chineese</div>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={ { width: "30%" } } aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">Low</div>
              </div>
            </div>

          </div>
      <div className='card-footer text-right col-12 p-4 mb-10 pr-12'>
        <button
          type='submit'
          className='btn btn-success mr-2 '
          disabled={
            formik.isSubmitting || (formik.touched && !formik.isValid)
          }
        >
          Save Changes
          { formik.isSubmitting }
        </button>
        <Link
          to='/user-profile/profile-overview'
          className='btn btn-secondary'
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
export default connect(null, auth.actions)(Languages);













