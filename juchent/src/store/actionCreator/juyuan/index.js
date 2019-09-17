import axios from "axios"
import {CHANGE_ADDJUYUANLIST} from "../../actionType/juyuan/index";

export const changeaddjuyuanlist=function (payload) {
        return {
            type:CHANGE_ADDJUYUANLIST,
            payload
        }        
}                

export default {
   getjuyuanlist(){
        return async (dispatch)=>{
           const {data}= await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
           console.log(data)
           dispatch(changeaddjuyuanlist(data.data))

        }
     }
}