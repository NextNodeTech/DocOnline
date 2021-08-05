/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../../../_metronic/_partials/dropdowns";



export function ProfileCard() {
  const user = useSelector(({ auth }) => auth.user, shallowEqual);

  useEffect(() => {
    return () => { };
  }, [user]);

  return (
    <>
      {user && (
        <div
          className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
          id="kt_profile_aside"
        >
          <div className="card card-custom card-stretch">
            {/* begin::Body */}
            <div className="card-body pt-4">

              {/* begin::User */}
              <div className=" justify-content-center text-center">
                <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  {/* style="background-i
                  mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div className="mt-2">
                  <h4 class="font-weight-bold my-2"> {user.firstname} {user.lastname}</h4>
                </div>
              </div>
              {/* end::User */}

              {/* begin::Nav */}
              <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/profile-overview"
                    className="navi-link py-4 text-nowrap"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Design/Layers.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Profile Overview
                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/personal-information"
                    className="navi-link py-4 text-nowrap"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/User.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Personal Information
                    </span>
                  </NavLink>
                </div>

                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/change-password"
                    className="navi-link py-4 text-nowrap"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Shield-user.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Change Password
                    </span>

                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/languages"
                    className="navi-link py-4 text-nowrap"
                    activeClassName="active"
                  >
                    <span className="navi-icon mr-2">
                      <span className="svg-icon">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Mail-opened.svg"
                          )}
                        ></SVG>{" "}
                      </span>
                    </span>
                    <span className="navi-text font-size-lg">
                      Languages
                    </span>
                  </NavLink>
                </div>


              </div>
              {/* end::Nav */}
            </div>
            {/* end::Body */}
          </div>
        </div>
      )
      }
    </>
  );
}
