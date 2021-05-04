import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import List from "./List";
const App = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" align="center">
            <Grid item xs={6}>
              <Typography variant="h5" component="h5">
                Pokemon List
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List />
        </Grid>
      </Grid>
    </Box>
  );
};
export default App;
