import { AUTH, ALERT } from '../constants/actionsConstants.js'
import * as api from '../axios'

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)

        dispatch({type: AUTH, payload: data})

    }catch(error) {
        dispatch(
            {type: ALERT, 
                payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }
}