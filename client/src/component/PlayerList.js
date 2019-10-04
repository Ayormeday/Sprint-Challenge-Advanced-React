import React from "react";
import Player from "./playerCard";

function PlayersList({ players }) {
  return (
    <section className="player-list">
      {players.map(player => (
        <Player
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
    </section>
  );
}

export default PlayersList;
