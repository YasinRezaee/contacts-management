import React from "react";
import Spinner from "./Spinner";
import { GREEN, ORANGE, PURPLE, RED } from "../helpers/colors";
import { Link } from "react-router-dom";
const AddContact = ({ loading, setContactInfo, contact, getGroups, creatContactForm }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="p-3">
          <img
            src={require("../assets/man-taking-note.png")}
            height="400px"
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "150px",
              left: "100px",
              opacity: "50%",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 fw-bold text-center" style={{ color: GREEN }}>
                  ساخت مخاطب جدید
                </p>
              </div>
              <hr style={{ color: GREEN }} />
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <form onSubmit={creatContactForm}>
                  <div className="mb-2">
                   <small className="form-label" style={{ color: RED }}>نام و نام خانوادگی:</small>
                    <input
                      value={contact.fullname}
                      onChange={setContactInfo}
                      type="text"
                      name="fullname"
                      className="form-control"
                      required={true}
                     
                    />
                  </div>
                  <div className="mb-2">
                  <small className="form-label" style={{ color: RED }}>آدرس تصویر:</small>
                    <input
                      value={contact.photo}
                      onChange={setContactInfo}
                      type="text"
                      name="photo"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                  <small className="form-label" style={{ color: RED }}>شماره موبایل:</small>
                    <input
                      value={contact.mobile}
                      onChange={setContactInfo}
                      type="number"
                      name="mobile"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                  <small className="form-label" style={{ color: RED }}>آدرس ایمیل:</small>
                    <input
                      value={contact.email}
                      onChange={setContactInfo}
                      type="email"
                      name="email"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                  <small className="form-label" style={{ color: RED }}>شغل مخاطب:</small>
                    <input
                      value={contact.job}
                      onChange={setContactInfo}
                      type="text"
                      name="job"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                  <small className="form-label" style={{ color: RED }}>گروه را انتخاب کنید:</small>
                    <select
                      value={contact.group}
                      onChange={setContactInfo} 
                      name="group"
                      required={true}
                      className="form-control"
                    >
                      <option value="">انتخاب گروه</option>
                      {getGroups.length > 0 && getGroups.map((group)=>(
                        <option key={group.id} value={group.id}>{group.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <input
                      type="submit"
                      name="group"
                      required={true}
                      className="btn"
                      style={{ backgroundColor: PURPLE }}
                      value="ساخت مخاطب"
                    ></input>
                    <Link
                      to={"/contacts"}
                      className="btn mx-2"
                      style={{ backgroundColor: ORANGE }}
                    >
                      انصراف
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddContact;
