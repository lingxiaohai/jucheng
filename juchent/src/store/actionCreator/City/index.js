import {GENGAI_DATA} from "../../actionType/City";
import {GENGAI_CITY} from "../../actionType/City";
import axios from "axios"

export const changeCity = function (payload) {

    return {
        type: GENGAI_CITY,
        payload
    }

}
export const changeData = function (payload) {

    return {
        type: GENGAI_DATA,
        payload
    }
}

export default {

    getCity() {
        return async (dispatch) => {
            const {data} = await axios.get("https://api.juooo.com/city/city/getHotCityList?version=6.0.5&referer=2");
            dispatch(changeCity(data.data.hot_city_List))

        }
    },
    getHotCity(){
        return async (dispatch)=>{
            const {data} = await axios.get("https://api.juooo.com/city/city/getSortedCityList?version=6.0.5&referer=2");
             dispatch(changeData(data.data))

        }
    }
}