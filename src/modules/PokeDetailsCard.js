import React from "react";
import {
  Grid,
  Dialog,
  Chip,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
const useStyle = makeStyles({
  wrapper: {
    textAlign: "center",
  },
});
const PokeDetailsCard = ({ details, close }) => {
  const classes = useStyle();
  return (
    <Dialog open={true}>
      <DialogTitle>
        <Grid container>
          <Grid item xs={5}>
            {details.name}
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              {details.types.map((detail, index) => (
                <Grid item xs={2} key={detail.type.name + index}>
                  <Chip label={detail.type.name} variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.wrapper}>
              {Object.entries(details.sprites).map(([key, value]) => {
                if (value && typeof value === "string") {
                  return (
                    <Grid item xs={3} key={value + key}>
                      <img src={value} alt={key} />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {details.stats.map((detail, index) => (
                <Grid item xs={12} key={detail.stat.name + index}>
                  <Typography variant="h7" component="h7">
                    {detail.stat.name}:{detail.base_stat}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => close()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PokeDetailsCard;
