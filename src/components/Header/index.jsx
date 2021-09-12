import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./style";

const Header = (props) => {
  const { title, navLink, navLinkActive } = props.classes;
  const userInfo = useSelector((state) => state.user);

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" className={title}>
            Cinema
          </Typography>
          <Button color="inherit">
            <NavLink
              exact
              to="/"
              className={navLink}
              activeClassName={navLinkActive}
            >
              Home
            </NavLink>
          </Button>
          {userInfo ? (
            <Button color="inherit">
              <NavLink
                to="/showuser"
                className={navLink}
                activeClassName={navLinkActive}
              >
                Hi, {userInfo.hoTen}
              </NavLink>
            </Button>
          ) : (
            <Fragment>
              <Button color="inherit">
                <NavLink
                  to="/signin"
                  className={navLink}
                  activeClassName={navLinkActive}
                >
                  Signin
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  to="/signup"
                  className={navLink}
                  activeClassName={navLinkActive}
                >
                  Signup
                </NavLink>
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withStyles(styles)(Header);
