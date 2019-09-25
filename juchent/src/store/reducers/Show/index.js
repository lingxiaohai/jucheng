import categoryList from '../../state/Show/index'
export default function (state=categoryList,action) {
    state = JSON.parse(JSON.stringify(state));
    if (action.type === "CHANGE_SHOW_CATEGROYTYPELIST") {
        state.show_category_list = action.payload
    }
    if (action.type === "CHANGE_SHOW_CITYLIID") {
        state.cityid = action.payload.cityid
    }
    if (action.type === "CHANGE_SHOW_CATEGROYLIST") {
        console.log(state.cityid,action.payload.cityid,11);
        state.cityid = action.payload.cityid;
            state.category_list =action.payload.data;
            state.id=action.payload.id;


    }
    if (action.type ==="CHANGE_SHOW_CATEGROYLISTMORE" ) {
        state.category_list = [...state.category_list,...action.payload.data];
        state.category_list_page++;

    }
    if (action.type === "CHANGE_SHOW_CITYLIST") {
        state.cityList = action.payload
    }

    return state
}