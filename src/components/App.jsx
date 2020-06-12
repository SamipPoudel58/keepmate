import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import TextArea from "./TextArea";

function App() {
  let [lists, setLists] = useState([]);
  function handleClick(inp) {
    setLists((prevItems) => {
      return [...prevItems, inp];
    });
  }

  function handleDelete(id) {
    setLists((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <TextArea click={handleClick} />
      <Note title="Title" content="Content" />
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
