import React from "react";

// const logos = [
//   {
//     image: "/public/icons/icons8-menu-24.png",
//   },

//   {
//     image: "/public/icons/icons8-add-property-50.png",
//   },
// ];

function searchBar() {
  return (
    <div className="searchBar">
      <div className="menu">
        <img Src="\icons\icons8-menu-24.png" alt="icon" className="icons" />
      </div>

      <div className="serach-input">
        <input
          type="search"
          name="search"
          placeholder="All Notes"
          className="input-field"
        />
      </div>

      <div className="menu">
        <img
          Src="\icons\icons8-add-property-50.png"
          alt="icon"
          className="icons"
        />
      </div>

      {/* <div className="menu">
        {logos.map((item, itemIdx) => (
          <div key={itemIdx} className="icons">
            <img src={item.image} alt="image" className="images" />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default searchBar;
