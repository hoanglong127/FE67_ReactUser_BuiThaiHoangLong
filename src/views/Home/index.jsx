import { Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../../components/Movie";
import { fetchMovies, fetchMoviesByPage } from "../../store/actions/movie";
import Pagination from "material-ui-flat-pagination";

const limit = 12;

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList);
  const moviesByPage = useSelector((state) => state.movie.moviesByPage);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchMovies);
    dispatch(fetchMoviesByPage(1, limit));
  }, []);

  const handleClick = (offset) => {
    setOffset(offset);

    const page = offset / limit + 1;
    dispatch(fetchMoviesByPage(page, limit));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginTop: 20 }}
        gutterBottom
      >
        Danh sách phim
      </Typography>

      <Container maxWidth="lg">
        <Grid spacing={3} container>
          {moviesByPage.map((movie) => (
            <Grid key={movie.maPhim} sm={12} md={3} item>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <Pagination
          size="large"
          limit={limit}
          offset={offset}
          total={movieList.length}
          onClick={(e, offset) => handleClick(offset)}
        />
      </div>
    </Fragment>
  );
};

export default Home;
