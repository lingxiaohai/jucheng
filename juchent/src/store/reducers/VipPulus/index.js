import yxgpList from '../../state/VipPulus/index'
export default function (state=yxgpList,action) {
    state = JSON.parse(JSON.stringify(state));
    if (action.type ==="CHANGE_YXGPLIST"){
        state.yxgpList = action.payload;

        let num1=state.yxgpList.slice(0,3);
        let num2=state.yxgpList.slice(3,6);
        let num3=state.yxgpList.slice(6,9);
        state.yxgpList=[num1,num2,num3];
        console.log(state.yxgpList,88888888888);
    }
    return state
}