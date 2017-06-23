import { combineReducers } from 'redux'
import criteria from './criteria'
import pwds from './pwds'

const pwdsApp = combineReducers({
    pwds,
    criteria
})

export default pwdsApp
