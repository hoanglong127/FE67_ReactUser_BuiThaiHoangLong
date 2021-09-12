import React from "react";
import { Button, Container, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/user";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("This is is required"),
  matKhau: yup.string().required("This is is required"),
});

const Signin = () => {
  const {
    values,
    errors,
    touched,
    setTouched,
    isValid,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      taiKhoan: true,
      matKhau: true,
    });

    if (!isValid) return;

    dispatch(
      signIn(values, () => {
        history.push("/");
      })
    );
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 30 }}>
          <TextField
            value={values.taiKhoan}
            onChange={handleChange}
            onBlur={handleBlur}
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
            value={values.matKhau}
            onChange={handleChange}
            onBlur={handleBlur}
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

        <div style={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Signin;
