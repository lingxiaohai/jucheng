import {GENGAI_BLOCKLIST} from "../../actionType/homeblock";
import initState from "../../state/homeblock"
export default function changeBlock(state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===GENGAI_BLOCKLIST){
        state=Object.assign({},payload)
    }
    return state
}