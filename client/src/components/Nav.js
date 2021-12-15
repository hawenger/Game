import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="link agame" id="new" to="/newgame">
          New Game
        </Link>
        <Link className="link agame" id="new" to="/joingame">
          Join Game
        </Link>
        <Link className="link ahome" id="new" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}
