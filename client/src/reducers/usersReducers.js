import { AUTH, ALERT } from '../constants/actionsConstants.js'

const userReducer = (state = {userData: null}, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {...state, userData: action.payload}
        case ALERT:
            return {error: action.payload}

        default:
            return state
    }
}
export default userReducer