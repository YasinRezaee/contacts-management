import React from "react";
import {
  CURRENTLINE,
  CYAN,
  FOREGROUND,
  ORANGE,
  PURPLE,
  RED,
} from "../../helpers/colors";
import { Link } from "react-router-dom";
const Contact = ({person, removeContact}) => {
 
  return (
    <div
      className="card my-3"
      style={{ backgroundColor: CURRENTLINE, color: FOREGROUND }}
    >
      <div className="card-body">
        <div className="row align-items-center d-flex justify-content-around">
          <div className="co-md-3 col-sm-3">
            <img
              src={person.photo}
              alt={person.fullname}
              style={{ border: `1px solid ${PURPLE}`}}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7 col-sm-7 ">
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark">
                نام و نام خانوادگی: {"  "}
                <span className="fw-bold">{person.fullname}</span>
              </li>
              <li className="list-group-item list-group-item-dark">
                شماره موبایل: {"  "}
                <span className="fw-bold">{person.mobile}</span>
              </li>
              <li className="list-group-item list-group-item-dark">
                آدرس ایمیل: {"  "}
                <span className="fw-bold">{person.email}</span>
              </li>
            </ul>
          </div>
          <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
            <Link to={`/contacts/viewContact/${person.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
              <i class="fa fa-eye" aria-hidden="true"></i>
            </Link >
            <Link to={`/contacts/edit/${person.id}`} className="btn my-1" style={{ backgroundColor: CYAN }}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
            <button onClick={()=>removeContact(person.id)} className="btn my-1" style={{ backgroundColor: RED }}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
