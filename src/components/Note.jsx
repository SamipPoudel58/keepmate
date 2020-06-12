import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={() => props.delete(props.id)}>–</button>
    </div>
  );
}

export default Note;
