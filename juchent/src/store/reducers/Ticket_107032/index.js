import initState from '../../state/Ticket_107032';
import {CHANGE_TIT_INFO} from '../../actionType/Ticket_107032'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_TIT_INFO){
        state.titInfo = payload;
    }

    return state;
}