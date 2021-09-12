import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../store/actions/movie";

const Detail = (props) => {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movieDetail);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);

  const { tenPhim, hinhAnh, moTa, danhGia } = movie || {};
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <Grid spacing={4} container>
        <Grid md={5} style={{ textAlign: "center" }} item>
          <img src={hinhAnh} alt={tenPhim} style={{ width: "100%" }} />
        </Grid>
        <Grid md={7} item>
          <Typography variant="h3" gutterBottom>
            {tenPhim}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Rating: </b>
            {danhGia}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Description: </b>
            {moTa}
          </Typography>
          <Button variant="contained" color="primary">
            Book Tickets
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
