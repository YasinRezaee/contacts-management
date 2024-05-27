import React from "react";
import { PURPLE, FOREGROUND, COMMENT} from "../../helpers/colors";

const SearchContacts = ({search, quary}) => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        style={{
          color: FOREGROUND,
          border: "1px solid #BD93F9",
          backgroundColor: PURPLE,
          cursor: "pointer",
        }}
        className="input-group-text"
        id="basic-addon1"
      >
        <i
          class="fa fa-search "
          aria-hidden="true"
          style={{ color:FOREGROUND }}
          cursu
        ></i>
      </span>
      <input
        dir="rtl"
        type="text"
        value={quary.text}
        onChange={search}
        className="form-control"
        placeholder="جستجوی مخاطب ..."
        aria-label="search"
        style={{ backgroundColor: FOREGROUND, color: COMMENT}}
      />
    </div>
  );
};

export default SearchContacts;
