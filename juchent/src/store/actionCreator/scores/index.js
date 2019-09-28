import {CHANGE_MOCK_LIST} from '../../actionType/scores'

export const changeMockList =  function (payload){
    console.log(payload,852)
    return {
        type : CHANGE_MOCK_LIST,
        payload
    }
}