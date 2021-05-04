import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Card,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  List as MList,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { dataOperation } from "../logic/dataOperation";
import update from "immutability-helper";
const List = () => {
  const [limited, setLimited] = useState({
    limit: 50,
    limitPerPage: 5,
    startWith: 0,
    allData: [],
    limitedData: [],
    current: {},
    dialog: false,
  });
  useEffect(async () => {
    const data = await dataOperation.pokemonsFetch(limited.limit);
    setLimited(update(limited, { allData: { $set: data.results } }));
  }, []);
  const paginationWatcher = (e) => {
    setLimited(
      update(limited, {
        startWith: {
          $set:
            e.currentTarget.value === 0
              ? 0
              : e.currentTarget.value * limited.limitPerPage,
        },
      })
    );
    console.log("value = " + e.currentTarget.value);
    console.log("startWith = " + limited.startWith);
    console.log("allData = " + limited.allData);
    console.log(
      limited.allData
        .filter(
          (item, index, array) =>
            index >= limited.startWith &&
            index < limited.startWith + limited.limitPerPage
        )
        .map((item) => item.name)
    );
  };
  const cardWatcher = async (e) => {
    const data = await dataOperation.pokemonFetch(e.currentTarget.dataset.url);
    setLimited(
      update(limited, { current: { $set: data }, dialog: { $set: true } })
    );
    console.log(limited.current);
  };
  const dialogClose = () => {
    setLimited(update(limited, { dialog: { $set: false } }));
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Limit: {limited.limit}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {limited.limit >= limited.limitPerPage
              ? [
                  ...new Array(
                    Math.round(limited.limit / limited.limitPerPage)
                  ),
                ].map((item, index) => (
                  <Grid item xs="auto" key={index.toString()}>
                    <Button
                      variant="outlined"
                      value={index}
                      onClick={paginationWatcher}
                    >
                      {index + 1}
                    </Button>
                  </Grid>
                ))
              : false}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} align="center">
            {limited.allData !== 0
              ? limited.allData
                  .filter(
                    (item, index) =>
                      index >= limited.startWith &&
                      index < limited.startWith + limited.limitPerPage
                  )
                  .map((item) => (
                    <Grid item xs={1} key={item.name}>
                      <Card onClick={cardWatcher} data-url={item.url}>
                        <Typography variant="h5" component="h5">
                          {item.name}
                        </Typography>
                      </Card>
                    </Grid>
                  ))
              : false}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {limited.current ? limited.current.base_experience : false}
        </Grid>
        <Dialog open={limited.dialog}>
          <DialogTitle>{limited.current.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h6">
                    Sprites:
                  </Typography>
                </Grid>
                {limited.dialog
                  ? Object.entries(limited.current.sprites)
                      .filter(([index, value]) => typeof value === "string")
                      .map(([index, value]) => (
                        <Grid item xs={2}>
                          <img src={value} />
                        </Grid>
                      ))
                  : false}
              </Grid>
            </DialogContentText>
            <DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <MList>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h6" component="h6">
                          Height: {limited.current.height}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h6" component="h6">
                          Weight: {limited.current.weight}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h6" component="h6">
                          Base experience: {limited.current.base_experience}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </MList>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={dialogClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
};
export default List;
