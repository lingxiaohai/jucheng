import initState from '../../state/scores'
import {CHANGE_MOCK_LIST} from '../../actionType/scores'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_MOCK_LIST){
        state.mockList = payload
        console.log(7412,state)
    }
    // console.log(7654,state)
    
    return state
}