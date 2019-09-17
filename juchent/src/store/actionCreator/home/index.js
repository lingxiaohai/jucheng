import axios from "axios"
import {GENGAI_SWIPERLIST} from "../../actionType/home/Swiper";

export const changeSwiperList=function (payload) {
        return {
            type:GENGAI_SWIPERLIST,
            payload
        }
};
export default {
     getSwiper(){

     }
}