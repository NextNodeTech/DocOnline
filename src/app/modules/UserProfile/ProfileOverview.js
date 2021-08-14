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
          {/* //////languages ////////////// */ }
          <div className='row pl-7  col-12'>
            <div className="font-weight-bold pl-5 text-nowrap p-2 col-4">Languages</div>
            <div className='col-4 '>
              <div className='text-hover-primary cursor-pointer p-1'>English</div>
              <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar" style={ { width: "50%" } } aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Good</div>
              </div>

              <div className='text-hover-primary cursor-pointer p-1'>Urdu</div>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style={ { width: "80%" } } aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Best</div>
              </div>
            </div>

            {/* <table className='table table-bordered col-lg-6  m-3 text-center '>
              <thead className='thead-light'>
                <tr className=' mb-2'>
                  <th>Language</th>
                  <th> level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>Good</td>

                </tr>
                <tr>
                  <td>Urdu</td>
                  <td>Best</td>

                </tr>
              </tbody>
            </table> */}
          </div>
          {/* //////////////Allergy//////////////////////// */ }
          <div className='row pl-7  col-12'>
            <div className="font-weight-bold pl-5 text-nowrap p-2 col-4">Allergy</div>
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

          {/* /////////////medication//////////// */ }
          <div className='row pl-7  col-12'>
            <div className="font-weight-bold pl-5 text-nowrap p-2 col-4">Medication</div>
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
      </form>



    </>
  );
}

export default connect(null, auth.actions)(ProfileOverview);
