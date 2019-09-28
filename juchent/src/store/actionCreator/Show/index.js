import {CHANGE_SHOW_CATEGROYTYPELIST} from '../../actionType/Show/index'
import {CHANGE_SHOW_CATEGROYLIST} from '../../actionType/Show/index'
import {CHANGE_SHOW_CATEGROYLISTMORE} from '../../actionType/Show/index'
import {CHANGE_SHOW_CITYLIST} from '../../actionType/Show/index'
import {CHANGE_SHOW_CITYLIID} from '../../actionType/Show/index'

import axios from 'axios'

export const changeShowcategoryTypeList= function (payload) {
    return {
        type:CHANGE_SHOW_CATEGROYTYPELIST,
        payload
    }
};
export const changeShowcategoryTypeListMore= function (payload) {
    return {
        type:CHANGE_SHOW_CATEGROYLISTMORE,
        payload
    }
};
export const changeShowcategoryList= function (payload) {
    return {
        type:CHANGE_SHOW_CATEGROYLIST,
        payload
    }
};
export const changeShowCityList= function (payload) {
    return {
        type:CHANGE_SHOW_CITYLIST,
        payload
    }
};
export const changeShowCityId= function (payload) {
    return {
        type:CHANGE_SHOW_CITYLIID,
        payload
    }
};
export  default {

    getcategorytypeList(){
        return async(dispatch)=>{
            const {data} = await axios.get("/ShowTpeList/Search/getShowCategory?version=6.0.5&referer=2");
            dispatch(changeShowcategoryTypeList(data.data.show_category_list))
        }
    },
    getcategoryList({id = 0,index = 1,cityid=0}){

        return async(dispatch)=>{
            const {data} = await axios.get(`/ShowList/Show/Search/getShowList?category=${id}&city_id=${cityid}&page=${index}&keywords=&version=6.0.5&referer=2`);
            //
            if(index === 1)
            {

                dispatch(changeShowcategoryList({data:data.data.list,id,cityid}));
            }
            else
            {
                dispatch(changeShowcategoryTypeListMore({data:data.data.list}));

            }
        }
    },
    getcityList(){
        return async(dispatch)=>{
            const {data}  =  await axios.get("/ShowTpeList/Search/getCity?version=6.0.5&referer=2");

            dispatch(changeShowCityList(data.data.city_list))
        }
    },
    gitcityId(cityid,id){

        return  (dispatch)=>{
            dispatch(changeShowCityId(cityid));
            this.getcategoryList({cityid,id})
        }
    }


}