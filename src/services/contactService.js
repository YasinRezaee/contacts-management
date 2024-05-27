import axios from "axios";
const SERVER_URL = "http://localhost:9000";

// *******************************getting all contacts***********************************
export const getAllContacts = () => {
  const url = `${SERVER_URL}/contacts`;
  return axios.get(url);
};
// *******************************get only one contact by id*****************************
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url);
};
// *******************************getting all groups*************************************
export const getAllGroups = () => {
  const url = `${SERVER_URL}/groups`;
  return axios.get(url);
};
// *******************************getting one group*************************************
export const getGroup = (groupId) => {          
  const url = `${SERVER_URL}/groups/${groupId}`;
  return axios.get(url);
};
// *******************************creating contact*************************************
export const createContact = (contact) => {
  const url = `${SERVER_URL}/contacts`;
  return axios.post(url, contact);
};
// *******************************updatting contact*************************************
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/contacts/${contactId}`;
  return axios.put(url, contact)
};
// export const updateContact = (contact, contactId) => {
//   const url = `${SERVER_URL}/contacts/${contactId}`;
//   return axios.put(url, contact);
// };
// *******************************updatting contact*************************************
export const deleteContact=(contactId)=>{
    const url=`${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url)
}