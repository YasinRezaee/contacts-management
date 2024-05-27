import React from "react";
import "../App.css"
import { Link, Outlet } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <div className="d-flex justify-content-center bg-primary text-warning">
        <h1>کتابخانه من</h1>
      </div>
      <nav className="navbar bg-primary h5 justify-content-center py-3 ">
        <Link to="/books" className="text-light mx-3 decoration link-danger">کتاب ها</Link>
        <Link to="/about-us" className="text-light mx-3 decoration link-danger">درباره ی  ما</Link>
      </nav>
      <Outlet/>
    </>
  );
};

export default AppRouter;
