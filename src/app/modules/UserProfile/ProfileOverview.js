import React, { useState } from "react";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as auth from "../Auth";

function ProfileOverview(props) {
  //   const classes = useStyles();

  // Fields
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user, shallowEqual);

  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    loading(false);
    setLoading(true);
    // const updatedUser = Object.assign(user, values);
    // user for update preparation
    setTimeout(() => {
      setLoading(false);
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
    <>
      <form
        className='card card-custom card-stretch'
        onSubmit={ formik.handleSubmit }
      >
        {/* begin::Header */ }
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
        {/* end::Header */ }
        {/* begin::Form */ }
        <div>
          {/* ///////////////header div///// */ }
          <div className='row col-lg-12 py-3 '>
            <div className='col-4  p-4'>
              <div className="font-weight-bold pl-5 text-nowrap">Name</div>
              <br />
              <div className="font-weight-bold pl-5 text-nowrap">Email</div>
              <br />
              <div className="font-weight-bold pl-5 text-nowrap">Gender</div>
              <br />
              <div className="font-weight-bold pl-5 text-nowrap">Phone</div>
              <br />
              <div className="font-weight-bold pl-5 text-nowrap">Address</div>
            </div>
            {/* //////////// info content//////////// */ }
            <div className='col-8  p-4'>
              <div>Nauman Khan</div>
              <br />
              <div className='text-nowrap'>NaumanKhan642@gmail.com</div>
              <br />
              <div className='text-nowrap'>male</div>
              <br />
              <div className='text-nowrap'>(333) 333-3333</div>
              <br />
              <div className=''>152 Reiman Street, Paulo Alto Road, Paulo Alto, USA. </div>
            </div>
          </div>
          {/* begin::Language Header */ }
          <div position='sticky' className='card-header py-3  card-sticky'>
            <div className='align-items-start flex-column pb-2'>
              <h3 className='card-label font-weight-bolder text-dark'>
                Languages
              </h3>
              <span className='text-muted font-weight-bold font-size-sm mt-1'>
                Spoken Languages
              </span>
            </div>
          </div>
          {/* end::Language Header */ }
          {/* //////languages ////////////// */ }
          <div className='row pl-7  col-12 pt-5 pb-10 d-flex justify-content-center'>
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
          {/* begin::Allergy Header */ }
          <div position='sticky' className='card-header py-3  card-sticky'>
            <div className='align-items-start flex-column pb-2'>
              <h3 className='card-label font-weight-bolder text-dark'>
                Allergy
              </h3>
              <span className='text-muted font-weight-bold font-size-sm mt-1'>
                Condition of Allegries
              </span>
            </div>
          </div>
          {/* end::Allergy Header */ }
          {/* //////////////Allergy//////////////////////// */ }
          <div className='row pl-7  col-12 pt-5 pb-10 d-flex justify-content-center'>
            <table className='table table-bordered col-lg-6 text-center m-3 '>
              <thead className='thead-light'>
                <tr className=' mb-2'>
                  <th>Medicine</th>
                  <th>Allergy level</th>
                  <th>Allergy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>calpol</td>
                  <td>Acute</td>
                  <td>Allergy</td>
                </tr>
                <tr>
                  <td>Panadol</td>
                  <td>Chronic</td>
                  <td>Allergy</td>
                </tr> <tr>
                  <td>Solocip</td>
                  <td>Acute</td>
                  <td>Allergy</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* begin::Medication Header */ }
          <div position='sticky' className='card-header py-3  card-sticky'>
            <div className='align-items-start flex-column pb-2'>
              <h3 className='card-label font-weight-bolder text-dark'>
                Medication
              </h3>
              <span className='text-muted font-weight-bold font-size-sm mt-1'>
                Recommended Medications
              </span>
            </div>
          </div>
          {/* end::Medication Header */ }
          {/* /////////////medication//////////// */ }
          <div className='row pl-7  col-12 pt-5 pb-10 d-flex justify-content-center'>
            <table className='table table-bordered col-lg-6 text-center m-3'>
              <thead className='thead-light'>
                <tr className=' mb-2'>
                  <th>Medicine</th>
                  <th>Duration</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>calpol</td>
                  <td>01/03/2018 -30/12/2020</td>
                  <td>Reason</td>
                </tr>
                <tr>
                  <td>Panadol</td>
                  <td>01/03/2018 -30/12/2020</td>
                  <td>Reason</td>
                </tr> <tr>
                  <td>Solocip</td>
                  <td>01/03/2018 -30/12/2020</td>
                  <td>Reason</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        {/* end::Form */ }
        {/* Footer Start */ }
        <div className=' card-footer'>
          <div className=" card-toolbar text-right ">
            <button
              type="submit"
              className="btn btn-success mr-2"
              disabled={
                formik.isSubmitting || (formik.touched && !formik.isValid)
              }
            >
              Save Changes
              { formik.isSubmitting }
            </button>
            <button
              to="/user-profile/profile-overview"
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
        {/* Footer End */ }
      </form>



    </>
  );
}

export default connect(null, auth.actions)(ProfileOverview);
