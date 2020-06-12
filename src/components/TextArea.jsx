import React, { useState } from "react";

function TextArea(props) {
  let [inp, setInp] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setInp((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function clicked(event) {
    props.click(inp);
    setInp({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={inp.title}
          type="text"
          autoComplete="off"
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={inp.content}
          autoComplete="off"
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={clicked}>
          <p>+</p>
        </button>
      </form>
    </div>
  );
}

export default TextArea;
