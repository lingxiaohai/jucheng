import {CHANGE_YXGPLIST} from '../../actionType/VipPulus/index'

import axios from 'axios'


export const changeyxgpList= function (payload) {
    return {
        type:CHANGE_YXGPLIST,
        payload
    }
};
export default {
    getyxgpList(){
        return async(dispatch)=>{
            const {data} = await axios.get("/ShowList/vip/index/getPriorBuyList?page=1&limit=1000&version=6.0.6&referer=2");
            dispatch(changeyxgpList(data.data.list))
        }
    },
}