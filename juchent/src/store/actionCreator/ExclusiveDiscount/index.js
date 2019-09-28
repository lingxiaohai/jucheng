import axios from "axios";
import {EXCLUSIVE_DISCOUNT} from "../../actionType/ExclusiveDiscount";

export const ExclusiveDiscount = function (payload) {
    return {
        type: EXCLUSIVE_DISCOUNT,
        payload
    }
}

export default {
    getExclusive(){
        return async (dispatch) =>{
            const {data} = await axios.get(`https://api.juooo.com/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.6&referer=2`)
            if (data.code === '200') {
                console.log(data)
                dispatch(ExclusiveDiscount(data.data.list))
            } else {
                console.log(data.msg)
            }
        }
    }
}