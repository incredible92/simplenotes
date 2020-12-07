import React from "react";

function inputField({ handleContent }) {
  return (
    <div className="inputField">
      <div className="note-editor">
        <input
          type="text"
          onInput={(e) => handleContent(e, "title")}
          placeholder="Title"
          name="title"
        />
        <textarea
          onInput={(e) => handleContent(e, "content")}
          className="text-input"
        >
          Hello Developer
        </textarea>
      </div>

      <div>
        <span>Add a tag..</span>
      </div>
    </div>
  );
}

export default inputField;
