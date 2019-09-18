import axios from "axios"
import { GENGAI_SWIPERLIST } from "../../actionType/home/Swiper";

export const changeSwiperList = function (payload) {
   return {
      type: GENGAI_SWIPERLIST,
      payload
   }
}
export default {
   getSwiper() {
      return async (dispatch) => {
         const { data } = await axios.get("/home/getClassifyHome?city_id=0");

         if (data.code === '200') {
            dispatch(changeSwiperList(data.data))
         } else {
            console.log(data.msg)
         }
      }
   }
}