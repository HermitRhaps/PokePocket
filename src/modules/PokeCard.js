import React, { useState } from "react";
import PokeDetailsCard from "./PokeDetailsCard";
const PokeCard = ({ pokemon }) => {
  const [isDetailsNeed, setIsDetailsNeed] = useState(false);
  return (
    <div>
      {isDetailsNeed ? (
        <PokeDetailsCard details={pokemon} close={setIsDetailsNeed} />
      ) : (
        false
      )}
      <div onClick={() => setIsDetailsNeed(true)}>
        <div>{pokemon.name}</div>
        <div>#{pokemon.order}</div>
        <div>
          <img src={pokemon.sprites.front_default}></img>
        </div>
      </div>
    </div>
  );
};
export default PokeCard;
