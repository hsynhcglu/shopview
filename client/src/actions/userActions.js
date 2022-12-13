import { AUTH, ALERT } from "../constants/actionsConstants.js";
import * as api from "../axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    Toast.fire({
      icon: "success",
      title: "Kayıt İşlemi Başarıyla Tamamlanmıştır",
    });

    dispatch({ type: AUTH, payload: data });
    
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: error.response.data.message,
    });
    dispatch({
      type: ALERT,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
