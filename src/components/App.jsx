import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import TextArea from "./TextArea";

function App() {
  let mydata = JSON.parse(localStorage.getItem("notes"));
  let [lists, setLists] = useState(mydata === null ? [] : mydata);

  function handleClick(inp) {
    setLists((prevItems) => {
      let localList = [...prevItems, inp];
      localStorage.setItem("notes", JSON.stringify(localList));
      return [...prevItems, inp];
    });
  }

  function handleDelete(id) {
    setLists((prevItems) => {
      let local = prevItems.filter((item, index) => {
        return index !== id;
      });
      localStorage.setItem("notes", JSON.stringify(local));
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <TextArea click={handleClick} />
      {lists.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
