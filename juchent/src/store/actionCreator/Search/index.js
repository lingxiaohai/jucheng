import axios from 'axios'
import {CHANGE_HOT_SEARCHLIST} from '../../actionType/Search'
import {CHANGE_SEARCHLIST} from '../../actionType/Search'
import {CHANGE_HISTORY_LIST} from '../../actionType/Search'
import {CHANGE_DELETE_HISTORY_LIST} from '../../actionType/Search'

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
const changehistoryList=function(payload){
    return{
        type:CHANGE_HISTORY_LIST,
        payload
    }
};
const changedeletehistoryList=function(payload){
    return{
        type:CHANGE_DELETE_HISTORY_LIST,
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
        SearchContent = encodeURI(SearchContent);
        return async (dispatch)=>{
            const {data} =await axios.get(`/ShowList/Show/Search/getShowList?keywords=${SearchContent}&page=1&sort_type=1&version=6.0.5&referer=2`);
            dispatch(changesearchList(data.data.list))
        }
    },
    getHistoryList(history){
        return async(dispatch)=>{
            dispatch(changehistoryList(history))
        }
    },
    deleteHistoryList(){
        return async(dispatch)=>{
            dispatch(changedeletehistoryList())
        }
    }
}