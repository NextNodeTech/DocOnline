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
    <form className='card card-custom' onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className='card-header py-3'>
        <div className='card-title align-items-start flex-column ml-3'>
          <h3 className='card-label font-weight-bolder text-dark'>Languages</h3>
          <span className='text-muted font-weight-bold font-size-sm mt-1'>
            Update your Languages
          </span>
        </div>

      </div>
      {/* end::Header */}
      {/* begin::Form */}

      <div className="form-group row fv-plugins-icon-container mt-7 p-12 align-items-center">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <label>Select language</label>
          <select className="form-control form-control-solid" name="billing_card_exp_month">
            <option>Select Language</option>
            <option value="id">Indonesian</option>
            <option value="msa">Bahasa Melayu - Malay</option>
            <option value="ca">Catal?? - Catalan</option>
            <option value="cs">??e??tina - Czech</option>
            <option value="da">Dansk - Danish</option>
            <option value="de">Deutsch - German</option>
            <option value="en" selected="selected">English</option>
            <option value="en-gb">English UK - British English</option>
            <option value="es">Espa??ol - Spanish</option>
            <option value="eu">Euskara - Basque (beta)</option>
            <option value="fil">Filipino</option>
            <option value="fr">Fran??ais - French</option>
            <option value="ga">Gaeilge - Irish (beta)</option>
            <option value="gl">Galego - Galician (beta)</option>
            <option value="hr">Hrvatski - Croatian</option>
            <option value="it">Italiano - Italian</option>
            <option value="hu">Magyar - Hungarian</option>
            <option value="nl">Nederlands - Dutch</option>
            <option value="no">Norsk - Norwegian</option>
            <option value="pl">Polski - Polish</option>
            <option value="pt">Portugu??s - Portuguese</option>
            <option value="ro">Rom??n?? - Romanian</option>
            <option value="sk">Sloven??ina - Slovak</option>
            <option value="fi">Suomi - Finnish</option>
            <option value="sv">Svenska - Swedish</option>
            <option value="vi">Ti???ng Vi???t - Vietnamese</option>
            <option value="tr">T??rk??e - Turkish</option>
            <option value="el">???????????????? - Greek</option>
            <option value="bg">?????????????????? ???????? - Bulgarian</option>
            <option value="ru">?????????????? - Russian</option>
            <option value="sr">???????????? - Serbian</option>
            <option value="uk">???????????????????? ???????? - Ukrainian</option>
            <option value="he">???????????????? - Hebrew</option>
            <option value="ur">???????? - Urdu (beta)</option>
            <option value="ar">?????????????? - Arabic</option>
            <option value="fa">?????????? - Persian</option>
            <option value="mr">??????????????? - Marathi</option>
            <option value="hi">?????????????????? - Hindi</option>
            <option value="bn">??????????????? - Bangla</option>
            <option value="gu">????????????????????? - Gujarati</option>
            <option value="ta">??????????????? - Tamil</option>
            <option value="kn">??????????????? - Kannada</option>
            <option value="th">????????????????????? - Thai</option>
            <option value="ko">????????? - Korean</option>
            <option value="ja">????????? - Japanese</option>
            <option value="zh-cn">???????????? - Simplified Chinese</option>
            <option value="zh-tw">???????????? - Traditional Chinese</option>
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
      <div className="ml-5" >
        <List className={classes.root} subheader={<li />}>
          <li className={classes.listSection}>
            <div style={{ display: 'flex', paddingLeft: '25px', paddingBottom: '10px' }}>
              <LabelIcon /><ul>English</ul>
              <div style={{ paddingLeft: '10px' }}>(Good)</div>
            </div>
            <div style={{ display: 'flex', paddingLeft: '25px', paddingBottom: '10px' }}>
              <LabelIcon /><ul>Chineese</ul>
              <div style={{ paddingLeft: '10px' }}>(Normal)</div>
            </div>
          </li>
        </List>
      </div>
      <div className='card-toolbar text-right col-12 p-4 mb-10 pr-12'>
        <button
          type='submit'
          className='btn btn-success mr-2 '
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
    </form>
  );
}
export default connect(null, auth.actions)(Languages);













