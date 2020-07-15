import React from "react";

function TodoItems(props) {
  return (
    <div className="container">
      <input
        className="myInput"
        type="checkbox"
        checked={props.myItem.completed}
        onChange={() => props.handleChange(props.myItem.id)}
      />
      <div
        className="myText"
        style={props.myItem.completed ? props.myStyles : null}
      >
        {props.myItem.text}
      </div>
      <p>
        <br></br>
        <br></br>
        <br></br>
        <hr width="70%"></hr>
      </p>
    </div>
  );
}

export default TodoItems;
