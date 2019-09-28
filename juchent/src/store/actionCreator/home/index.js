
import axios from "axios"
import { GENGAI_SWIPERLIST } from "../../actionType/home/Swiper";

export const changeSwiperList = function (payload) {
   return {
      type: GENGAI_SWIPERLIST,
      payload
   }
}

export default {
   getSwiper(id=0) {

      return async (dispatch) => {
         const { data } = await axios.get(`/home/getClassifyHome?city_id=${id}&abbreviation=&version=6.0.5&referer=2`);

         if (data.code === '200') {
            dispatch(changeSwiperList(data.data))
         } else {
            console.log(data.msg)
         }
      }
   }
}