import React, { useState } from "react";
import "./CustomizeDropDown.css";

const CustomizeDropDown = ({ sentDataToParent }) => {
  const [selectedSchema, setSelectedSchema] = useState("");
  const [additionalSchemas, setAdditionalSchemas] = useState([]);

  const allOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleAddNewSchema = () => {
    if (selectedSchema !== "") {
      setAdditionalSchemas([...additionalSchemas, selectedSchema]);
      setSelectedSchema("");
      sentDataToParent([...additionalSchemas, selectedSchema]);
    }
  };

  const handleDropdownChange = (e) => {
    setSelectedSchema(e.target.value);
  };

  return (
    <div className="schema-dropdown">
      <div className="container">
        <div className="dropdown">
          {additionalSchemas.map((schema, index) => (
            <div style={{ display: "flex" }}>
              {schema == "Account Name" ? (
                <div
                  className="circle"
                  style={{ backgroundColor: "red", marginTop: "15px" }}
                ></div>
              ) : (
                <div
                  className="circle"
                  style={{ backgroundColor: "green", marginTop: "15px" }}
                ></div>
              )}
              <select>
                <option key={index}>{schema}</option>
                {allOptions
                  .filter((option) => !additionalSchemas.includes(option.label))
                  .map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
              </select>
            </div>
          ))}

          <div style={{ display: "flex" }}>
            <div
              className="circle"
              style={{ backgroundColor: "grey", marginTop: "15px" }}
            ></div>
            <select onChange={handleDropdownChange} value={selectedSchema}>
              <option value=""> Add Schema to Segment</option>
              {allOptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <a href="#" onClick={handleAddNewSchema}>
        Add new schema
      </a>
    </div>
  );
};

export default CustomizeDropDown;
