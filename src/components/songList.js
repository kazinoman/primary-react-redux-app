import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import SongDetails from "./SongDetails";

const SongList = (props) => {
  const { song, dispatch } = props;
  //   console.log(song);
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
      style={{ margin: "5rem" }}
    >
      <Grid item>
        {song.map((data) => (
          <Grid container key={data.duration} style={{ marginBottom: "1rem" }}>
            <Grid item>
              <Typography style={{ width: "10rem" }}>{data.name}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="default"
                style={{
                  marginLeft: "1rem",
                  color: "white",
                  background: "grey",
                }}
              >
                Detail's
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid item>
        <SongDetails />
      </Grid>
    </Grid>
  );
};

// NOTE:   Take my whole state or store object.

const mapStateToProps = (state) => {
  // RETURN an object.
  //   console.log(state.songs);

  return { song: state.songs };
};

export default connect(mapStateToProps)(SongList);
