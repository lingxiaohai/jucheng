import {CHANGE_ADDJUYUANLIST} from "../../actionType/juyuan";
import {CHANGE_WUTAILIST}from "../../actionType/juyuan";
import {CHANEG_WUTAIDAOHAN}from "../../actionType/juyuan"
import pagList from "../../state/juyuan/index";
export default function (state=pagList,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_ADDJUYUANLIST){
         state=payload;
    }
    if(type===CHANGE_WUTAILIST){
        state.wutai_list=payload;
        state.wutailist=payload.showList;
    }
    if(type===CHANEG_WUTAIDAOHAN){
        state.wutaidaohan=payload
    }
    return state
}

