import seacrch from '../../state/Search/index'

export default function (state=seacrch,action) {
    state = JSON.parse(JSON.stringify(state));

    if (action.type === "CHANGE_HOT_SEARCHLIST"){

        state.hotsearchList = action.payload
    }
    if (action.type === "CHANGE_SEARCHLIST"){

        state.searchList = action.payload
    }
    if (action.type === "CHANGE_HISTORY_LIST"){
        state.historyList.unshift(action.payload);
        state.historyList=[...new Set(state.historyList)]
    }
    if ( action.type==="CHANGE_DELETE_HISTORY_LIST") {
        state.historyList=[]
    }

    return state
}
