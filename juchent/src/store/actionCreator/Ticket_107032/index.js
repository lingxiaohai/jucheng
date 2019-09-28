import {
    CHANGE_TIT_INFO,
    CHANGE_SCHEDULAR_ID,
    CHANGE_PIC_INFO
} from '../../actionType/Ticket_107032';

import axios from 'axios';

export  function changeTitInfo (payload){
    return {
        type : CHANGE_TIT_INFO,
        payload
    }
}
export function changeSchedularId(payload){
    return {
        type : CHANGE_SCHEDULAR_ID,
        payload
    }
}
export function changePicInfo(payload){
    return {
        type : CHANGE_PIC_INFO,
        payload
    }
}




export default {
    getSchedularId(schedularId){
        // console.log(schedularId,99999999999)
        return async(dispatch)=>{
            const {data} = await axios.get(`/ShowList/Schedule/Schedule/getScheduleInfo?schedular_id=${schedularId}&version=6.0.6&referer=1`)  
            console.log(data,123456);
            dispatch(changeSchedularId(data.data.static_data.schedular_id))
            dispatch(changePicInfo(data.data))
        }
    }

}