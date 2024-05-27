import React, { useEffect, useState } from "react";
import {
  GREEN,
  RED,
  CURRENTLINE,
  FOREGROUND,
  ORANGE,
  PURPLE,
} from "../helpers/colors";
import { Link, useParams } from "react-router-dom";
import { getContact, getGroup } from "../services/contactService";
import Spinner from "./Spinner";

const ViewContact = () => {
  const { contactId } = useParams();
  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setState({ ...state, loading: false });
        const { data: contactData } = await getContact(contactId);
        const { data: groupData } = await getGroup(contactData.group);

        setState({
          loading: false,
          contact: contactData,
          group: groupData,
        });
      } catch (error) {
        // alert(error.message)
        setState({ ...state, loading: false });
      }
    };
    fetchData();
  }, []);
  const { loading, contact, groups } = state;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="h3 mt-3 text-center" style={{ color: RED }}>
            اطلاعات مخاطب
          </p>
          <hr style={{ color: GREEN }} />
        </div>
        <div className="row">
          {loading ? (
            <Spinner />
          ) : (
            <div className="col">
              <div
                className="card my-3"
                style={{ backgroundColor: CURRENTLINE, color: FOREGROUND }}
              >
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="co-md-3 col-sm-3">
                      <img
                        src={contact.photo}
                        alt={contact.fullname}
                        style={{ border: `1px solid ${PURPLE}` }}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-7 col-sm-7 ">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-dark">
                          نام و نام خانوادگی: {"  "}
                          <span className="fw-bold">{contact.fullname}</span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          شماره موبایل: {"  "}
                          <span className="fw-bold"> {contact.mobile} </span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          ایمیل: {"  "}
                          <span className="fw-bold">{contact.email} </span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          شغل: {"  "}
                          <span className="fw-bold">{contact.job}</span>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                          گروه: {"  "}
                          <span className="fw-bold">{contact.group}</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to={"/contacts"}
                      className="btn mx-2 w-25 mt-3"
                      style={{ backgroundColor: ORANGE }}
                    >
                      بازگشت به صفحه اصلی
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
