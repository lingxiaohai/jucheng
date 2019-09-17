import categoryList from '../../state/Show/index'
export default function (state=categoryList,action) {
    state = JSON.parse(JSON.stringify(state));
    if (action.type === "CHANGE_SHOW_CATEGROYTYPELIST") {
        state.show_category_list = action.payload
    }

    if (action.type === "CHANGE_SHOW_CATEGROYLIST") {
        state.category_list = action.payload;
    }


    // if (action.type ==="CHANGE_SHOW_CATEGROYPAGE" ) {
    //     state.category_list_page = action.payload;
    // }
    // //点击加载更多 页数增加 数据合并
    // if (action.type === "CHANGE_SHOW_CATEGROYLISTMORE") {
    //     state.category_list = [...state.category_list,...action.payload];
    //     state.category_list_page++;
    // }

    return state
}