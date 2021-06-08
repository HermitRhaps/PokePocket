import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import List from "./List";
import PokeList from "./PokeList";
const App = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" align="center">
            <Grid item xs={6}>
              <Typography variant="h4" component="h4">
                PokePocket
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PokeList />
        </Grid>
      </Grid>
    </Box>
  );
};
export default App;
