import React from "react";

function inputField() {
  return (
    <div className="inputField">
      <div className="note-editor">
        <textarea className="text-input">Hello, I am a developer...</textarea>
      </div>

      <div>
        <span>Add a tag..</span>
      </div>
    </div>
  );
}

export default inputField;
