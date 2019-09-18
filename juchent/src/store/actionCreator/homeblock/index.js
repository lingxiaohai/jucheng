import {GENGAI_BLOCKLIST} from "../../actionType/homeblock";
import axios from "axios"
export const changeblock = function (payload) {
    return {
        type: GENGAI_BLOCKLIST,
        payload
    }
}
export default {
    gethomeblock(){

        return async (dispatch)=>{
            const {data} = await axios.get("home/getHotsRecommendList?city_id=3&version=6.0.5&referer=2");
            dispatch(changeblock(data.data));
        }
    }
}