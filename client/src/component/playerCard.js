import React from "react";


const Player = ({ name, country, searches }) => {
  return (
      <div className="player">
        <div className="player-info">
          <h3 className="name">{name}</h3>
          <p className="country">Country: {country}</p>
          <p>Searches {searches}</p>
        </div>
      </div>
    );
  };

  export default Player;

