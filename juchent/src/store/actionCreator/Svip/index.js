import {GENGAI_SVIPLIST} from "../../actionType/Svip";
import axios from "axios"

export const changeSvipList = function (payload) {

    return {
        type: GENGAI_SVIPLIST,
        payload
    }
}


export default {

    getSvipList() {
        return async (dispatch) => {
            const {data} = await axios.get("https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.5&referer=2")
            console.log(data)
            dispatch(changeSvipList(data.data));
        }
    }
}