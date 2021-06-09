import React, { useEffect, useState } from "react";
import { pokeFlow } from "../logic/pokeFlow";
import PokeCard from "./PokeCard";
import { Grid, makeStyles } from "@material-ui/core";
import Control from "./Control";
const useStyle = makeStyles({
  wrapper: {
    textAlign: "center",
  },
});
const PokeList = () => {
  const classes = useStyle();
  const [pokeList, setPokeList] = useState([]);
  const callRequests = async (limit = 10, offset = 0) => {
    let caller = await pokeFlow.pokeListRequestOperation(limit, offset);
    Promise.all(caller).then((pokeDetails) => setPokeList(pokeDetails));
  };
  useEffect(() => {
    callRequests();
  }, []);
  return (
    <Grid container>
      <Control limit={10} offset={0} changeRequest={callRequests} />
      <Grid item xs={12}>
        <Grid container className={classes.wrapper}>
          {pokeList.length
            ? pokeList.map((poke) => (
                <Grid item xs={3} key={poke.id}>
                  <PokeCard pokemon={poke} />
                </Grid>
              ))
            : false}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PokeList;
