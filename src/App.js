import React, { useState } from "react";
import "./App.css";
import "./components/CustomizeDropDown.css";
import CustomizeDropDown from "./components/CustomizeDropDown";
import Modal from "./components/Modal";
import TextBox from "./components/TextBox";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataFromChild, setDataFromChild] = useState([]);

  const handleDataFromChild = (data) => {
    console.log("Data from child:", data);
    setDataFromChild(data);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveSegment = async () => {
    const data = {
      segment_name: inputValue,
      schema: dataFromChild.map((schema) => ({ [schema]: schema })),
    };
    try {
      const response = await fetch(
        "https://webhook.site/aaaf9ece-5978-4153-9f57-d61a4e670049",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log("Response from server:", responseData);
    } catch (error) {
      console.error("Error data to server:", error);
    }
  };

  return (
    <div className="App">
      <button className="btn-openSegment" onClick={openModal}>
        Save Segment
      </button>
      {isModalOpen && <div className="overlay"></div>}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        handleSaveSegment={handleSaveSegment}
      >
        <TextBox
          label="Enter the Name of the Segment"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Name of the Segment"
        />
        <p style={{ margin: "12px" }}>
          To save your segment, you need to add the schemas to build the query.
        </p>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <div className="circle" style={{ backgroundColor: "green" }}></div>
          -User Traits
          <div className="circle" style={{ backgroundColor: "Red" }}></div>
          -Group Traits
        </div>
        <CustomizeDropDown sentDataToParent={handleDataFromChild} />
      </Modal>
    </div>
  );
}

export default App;
