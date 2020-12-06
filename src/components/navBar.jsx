import React from "react";

function navBar() {
  return (
    <div className="navBar">
      <div className="toggle-sidebar">
        <img
          Src="\icons\icons8-switch-off-40.png"
          alt="icon"
          className="icons"
        />
      </div>
      <div className="right-icons">
        <div>
          <img
            Src="\icons\icons8-time-machine-30.png"
            alt="icon"
            className="icons mleft"
          />
        </div>
        <div>
          <img
            Src="\icons\icons8-share-rounded-24.png"
            alt="icon"
            className="icons mleft"
          />
        </div>
        <div>
          <img Src="\icons\icons8-trash-24.png" alt="icon" className="icons mleft" />
        </div>
        <div>
          <img Src="\icons\icons8-info-50.png" alt="icon" className="icons mleft" />
        </div>
      </div>
    </div>
  );
}

export default navBar;
