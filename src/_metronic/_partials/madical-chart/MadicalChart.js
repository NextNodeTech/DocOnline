import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({

    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(0),
        // width: '30%',
    },
}));




// import * as auth from "../Auth";
export default function MedicalChart() {
    const classes = useStyles();
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
        <>
            <div class="card card-custom">
                <div class="card-header">
                    <div class="card-title">
                        <h3 class="card-label">Medical Chart</h3>
                    </div>
                    <div class="card-toolbar">
                        <ul class="nav nav-light-success nav-bold nav-pills text-nowrap">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#kt_tab_pane_4_1">
                                    <span class="nav-icon"><i class="flaticon2-chat-1"></i></span>
                                    <span class="nav-text">Medications</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_4_2">
                                    <span class="nav-icon"><i class="flaticon2-drop"></i></span>
                                    <span class="nav-text">Reports</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " data-toggle="tab" href="#kt_tab_pane_4_2">
                                    <span class="nav-icon"><i class="flaticon2-gear"></i></span>
                                    <span class="nav-text text-nowrap">Medications Allergies</span>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tab-content">

                        {/* medicaltion start */ }

                        <div class="tab-pane fade show active" id="kt_tab_pane_4_1" role="tabpanel" aria-labelledby="kt_tab_pane_4_1">

                            <div className='card-body'>
                                <div className='form-group row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>First Name</label>
                                            <input
                                                type='text'
                                                placeholder='First name'
                                                className={ `form-control form-control-lg form-control-solid ${getInputClasses(
                                                    "firstname"
                                                )}` }
                                                name='firstname'
                                                { ...formik.getFieldProps("firstname") }
                                            />
                                        </div>
                                        { formik.touched.firstname && formik.errors.firstname ? (
                                            <div className='invalid-feedback'>
                                                { formik.errors.firstname }
                                            </div>
                                        ) : null }
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Middle Name</label>
                                            <input
                                                type='text'
                                                placeholder='Middle name'
                                                className={ `form-control form-control-lg form-control-solid ${getInputClasses(
                                                    "middlename"
                                                )}` }
                                                name='middlename'
                                                { ...formik.getFieldProps("middlename") }
                                            />
                                            { formik.touched.middlename && formik.errors.middlename ? (
                                                <div className='invalid-feedback'>
                                                    { formik.errors.middlename }
                                                </div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Last Name</label>
                                            <input
                                                type='text'
                                                placeholder='Last name'
                                                className={ `form-control form-control-lg form-control-solid ${getInputClasses(
                                                    "lastname"
                                                )}` }
                                                name='lastname'
                                                { ...formik.getFieldProps("lastname") }
                                            />
                                            { formik.touched.lastname && formik.errors.lastname ? (
                                                <div className='invalid-feedback'>
                                                    { formik.errors.lastname }
                                                </div>
                                            ) : null }
                                        </div>
                                    </div>
                                    <div className='col-xl-12 col-lg-12 col-md-12'>
                                        <div>
                                            <label className='col-form-label'>Reason for Medication</label>
                                            <div className='input-group input-group-lg input-group-solid'>
                                                <textarea
                                                    className='form-control'
                                                    name='address'
                                                    placeholder='because of ....'
                                                    rows='3'
                                                ></textarea>
                                            </div>
                                            { formik.touched.address && formik.errors.address ? (
                                                <div className='invalid-feedback display-block'>
                                                    { formik.errors.address }
                                                </div>
                                            ) : null }
                                        </div>
                                    </div>

                                    <div className=' mt-4 row'>
                                        <form className='' noValidate>
                                            <TextField
                                                id="date"
                                                label="Start Date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={ classes.textField }
                                                InputLabelProps={ {
                                                    shrink: true,
                                                } }
                                            />
                                        </form>

                                        <form className='' noValidate>
                                            <TextField
                                                id="date"
                                                label="Last Date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={ classes.textField }
                                                InputLabelProps={ {
                                                    shrink: true,
                                                } }
                                            />
                                        </form>
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
                                        { formik.isSubmitting }
                                    </button>
                                    <Link
                                        to="/user-profile/profile-overview"
                                        className="btn btn-secondary"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade " id="kt_tab_pane_4_2" role="tabpanel" aria-labelledby="kt_tab_pane_4_2">
                            second
                        </div>
                        <div class="tab-pane fade" id="kt_tab_pane_4_3" role="tabpanel" aria-labelledby="kt_tab_pane_4_3">
                            d
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
