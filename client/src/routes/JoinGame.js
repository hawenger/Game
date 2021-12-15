import React from "react";
import { Link } from "react-router-dom";
import { getActiveRooms } from "../data";

export default function JoinGame() {
  let activeRooms = getActiveRooms();
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          {activeRooms.map((room) => (
            <Link to={`/joingame/${room.roomID}`} key={room.roomID}>
              JOIN {room.roomID}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
