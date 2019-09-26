import {CHANGE_TIT_INFO} from '../../actionType/Ticket_107032';

export   function changeTitInfo (payload){
    return {
        type : CHANGE_TIT_INFO,
        payload
    }
}