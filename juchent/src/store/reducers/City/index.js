import {GENGAI_CITY} from "../../actionType/City";
import {GENGAI_DATA} from "../../actionType/City";
import initState from "../../state/City"

export default (state = initState, {type,payload}) => {
    state = JSON.parse(JSON.stringify(state))
    if(type===GENGAI_CITY){
        state.hot_city_List=payload
    }else if(type===GENGAI_DATA){
        state.data=payload
    }
    return state
}