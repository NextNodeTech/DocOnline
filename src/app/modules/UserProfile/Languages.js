/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SVG from "react-inlinesvg";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";

function Language() {

    return (
        <form className="card card-custom" >
            {/* {loading && <ModalProgressBar />} */}

            {/* begin::Header */}
            <div className="card-header py-3">
                <div className="card-title align-items-start flex-column">
                    <h3 className="card-label font-weight-bolder text-dark">
                        Your Languages
                    </h3>
                    <span className="text-muted font-weight-bold font-size-sm mt-1">

                    </span>
                </div>
                <div className="card-toolbar">
                    <button
                        type="submit"
                        className="btn btn-success mr-2"

                    >
                        Save Changes

                    </button>
                    <Link
                        to="/user-profile/profile-overview"
                        className="btn btn-secondary"
                    >
                        Cancel
                    </Link>
                </div>
            </div>

            {/* end::Form */}
        </form>
    );
}

export default connect(null, auth.actions)(Language);
