import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { maPhim, tenPhim, hinhAnh, danhGia } = props.movie;

  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{ height: 300 }} image={hinhAnh} title={tenPhim} />
        <CardContent>
          <Typography
            style={{ fontSize: 16 }}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {tenPhim}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {danhGia}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/detail/${maPhim}`}>Detail</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
