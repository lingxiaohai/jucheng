import axios from "axios"
import {CHANGE_ADDJUYUANLIST} from "../../actionType/juyuan/index";
import {CHANGE_WUTAILIST} from "../../actionType/juyuan/index"
import {CHANEG_WUTAIDAOHAN} from "../../actionType/juyuan/index"
import { async } from "rxjs/internal/scheduler/async";
export const changeaddjuyuanlist=function (payload) {
        return {
            type:CHANGE_ADDJUYUANLIST,
            payload
        }        
}                
export const changewutaiaddlist=function(payload){
         return {
            type:CHANGE_WUTAILIST,
            payload
      } 
}
export const changewutaidaohan=function(payload){
   return{
      type:CHANEG_WUTAIDAOHAN,
         payload
   }
}    
export default {
   getjuyuanlist(){
        return async (dispatch)=>{
           const {data}= await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
           dispatch(changeaddjuyuanlist(data.data))
        }
     },
   getwutailist(_id){
      return async (dispatch)=>{
         const {data}=await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
         let list=data.data.theatre_list
          let wutailist=list.find((v,i)=>{
            return list[i].id==_id
         })
         dispatch(changewutaiaddlist(wutailist))
      }
   },
   getwutaidaohanlist(id,tid){
     
      return async(dispatch)=>{
         const {data}=await axios.get(`https://m.juooo.com/Theatre/showListData?tid=${tid}&category=${id}&page=1`)
       
         dispatch(changewutaidaohan(data.datas))
      }
      
   }

}