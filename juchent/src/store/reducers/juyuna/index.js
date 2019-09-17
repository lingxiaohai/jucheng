import {CHANGE_ADDJUYUANLIST} from "../../actionType/juyuan";
import pagList from "../../state/juyuan/index";
export default function (state=pagList,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_ADDJUYUANLIST){
         state=Object.assign({},payload);
    }
    return state
}