import React, { useRef } from "react";
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  wrapper: {
    padding: "1rem",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  input: {
    height: ".75rem",
  },
  button: {
    height: ".75rem",
  },
});
const Control = ({ limit, offset, changeRequest }) => {
  const classes = useStyles();
  const limitRef = useRef();
  const offsetRef = useRef();
  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={2}>
        <TextField
          inputRef={limitRef}
          type="number"
          placeholder="Enter limit..."
          defaultValue={0 || limit}
          variant="outlined"
          label="limit"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          inputRef={offsetRef}
          type="number"
          placeholder="Enter offset..."
          defaultValue={0 || offset}
          variant="outlined"
          label="offset"
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={() =>
            changeRequest(
              Number(limitRef.current.value),
              Number(offsetRef.current.value)
            )
          }
          fullWidth
          variant="outlined"
        >
          Show
        </Button>
      </Grid>
    </Grid>
  );
};
export default Control;
