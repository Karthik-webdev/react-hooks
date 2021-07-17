import React from "react";

import Cards from "./Cards";

// import "./CardList.css";

const CardList = props => (
  <div className="card-list">
    {props.monsters.map((monster, i) => (
      <Cards key={i} monster={monster} />
    ))}
  </div>
);

export default CardList;
