import React, { useEffect, useState } from "react";
import { pokeFlow } from "../logic/pokeFlow";
const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);
  const callRequests = async (type, limit, offset) => {
    let caller = null;
    switch (type) {
      case "list":
        caller = await pokeFlow.pokeListRequestOperation(limit, offset);
        Promise.all(caller).then((pokeDetails) => setPokeList(pokeDetails));
        caller = null;
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    callRequests("list");
  }, []);
  return (
    <div>
      {console.log(pokeList)}
      {pokeList.length
        ? pokeList.map((poke) => (
            <div key={poke.id}>
              <div>{poke.name}</div>
              <div>#{poke.order}</div>
              <div>
                <img src={poke.sprites.front_default}></img>
              </div>
            </div>
          ))
        : false}
    </div>
  );
};
export default PokeList;
