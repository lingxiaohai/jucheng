import {CHANGE_SHOW_CATEGROYTYPELIST} from '../../actionType/Show/index'
import {CHANGE_SHOW_CATEGROYLIST} from '../../actionType/Show/index'
import {CHANGE_SHOW_CATEGROYLISTMORE} from '../../actionType/Show/index'
import {CHANGE_SHOW_CATEGROYPAGE} from '../../actionType/Show/index'
export const changeShowcategoryTypeList= function (payload) {
    return {
        type:CHANGE_SHOW_CATEGROYTYPELIST,
        payload
    }
};
export const changeShowcategoryList= function (payload) {
    return {
        type:CHANGE_SHOW_CATEGROYLIST,
        payload
    }
};
// export const changeShowcategoryListMore= function (payload) {
//     return {
//         type:CHANGE_SHOW_CATEGROYLISTMORE,
//         payload
//     }
// };
// export const changeShowcategoryListPage= function (payload) {
//     return {
//         type:CHANGE_SHOW_CATEGROYPAGE,
//         payload
//     }
// };