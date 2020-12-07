import React from "react";

function SideBar({ content, title }) {
  return (
    <div className="sideBar">
      {title} <br /> {content}
    </div>
  );
}

export default SideBar;
