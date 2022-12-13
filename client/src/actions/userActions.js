import { AUTH, ALERT, LOGOUT, LOGOUT_FAILED, SIGNIN_FAIL } from "../constants/actionsConstants.js";
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
      title: "Kayıt İşlemi Başarıyla Tamamlanmıştır!",
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

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    Toast.fire({
      icon: "success",
      title: "Başarıyla Giriş Yaptınız!",
    });

  dispatch({type: AUTH, payload: data})
  
  }catch(error) {
    Toast.fire({
      icon: "error",
      title: error.response.data.message,
    });
    dispatch({
      type: SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const Logout = (id) => async (dispatch) => {
  try{
    const {message} = await api.logOut(id)
    Toast.fire({
      icon: "success",
      title: "Başarıyla Çıkış Yapıldı!",
    });
    
    dispatch({type: LOGOUT, payload: message})
  }catch(error){
    Toast.fire({
      icon: "error",
      title: error.response.data.message,
    });
    dispatch({type: LOGOUT_FAILED,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      })
  }
}