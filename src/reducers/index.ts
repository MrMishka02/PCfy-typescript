import { combineReducers } from 'redux'
import inputReducer from './inputReducer'
import selectReducer from './selectReducer'

const allReducer = combineReducers({
  selectValue: selectReducer,
  inputValue: inputReducer,
})

export default allReducer
