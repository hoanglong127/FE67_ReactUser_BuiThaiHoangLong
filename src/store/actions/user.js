import createAction from ".";
import { request } from "../../api/request";
import actionTypes from "./type";

export const signIn = (userLogin, callback) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "POST",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
      });
      dispatch(createAction(actionTypes.SET_USER, res.data.content));
      localStorage.setItem("t", res.data.content.accessToken);
      callback();
    } catch (err) {
      console.log(err.response);
      alert("Error: " + err.response.data);
    }
  };
};

export const fetchUser = async (dispatch) => {
  try {
    const res = await request({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    });
    dispatch(createAction(actionTypes.SET_USER, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
