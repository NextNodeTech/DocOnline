/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  DropdownCustomToggler,
  DropdownMenu4,
} from "../../../../_metronic/_partials/dropdowns";
import './styles.css';


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
              {/* begin::Toolbar */}
              <div className="d-flex justify-content-end">
                <Dropdown className="dropdown dropdown-inline" alignRight>
                  <Dropdown.Toggle
                    className="btn btn-clean btn-hover-light-primary btn-sm btn-icon cursor-pointer"
                    variant="transparent"
                    id="dropdown-toggle-top-user-profile"
                    as={DropdownCustomToggler}
                  >
                    <i className="ki ki-bold-more-hor"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                    <DropdownMenu4></DropdownMenu4>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* end::Toolbar */}
              {/* begin::User */}
              <div className=" justify-content-center text-center">
                <div className="symbol symbol-60 symbol-xxl-100 align-self-center align-self-xxl-center rounded-circle ">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  {/* style="background-i
                  mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                  >
                    {user.firstname} {user.lastname}
                  </a>
                  <div className="text-muted">{user.occupation}</div>

                </div>
              </div>
              {/* end::User */}
              {/* begin::Contact */}

              {/* icons add  here... */}
              <div className="navi-item mb-4 pt-7 text-center ">
                <button class="btn btn-success btn-circle btn-circle-sm m-2"><i class="fab fa-facebook-messenger ml-1"></i></button>
                <button class="btn btn-primary btn-circle btn-circle-sm m-2"><i class="fab fa-facebook-f ml-1"></i></button>
                <button class="btn btn-info btn-circle btn-circle-sm m-2"><i class="fab fa-instagram ml-1"></i></button>

              </div>

              {/* end::Contact */}
              {/* begin::Nav */}
              <div className="navi navi-bold navi-hover navi-active navi-link-rounded py-7">
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/profile-overview"
                    className="navi-link py-4"
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
                <div className="navi-item mb-2 " style={{ whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/user-profile/personal-information"
                    className="navi-link py-4"
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
                <div className="navi-item mb-2" style={{ whiteSpace: 'nowrap' }}>
                  <NavLink
                    to="/user-profile/change-password"
                    className="navi-link py-4"
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
                    <span className="navi-label">

                    </span>
                  </NavLink>
                </div>
                <div className="navi-item mb-2">
                  <NavLink
                    to="/user-profile/email-settings"
                    className="navi-link py-4"
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
