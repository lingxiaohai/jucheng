import {GENGAI_SWIPERLIST} from "../../actionType/home/Swiper";
import pagList from "../../state/home";
export default function (state=pagList,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===GENGAI_SWIPERLIST){
        state=payload
    }
    return state
}