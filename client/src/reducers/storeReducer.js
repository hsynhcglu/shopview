import { CREATE_STORE } from '../constants/actionsConstants.js'

export default (store = [], action) => {
    switch(action.type) {
        case CREATE_STORE:
            return [...store, action.payload]

        default:
            return store
    }
}