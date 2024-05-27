import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { GREEN, ORANGE, PURPLE, RED } from "../helpers/colors";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getContact,
  updateContact,
  getAllGroups,
} from "../services/contactService";

const EditContact = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      group: "",
    },
    groups: [],
  });
  useEffect(() => {
    setState({ ...state, loading: true });
    const fetchData = async () => {
      try {
        const { data: contactsData } = await getContact(contactId);
        const { data: groupsData } = await getAllGroups();
        setState({
          ...state,
          loading: false,
          contact: contactsData,
          groups: groupsData,
        });
      } catch (error) {
        alert(error.message);
        setState({ ...state, loading: false });
      }
    };
    fetchData();
  }, []);
  const contactUpdate = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };
  const submitUpdatedForm = async (event) => {
    event.preventDefault();
    try {
      setState({ ...state, loading: true });
      const { data } = await updateContact(state.contact, contactId);
      setState({ ...state, loading: false });
      if (data) {
        navigate("/contacts");
        window.location.reload();
      }
    } catch (error) {
      alert(error);
      setState({ ...state, loading: false });
    }
  };
  const { loading, contact, groups } = state;
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
                  ویرایش مخاطب
                </p>
              </div>
              <hr style={{ color: GREEN }} />
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <form onSubmit={submitUpdatedForm}>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      نام و نام خانوادگی:
                    </small>
                    <input
                      value={contact.fullname}
                      onChange={contactUpdate}
                      type="text"
                      name="fullname"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      آدرس تصویر:
                    </small>
                    <input
                      value={contact.photo}
                      onChange={contactUpdate}
                      type="text"
                      name="photo"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      شماره موبایل:
                    </small>
                    <input
                      value={contact.mobile}
                      onChange={contactUpdate}
                      type="number"
                      name="mobile"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      آدرس ایمیل:
                    </small>
                    <input
                      value={contact.email}
                      onChange={contactUpdate}
                      type="email"
                      name="email"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      شغل مخاطب:
                    </small>
                    <input
                      value={contact.job}
                      onChange={contactUpdate}
                      type="text"
                      name="job"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="form-label" style={{ color: RED }}>
                      گروه را انتخاب کنید:
                    </small>
                    <select
                      value={contact.group}
                      onChange={contactUpdate}
                      name="group"
                      required={true}
                      className="form-control"
                    >
                      <option value="">انتخاب گروه</option>
                      {groups.length > 0 &&
                        groups.map((group) => (
                          <option key={group.id} value={group.id}>
                            {group.name}
                          </option>
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
                      value="ویرایش مخاطب"
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

export default EditContact;
