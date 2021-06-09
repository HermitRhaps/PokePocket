import React, { useEffect, useState } from "react";
import { pokeFlow } from "../logic/pokeFlow";
import PokeCard from "./PokeCard";
import Control from "./Control";
const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const callRequests = async (limit = 10, offset = 0) => {
    let caller = await pokeFlow.pokeListRequestOperation(limit, offset);
    Promise.all(caller).then((pokeDetails) => setPokeList(pokeDetails));
  };
  useEffect(() => {
    callRequests();
  }, []);
  return (
    <div>
      <Control limit={10} offset={0} changeRequest={callRequests} />
      {pokeList.length
        ? pokeList.map((poke) => <PokeCard key={poke.id} pokemon={poke} />)
        : false}
    </div>
  );
};
export default PokeList;
