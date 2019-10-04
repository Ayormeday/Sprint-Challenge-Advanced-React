import React from "react";

const Player = ({ name, country, searches }) => {
  return (
    <div className="player">
      <div className="player-info">
        <h2 className="name">{name}</h2>
        <h4 className="country">Country: {country}</h4>
        <p>Searches {searches}</p>
      </div>
    </div>
  );
};

export default Player;
