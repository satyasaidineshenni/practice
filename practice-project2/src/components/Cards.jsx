import React, { useState } from "react";
// import "../App.css"
function Cards(props) {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="">
      <div className="Card">
        <img
          src="https://wallpaperaccess.com/full/2615131.jpg"
          style={{ height: "300px", width: "220px" }}
        />
        <div>
          {props.name} {props.number}
        </div>
        <div className="buttonClass">
          <button className="preview" onClick={showModal}>
          👁️Preview
          </button>
        </div>
      </div>
      {modal && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="Modal1">This is Preview of the content</div>
        </>
      )}
    </div>
  );
}

export default Cards;
