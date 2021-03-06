import React from "react";

import { Link, NavLink } from "react-router-dom";

const Nav = props => {
  return (
    // React.Fragment === <>
    <>
      <ul className="row-center-between">
        <li>
          <Link className="linkTag" to="/">
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/Create">
            Create
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/Notes">
            Notes
          </Link>
        </li>
        {/* <li>
          <Link className="linkTag" to="/Update">
            Update
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/Delete">
            Delete
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/Creepers">
            Creeper s
          </Link> */}
      </ul>
    </>
  );
};

export default Nav;
