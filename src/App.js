import "./App.css";
import React, { useEffect, useState } from "react";
import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  Navbar,
  ViewContact,
} from "./components";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getAllGroups,
} from "./services/contactService";
const contactData = {
  fullname: "",
  photo: " ",
  email: " ",
  job: " ",
  group: " ",
};
 
const App = () => {
  const [isLoading, setISLoading] = useState(false);
  const [getContacts, setGetContacts] = useState([]);
  const [getGroups, setGetGroups] = useState([]);
  const [getContact, setContact] = useState(contactData);
  const [getFilteredContact, setFilteredContact]=useState([])
 const [quary, setQuary]= useState({text: ""})
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setISLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: grouptData } = await getAllGroups();
        setGetContacts(contactsData);
        setFilteredContact(contactsData)
        setGetGroups(grouptData);
        setISLoading(false);
      } catch (error) {
        alert(error.message);
        setISLoading(false);
      }
    };
    fetchData();
  }, []);

  const setContactInfo = (event) => {
    setContact({ ...getContact, [event.target.name]: event.target.value });
  };
  const creatContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);
      if (status === 201) {
        setContact({});
        navigate("/contacts");
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const removeContact= async(contactId)=>{
    
    try {
      setISLoading(true)
      const response= await deleteContact(contactId)
      if(response){
        const {data: contactsData}= await getAllContacts()
        setGetContacts(contactsData)
        setISLoading(false);
        window.location.reload();

      }
    } catch (error) {
      console.log(error)
      setISLoading(false);
    }
  }
const contactSearch = (event)=>{
setQuary({ ...quary, text : event.target.value })
const allcontacts = getContacts.filter((contact)=>{
  return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase())
})
setFilteredContact(allcontacts)
}
  return (
    <div className="App-header">
      <Navbar quary={quary} search={contactSearch}/>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getFilteredContact} loading={isLoading} removeContact={removeContact} />}
        />
        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={isLoading}
              setContactInfo={setContactInfo}
              contact={getContact}
              getGroups={getGroups}
              creatContactForm={creatContactForm}
            />
          }
        />
        <Route path="/contacts/:contactId" element={<Contact/>} />
        <Route
          path="/contacts/viewContact/:contactId"
          element={<ViewContact/>}
          contact={getContact}
          group={getGroups}
          loading={isLoading}
        />
        <Route path="/contacts/edit/:contactId" element={<EditContact/>} />
      </Routes>
    </div>
  );
};

export default App;
