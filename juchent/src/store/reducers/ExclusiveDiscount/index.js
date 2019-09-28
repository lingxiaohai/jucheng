import initState from "../../state/ExclusiveDiscount"
export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type==="EXCLUSIVE_DISCOUNT"){
        state.Exclusive=payload;
    }
    return state;
}