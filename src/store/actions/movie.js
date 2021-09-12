import axios from "axios";
import createAction from ".";
import { request } from "../../api/request";
import actionTypes from "./type";

export const fetchMovies = async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    });

    dispatch(createAction(actionTypes.SET_MOVIES, res.data.content));
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesByPage = (page, limit) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${limit}`,
      });

      dispatch(
        createAction(actionTypes.SET_MOVIES_BY_PAGE, res.data.content.items)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovie = (id) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim",
        params: {
          MaPhim: id,
        },
      });

      dispatch(createAction(actionTypes.SET_MOVIE_DETAIL, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
