import { CREATE_STORE } from '../constants/actionsConstants.js'
import * as api from '../axios'
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

export const createStore = (store) = async (dispatch) => {
    try{
        const { data } = await api.createStore(store)

        Toast.fire({
            icon: "success",
            title: "Kayıt İşlemi Başarıyla Tamamlanmıştır!",
          });
          
        dispatch({type: CREATE, payload: data})
    }catch(error){
        console.log(error)
    }
}