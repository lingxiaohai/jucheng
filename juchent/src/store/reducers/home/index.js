import { GENGAI_SWIPERLIST } from "../../actionType/home/Swiper";
import pagList from "../../state/home";
// export default function (state=pagList,{type,payload}) {
//     state=JSON.parse(JSON.stringify(state));
//     if(type===GENGAI_SWIPERLIST){
//          state=Object.assign({},payload);
//     }
//     return state
// }

export default (state = pagList, action) => {
    switch (action.type) {
        case GENGAI_SWIPERLIST:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};


