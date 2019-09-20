import axios from 'axios'
import {CHANGE_HOT_SEARCHLIST} from '../../actionType/Search'
import {CHANGE_SEARCHLIST} from '../../actionType/Search'

const changehotsearchList=function(payload){
    return{
        type:CHANGE_HOT_SEARCHLIST,
        payload
    }
};
const changesearchList=function(payload){
    return{
        type:CHANGE_SEARCHLIST,
        payload
    }
};

export default {
    getHotSearch(){
        return async (dispatch)=>{
            const {data} =await axios.get("/ShowList/Show/Search/getHotWord?version=6.0.5&referer=2");
            dispatch(changehotsearchList(data.data))
        }
    },
    getSearchContent(SearchContent){
        console.log(888888888888888888888888888888888,SearchContent);
        SearchContent = encodeURI(SearchContent);
        return async (dispatch)=>{
            const {data} =await axios.get(`/ShowList/Show/Search/getShowList?keywords=${SearchContent}&page=1&sort_type=1&version=6.0.5&referer=2`);
            console.log(data.data);
            dispatch(changesearchList(data.data.list))
        }
    }
}