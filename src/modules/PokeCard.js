import React, { useState } from "react";
import PokeDetailsCard from "./PokeDetailsCard";
import { Grid, Typography } from "@material-ui/core";

const PokeCard = ({ pokemon }) => {
  const [isDetailsNeed, setIsDetailsNeed] = useState(false);
  const close = () => {
    setIsDetailsNeed(false);
  };
  return (
    <Grid container>
      {isDetailsNeed ? (
        <PokeDetailsCard details={pokemon} close={close} />
      ) : (
        false
      )}
      <Grid item xs={12} onClick={() => setIsDetailsNeed(true)}>
        <Grid container>
          <Grid item xs={12}>
            <Typography>{`#${pokemon.order} ${pokemon.name}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={pokemon.sprites.front_default} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PokeCard;
