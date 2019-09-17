import initState from "../../state/Svip"
import {GENGAI_SVIPLIST} from "../../actionType/Svip";
export default function (state=initState,{type,payload}) {
     state=JSON.parse(JSON.stringify(state));
     if(type===GENGAI_SVIPLIST){
         state=Object.assign({},payload)
     }
     return state
}