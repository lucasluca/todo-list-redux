import { combineReducers } from 'redux'
import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    lucas: () => ({
        teste: ''
    })
})

export default rootReducer