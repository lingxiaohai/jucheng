<<<<<<< HEAD
import axios from 'axios'
import {GENGAI_SWIPERLIST} from "../../actionType/home/Swiper";

export const changeSwiperList=function (payload) {
        return {
            type:GENGAI_SWIPERLIST,
            payload
        }
};
=======
import axios from "axios"
import { GENGAI_SWIPERLIST } from "../../actionType/home/Swiper";

export const changeSwiperList = function (payload) {
   return {
      type: GENGAI_SWIPERLIST,
      payload
   }
}
>>>>>>> 252b4c4bfbca8081146d3c0bfa88eae93fa8e682
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