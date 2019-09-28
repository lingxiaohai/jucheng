import {CHANGE_INFO} from '../../actionType/Ticket_107032/index'

export const changeInfo =  function (payload){
    console.log(payload,85345672)
    return {
        type : CHANGE_INFO,
        payload
    }
}