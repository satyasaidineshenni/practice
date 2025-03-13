import React from "react";

function Cards(props) {
  return (
    // <div className="">
    <div className="Card">
        <img src="https://wallpaperaccess.com/full/2615131.jpg" />
      <div>
        {props.name} {props.number}
      </div>
      
    </div>
    // </div>
  );
}

export default Cards;
