import React from "react";
import { CURRENTLINE, FOREGROUND, PINK, RED } from "../../helpers/colors";
import NotFound from "../../assets/no-found.gif";
import { Contact, Spinner } from "../../components";
import { Link } from "react-router-dom";
const Contacts = ({ contacts, loading ,removeContact}) => {
  console.log("contacts=====>", contacts);
  return (
    <>
      <section className="container-fluid">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 my-2 d-flex justify-content-center">
                <Link
                  to={"/contacts/add"}
                  className="btn mx2"
                  style={{ backgroundColor: PINK, color: FOREGROUND }}
                >
                  ساخت مخاطب جدید
                  <i
                    className="fa fa-plus-square fa-lg mx-3"
                    aria-hidden="true"
                  ></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : contacts.length > 0 ? (
        <section className="container-fluid ">
          <div className="row justify-content-center">
            <div className="col-md-6">
              {contacts.map((person) => (
                <Contact person={person} key={person.id} removeContact={removeContact} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div
          className="text-center py-5 my-5 rounded shadow-lg"
          style={{ backgroundColor: CURRENTLINE }}
        >
          <p className="h3" style={{ color: RED }}>
            مخاطب یافت نشد!
          </p>
          <img src={NotFound} alt="پیدا نشد" className="w-25" />
        </div>
      )}
    </>
  );
};

export default Contacts;
