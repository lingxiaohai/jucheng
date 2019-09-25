import {GENGAI_CATE} from "../../actionType/Category";
import axios from "axios"

export const changeCateList = function (payload) {
    return {
        type: GENGAI_CATE,
        payload
    }

}

export default {
    getCateList() {
        return async (dispatch) => {
            const {data} = await axios.get("home/getFloorShow?city_id=1&version=6.0.5&referer=2");

            if (data.code === "200") {
                dispatch(changeCateList(data))
            } else {
                console.log(data.msg)
            }

        }
    }
}