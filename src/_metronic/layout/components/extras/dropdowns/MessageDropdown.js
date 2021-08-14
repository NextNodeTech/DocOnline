/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";
import "./messageStyles.css";
export function MessageDropdown() {
  // const bgImage = toAbsoluteUrl("/media/misc/bg-2.jpg");
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, "extras.quick-actions.layout") ===
        "offcanvas",
    };
  }, [uiService]);

  return (
    <>
      { layoutProps.offcanvas && (
        <OverlayTrigger
          placement="left"
          overlay={ <Tooltip id="quick-actions-tooltip">Messages</Tooltip> }
        >
          <div className="topbar-item">
            <div
              className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1"
              id="kt_quick_actions_toggle"
            >
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <SVG
                  src={ toAbsoluteUrl("/media/svg/icons/Media/Equalizer.svg") }
                />
              </span>
            </div>
          </div>
        </OverlayTrigger>
      ) }
      { !layoutProps.offcanvas && (
        <Dropdown drop="down" alignRight>
          <Dropdown.Toggle
            as={ DropdownTopbarItemToggler }
            id="kt_quick_actions_panel_toggle"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="quick-actions-tooltip">Messages</Tooltip>
              }
            >
              <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                  <SVG
                    src={ toAbsoluteUrl("/media/svg/icons/Media/Equalizer.svg") }
                  />
                </span>
              </div>
            </OverlayTrigger>
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg">
            <form>
              <div className="card card-custom">
                {/* <!--begin::Header--> */ }
                <div className="card-header align-items-center px-4 py-3">
                  <div className="text-left flex-grow-1">
                    {/* <!--begin::Dropdown Menu--> */ }
                    <div className="dropdown dropdown-inline">
                      <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="svg-icon svg-icon-lg">
                          {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Add-user.svg--> */ }
                          <SVG
                            src={ toAbsoluteUrl("/media/svg/icons/Media/Add-user.svg") }
                          />
                          {/* <!--end::Svg Icon--> */ }
                        </span>
                      </button>
                      <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                        {/* <!--begin::Navigation--> */ }
                        <ul className="navi navi-hover py-5">
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-drop"></i>
                              </span>
                              <span className="navi-text">New Group</span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-list-3"></i>
                              </span>
                              <span className="navi-text">Contacts</span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-rocket-1"></i>
                              </span>
                              <span className="navi-text">Groups</span>
                              <span className="navi-link-badge">
                                <span className="label label-light-primary label-inline font-weight-bold">new</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-bell-2"></i>
                              </span>
                              <span className="navi-text">Calls</span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-gear"></i>
                              </span>
                              <span className="navi-text">Settings</span>
                            </a>
                          </li>
                          <li className="navi-separator my-3"></li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-magnifier-tool"></i>
                              </span>
                              <span className="navi-text">Help</span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-icon">
                                <i className="flaticon2-bell-2"></i>
                              </span>
                              <span className="navi-text">Privacy</span>
                              <span className="navi-link-badge">
                                <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        {/* <!--end::Navigation--> */ }
                      </div>
                    </div>
                    {/* <!--end::Dropdown Menu--> */ }
                  </div>
                  <div className="text-center flex-grow-1">
                    <div className="text-dark-75 font-weight-bold font-size-h5">Matt Pears</div>
                    <div>
                      <span className="label label-dot label-success"></span>
                      <span className="font-weight-bold text-muted font-size-sm">Active</span>
                    </div>
                  </div>
                  <div className="text-right flex-grow-1">
                    <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-dismiss="modal">
                      <i className="ki ki-close icon-1x"></i>
                    </button>
                  </div>
                </div>
                {/* <!--end::Header--> */ }
                {/* <!--begin::Body--> */ }
                <div className="card-body">
                  {/* <!--begin::Scroll--> */ }
                  <div className="scroll scroll-pull" data-height="375" data-mobile-height="300">
                    {/* <!--begin::Messages--> */ }
                    <div className="messages">
                      {/* <!--begin::Message In--> */ }
                      <div className="d-flex flex-column mb-5 align-items-start">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-40 mr-3">
                            <img alt="Pic" src="public/media/users/300_20.jpg" />
                          </div>
                          <div>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                            <span className="text-muted font-size-sm">2 Hours</span>
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">How likely are you to recommend our company to your friends and family?</div>
                      </div>
                      {/* <!--end::Message In--> */ }
                      {/* <!--begin::Message Out--> */ }
                      <div className="d-flex flex-column mb-5 align-items-end">
                        <div className="d-flex align-items-center">
                          <div>
                            <span className="text-muted font-size-sm">3 minutes</span>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                          </div>
                          <div className="symbol symbol-circle symbol-40 ml-3">
                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                      </div>
                      {/* <!--end::Message Out--> */ }
                      {/* <!--begin::Message In--> */ }
                      <div className="d-flex flex-column mb-5 align-items-start">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-40 mr-3">
                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                          </div>
                          <div>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                            <span className="text-muted font-size-sm">40 seconds</span>
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Ok, Understood!</div>
                      </div>
                      {/* <!--end::Message In--> */ }
                      {/* <!--begin::Message Out--> */ }
                      <div className="d-flex flex-column mb-5 align-items-end">
                        <div className="d-flex align-items-center">
                          <div>
                            <span className="text-muted font-size-sm">Just now</span>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                          </div>
                          <div className="symbol symbol-circle symbol-40 ml-3">
                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">You’ll receive notifications for all issues, pull requests!</div>
                      </div>
                      {/* <!--end::Message Out--> */ }
                      {/* <!--begin::Message In--> */ }
                      <div className="d-flex flex-column mb-5 align-items-start">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-40 mr-3">
                            <img alt="Pic" src="assets/media/users/300_12.jpg" />
                          </div>
                          <div>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                            <span className="text-muted font-size-sm">40 seconds</span>
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">You can unwatch this repository immediately by clicking here:
                          <a href="#">https://github.com</a></div>
                      </div>
                      {/* <!--end::Message In--> */ }
                      {/* <!--begin::Message Out--> */ }
                      <div className="d-flex flex-column mb-5 align-items-end">
                        <div className="d-flex align-items-center">
                          <div>
                            <span className="text-muted font-size-sm">Just now</span>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                          </div>
                          <div className="symbol symbol-circle symbol-40 ml-3">
                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed</div>
                      </div>
                      {/* <!--end::Message Out--> */ }
                      {/* <!--begin::Message In--> */ }
                      <div className="d-flex flex-column mb-5 align-items-start">
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-40 mr-3">
                            <img alt="Pic" src="assets/media/users/300_12.jpg" />
                          </div>
                          <div>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                            <span className="text-muted font-size-sm">40 seconds</span>
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Most purchased Business courses during this sale!</div>
                      </div>
                      {/* <!--end::Message In--> */ }
                      {/* <!--begin::Message Out--> */ }
                      <div className="d-flex flex-column mb-5 align-items-end">
                        <div className="d-flex align-items-center">
                          <div>
                            <span className="text-muted font-size-sm">Just now</span>
                            <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                          </div>
                          <div className="symbol symbol-circle symbol-40 ml-3">
                            <img alt="Pic" src="assets/media/users/300_21.jpg" />
                          </div>
                        </div>
                        <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                      </div>
                      {/* <!--end::Message Out--> */ }
                    </div>
                    {/* <!--end::Messages--> */ }
                  </div>
                  {/* <!--end::Scroll--> */ }
                </div>
                {/* <!--end::Body--> */ }
                {/* <!--begin::Footer--> */ }
                <div className="card-footer align-items-center">
                  {/* <!--begin::Compose--> */ }
                  <textarea className="form-control border-0 p-0" rows="2" placeholder="Type a message"></textarea>
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="mr-3">
                      <a href="#" className="btn btn-clean btn-icon btn-md mr-1">
                        <i className="flaticon2-photograph icon-lg"></i>
                      </a>
                      <a href="#" className="btn btn-clean btn-icon btn-md">
                        <i className="flaticon2-photo-camera icon-lg"></i>
                      </a>
                    </div>
                    <div>
                      <button type="button" className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
                    </div>
                  </div>
                  {/* <!--begin::Compose--> */ }
                </div>
                {/* <!--end::Footer--> */ }
              </div>

            </form>
          </Dropdown.Menu>
        </Dropdown>
      ) }
    </>
  );
}
