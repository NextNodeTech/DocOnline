import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, shallowEqual } from "react-redux";
import { useFormik } from "formik";
// import * as Yup from "yup";
// import { MDBFileInput } from "mdbreact";
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


export default function MedicalChart() {
    const [value, setValue] = React.useState(0);

    const handleChange = ( newValue) => {
        setValue(newValue);
    };

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
        onSubmit: (values, { setStatus, setSubmitting }) => {
        },
        onReset: ( { resetForm }) => {
            resetForm();
        },
    });

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={ value !== index }
                id={ `simple-tabpanel-${index}` }
                aria-labelledby={ `simple-tab-${index}` }
                { ...other }
            >
                { value === index && (
                    <Box div={ 3 }>
                        <div>{ children }</div>
                    </Box>
                ) }
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <div className="card card-custom">
                <div className="card-header">
                    <div className="card-title">
                        <h3 className="card-label ml-10">Medical Chart</h3>
                    </div>
                    <div className="card-toolbar">
                        <ul className="nav nav-light-success nav-bold nav-pills text-nowrap">
                            <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
                                <Tab label="Medication" { ...a11yProps(0) } />
                                <Tab label="Allergies" { ...a11yProps(1) } />
                                <Tab label="Reports" { ...a11yProps(2) } />
                            </Tabs>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <TabPanel value={ value } index={ 0 }>
                            {/* medicaltion start */ }
                            <div className='card-body'>
                                <div className='form-group row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Name</label>
                                            <input
                                                type='text'
                                                placeholder='Medicine Name'
                                                className={ `form-control form-control-lg form-control-solid ${getInputClasses(
                                                    "medicinename"
                                                )}` }
                                                name='medicinename'
                                                { ...formik.getFieldProps("medicinename") }
                                            />
                                        </div>
                                        { formik.touched.firstname && formik.errors.firstname ? (
                                            <div className='invalid-feedback'>
                                                { formik.errors.firstname }
                                            </div>
                                        ) : null }
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-4 mt-3'>
                                        <div>
                                            <label>Medication Start Date</label>
                                            <div>
                                                <input className="form-control form-control-lg form-control-solid" id="kt_daterangepicker_1" readOnly placeholder="Start date" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-4 mt-3'>
                                        <div>
                                            <label>Medication End Date</label>
                                            <div>
                                                <input className="form-control form-control-lg form-control-solid" id="kt_daterangepicker_1" readOnly placeholder="last date" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <div className='col-xl-12 col-lg-12 col-md-12'>
                                        <div>
                                            <label className='col-form-label'>Reason for Medication</label>
                                            <div className='input-group input-group-lg input-group-solid'>
                                                <textarea
                                                    className='form-control'
                                                    name='address'
                                                    placeholder='The reason for using this medicine is ....'
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
                                </div>

                            </div>
                            {/* medicaltion end */ }
                        </TabPanel>
                        <TabPanel value={ value } index={ 1 }>
                            <div className='card-body'>
                                <div className='form-group row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Medicine</label>
                                            <input
                                                type='text'
                                                placeholder='Medicine name'
                                                className={ `form-control form-control-lg form-control-solid ${getInputClasses(
                                                    "medicionname"
                                                )}` }
                                                name='medicionname'
                                                { ...formik.getFieldProps("medicionname") }
                                            />
                                        </div>
                                        { formik.touched.medicionname && formik.errors.medicionname ? (
                                            <div className='invalid-feedback'>
                                                { formik.errors.medicionname }
                                            </div>
                                        ) : null }
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Allergy level</label>
                                            <select
                                                className='form-control form-control-lg form-control-solid'
                                                name='allergy'
                                                { ...formik.getFieldProps("allergy") }
                                            >
                                                <option>Select level</option>
                                                <option value='acute'>Acute </option>
                                                <option value='chronic'>Chronic</option>
                                                <option value='Other'>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-12 col-lg-12 col-md-12'>
                                        <div>
                                            <label className='col-form-label'> Allergy</label>
                                            <div className='input-group input-group-lg input-group-solid'>
                                                <textarea
                                                    className='form-control'
                                                    name='address'
                                                    placeholder=' Allergies write here....'
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
                                </div>

                            </div>
                        </TabPanel>
                        <TabPanel value={ value } index={ 2 }>
                            <div className='card-body'>
                                <div className='form-group row'>
                                    <div className='col-xl-4 col-lg-4 col-md-4'>
                                        <div>
                                            <label className='col-form-label'>Name</label>
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
                                            <label className='col-form-label'> Date of Report </label>
                                            <div className='input-group date'>
                                                <input
                                                    type='text'
                                                    className='form-control form-control-lg form-control-solid'
                                                    value='02-16-2012'
                                                />
                                                <div className='input-group-addon'>
                                                    <span className='glyphicon glyphicon-th'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 mt-4 ml-1 row'>
                                        <div className="form-group row">
                                            <label class=" col-form-label text-dark ">Upload Files:</label>
                                            <input type="file" className="form-control-file " id="exampleFormControlFile1" />
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
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
                        <Link
                            to="/user-profile/profile-overview"
                            className="btn btn-secondary"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
                {/* Footer End */ }
            </div>

        </>
    )
}
