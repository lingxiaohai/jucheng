import {GENGAI_CATE} from "../../actionType/Category";
import initState from "../../state/Category"

export default (state=initState,action)=> {
     switch (action.type) {
         case GENGAI_CATE :
       return   {
             ...state.data,
             ...action.payload

         }
         default:
             return state

    }

}