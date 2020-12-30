import React from "react";
function NavBar() {
  return (
    <div>
      <nav>
        <h1 className="NavBar"> In the new year </h1>
        <p className="GoWhere"> Where I would like to go... </p>
        <ul>
          <li className="Japan">Japan</li>
          <li className="Canada">Canada</li>
          <li className="Thai">Thailand</li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
