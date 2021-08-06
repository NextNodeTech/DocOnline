/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export function ProfileCard() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.pic) {
      setPic(user.pic);
    }
  }, [user]);

  const getUserPic = () => {
    if (!pic) {
      return "none";
    }

    return `url(${pic})`;
  };
  const removePic = () => {
    setPic("");
  };

  return (
    <>
      {user && (
        <div
          className='flex-row-auto offcanvas-mobile w-250px w-xxl-350px'
          id='kt_profile_aside'
        >
          <div className='card card-custom card-stretch'>
            {/* begin::Body */}
            <div className='card-body pt-4'>
              {/* begin::User */}
                <div className='row justify-content-center text-center'>
                  <div className='symbol symbol-60 symbol-circle symbol-xl-90 rounded-circle'>
                    <div
                      className='image-input image-input-outline'
                      style={{
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )}`,
                      }}
                    >
                      <div
                        className='image-input-wrapper'
                        style={{ backgroundImage: `${getUserPic()}` }}
                      />
                      <label
                        className='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        data-action='change'
                        data-toggle='tooltip'
                        title=''
                        data-original-title='Change avatar'
                      >
                        <i className='fa fa-pen icon-sm text-muted'></i>
                        <input
                          type='file'
                          // name="pic"
                          accept='.png, .jpg, .jpeg'
                          // {...formik.getFieldProps("pic")}
                        />
                        <input type='hidden' name='profile_avatar_remove' />
                      </label>
                      <span
                        className='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        data-action='cancel'
                        data-toggle='tooltip'
                        title=''
                        data-original-title='Cancel avatar'
                      >
                        <i className='ki ki-bold-close icon-xs text-muted'></i>
                      </span>
                      <span
                        onClick={removePic}
                        className='btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow'
                        data-action='remove'
                        data-toggle='tooltip'
                        title=''
                        data-original-title='Remove avatar'
                      >
                        <i className='ki ki-bold-close icon-xs text-muted'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mt-2 justify-content-center text-center'>
                  <h4 class='font-weight-bold my-2'>
                    {" "}
                    {user.firstname} {user.lastname}
                  </h4>
                </div>
              {/* end::User */}

              {/* begin::Nav */}
              <div className='navi navi-bold navi-hover navi-active navi-link-rounded'>
                <div className='navi-item mb-2'>
                  <NavLink
                    to='/user-profile/profile-overview'
                    className='navi-link py-4 text-nowrap'
                    activeClassName='active'
                  >
                    <span className='navi-icon mr-2'>
                      <span className='svg-icon'>
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/Layers.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className='navi-text font-size-lg'>
                      Profile Overview
                    </span>
                  </NavLink>
                </div>
                <div className='navi-item mb-2'>
                  <NavLink
                    to='/user-profile/personal-information'
                    className='navi-link py-4 text-nowrap'
                    activeClassName='active'
                  >
                    <span className='navi-icon mr-2'>
                      <span className='svg-icon'>
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/User.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className='navi-text font-size-lg'>
                      Personal Information
                    </span>
                  </NavLink>
                </div>
                <div className='navi-item mb-2'>
                  <NavLink
                    to='/user-profile/languages'
                    className='navi-link py-4 text-nowrap'
                    activeClassName='active'
                  >
                    <span className='navi-icon mr-2'>
                      <span className='svg-icon'>
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Mail-opened.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className='navi-text font-size-lg'>Languages</span>
                  </NavLink>
                </div>
                <div className='navi-item mb-2'>
                  <NavLink
                    to='/user-profile/change-password'
                    className='navi-link py-4 text-nowrap'
                    activeClassName='active'
                  >
                    <span className='navi-icon mr-2'>
                      <span className='svg-icon'>
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Shield-user.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className='navi-text font-size-lg'>
                      Change Password
                    </span>
                  </NavLink>
                </div>
              </div>
              {/* end::Nav */}
            </div>
            {/* end::Body */}
          </div>
        </div>
      )}
    </>
  );
}
