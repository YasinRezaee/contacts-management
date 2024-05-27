import React from "react";
import { SearchContacts } from "../components";
import { PURPLE, BACKGROUND, FOREGROUND } from "../helpers/colors";
import { useLocation } from "react-router-dom";

const Navbar = ({ quary, search }) => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-lg"
      style={{
        backgroundColor: BACKGROUND,
        color: BACKGROUND,
      }}
    >
      <div className="container-fluid my-2">
        <div className="row w-100">
          <div className="my-1 col-xl-6 col-md-12">
            <div className="navbar-brand" style={{ color: FOREGROUND }}>
              <i className="fa fa-id-badge mx-3" style={{ color: PURPLE }} />
              وب اپلیکیشن مدیریت <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
          </div>
          {location.pathname == "/contacts" ? (
            <div className="my-1 col-xl-6 col-md-12 d-flex justify-content-start">
              <SearchContacts quary={quary} search={search} />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
