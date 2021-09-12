import React from "react";
import { Button, Container, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("This is required"),
  matKhau: yup.string().required("This is required"),
  email: yup.string().required("This is required").email("Email is invalid"),
  soDt: yup
    .string()
    .required("This is required")
    .matches(/^[0-9]+$/g, { message: "Phone must be number" }),
  hoTen: yup.string().required("This is required"),
});

const Signup = () => {
  const history = useHistory();
  const {
    values,
    errors,
    touched,
    setTouched,
    handleChange,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      taiKhoan: true,
      matKhau: true,
      email: true,
      soDt: true,
      hoTen: true,
    });

    if (!isValid) return;

    try {
      await axios({
        method: "POST",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",
        data: values,
      });
      alert("Đăng ký thành công");
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 30 }}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hoTen}
            name="hoTen"
            fullWidth
            label="Full Name"
            variant="outlined"
          />
          {touched.hoTen && (
            <span style={{ color: "red" }}>{errors.hoTen}</span>
          )}
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.taiKhoan}
            name="taiKhoan"
            fullWidth
            label="Username"
            variant="outlined"
          />
          {touched.taiKhoan && (
            <span style={{ color: "red" }}>{errors.taiKhoan}</span>
          )}
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.matKhau}
            type="password"
            name="matKhau"
            fullWidth
            label="Password"
            variant="outlined"
          />
          {touched.matKhau && (
            <span style={{ color: "red" }}>{errors.matKhau}</span>
          )}
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            fullWidth
            label="Email"
            variant="outlined"
          />
          {touched.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.soDt}
            name="soDt"
            fullWidth
            label="Phone"
            variant="outlined"
          />
          {touched.soDt && <span style={{ color: "red" }}>{errors.soDt}</span>}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Signup;
