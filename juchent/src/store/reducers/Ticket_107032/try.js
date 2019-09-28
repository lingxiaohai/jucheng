import initState from '../../state/Ticket_107032/try';
import {CHANGE_INFO} from '../../actionType/Ticket_107032'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_INFO){
        state.initInfo = payload
        // console.log(7412,state)
    }
    console.log(7654,state)
    
    return state
}