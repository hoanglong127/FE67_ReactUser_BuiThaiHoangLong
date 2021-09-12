import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const ShowUser = () => {
  const userInfo = useSelector((state) => state.user);

  return (
    <Container maxWidth="lg" style={{ marginTop: 50, textAlign: "center" }}>
      <AccountCircleIcon style={{ fontSize: 100 }} />
      <Typography variant="subtitle1" gutterBottom>
        Username: {userInfo.taiKhoan}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Full Name: {userInfo.hoTen}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Email: {userInfo.email}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Phone Number: {userInfo.soDT || "Chưa cập nhập"}
      </Typography>
    </Container>
  );
};

export default ShowUser;
