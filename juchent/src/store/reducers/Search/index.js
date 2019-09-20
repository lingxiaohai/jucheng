import seacrch from '../../state/Search/index'

export default function (state=seacrch,action) {
    state = JSON.parse(JSON.stringify(state));

    if (action.type === "CHANGE_HOT_SEARCHLIST"){

        state.hotsearchList = action.payload
    }
    if (action.type === "CHANGE_SEARCHLIST"){

        state.searchList = action.payload
    }

    return state
}
