/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
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
                <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: `url(${user.pic})` }}
                  ></div>
                  {/* style="background-i
                  mage:url('/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg')" */}
                  <i className="symbol-badge bg-success"></i>
                </div>
                <div className="mt-1">
                  <h4 class="font-weight-bold my-2"> {user.firstname} {user.lastname}</h4>

                </div>
                <span class="label label-light-warning label-inline font-weight-bold label-lg mt-1 text-center">Active</span>
              </div>
              {/* end::User */}

              {/* begin::Nav */}
              <div className="mt-5">
                <NavLink
                  to="/user-profile/profile-overview"
                  className="navi-link py-4"
                  activeClassName="active"
                >
                  <a href="#" class="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block active">Profile Overview</a>
                </NavLink>
                <NavLink
                  to="/user-profile/personal-information"
                  className="navi-link py-4"
                  activeClassName="active"
                >
                  <a href="#" class="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block">Personal information</a>
                </NavLink>
                <NavLink
                  to="/user-profile/change-password"
                  className="navi-link py-4"
                  activeClassName="active"
                >
                  <a href="#" class="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block">Change Password</a>
                </NavLink>
                <NavLink
                  to="/user-profile/languages"
                  className="navi-link py-4"
                  activeClassName="active"
                >
                  <a href="#" class="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block">Languages</a>
                </NavLink>

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
