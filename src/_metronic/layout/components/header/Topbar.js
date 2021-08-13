import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
// import ExpandedSearchBar from "../extras/dropdowns/search/ExpandedSearchBar";
import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";
import { MessageDropdown } from "../extras/dropdowns/MessageDropdown";
import { QuickUserToggler } from "../extras/QuiclUserToggler";

export function Topbar() {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      viewCartDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <>
      <div class="input-group rounded m-auto ">
        <input type="search" class="form-control rounded" placeholder="Search..." aria-label="Search"
          aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon" style={ { background: '#c9f7f5' } }>
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div className="topbar">
        {/* {layoutProps.viewSearchDisplay && <ExpandedSearchBar />} */ }

        { layoutProps.viewNotificationsDisplay && <UserNotificationsDropdown /> }

        { layoutProps.viewNotificationsDisplay && <MessageDropdown /> }



        { layoutProps.viewUserDisplay && <QuickUserToggler /> }
      </div>
    </>
  );
}
