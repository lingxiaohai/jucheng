import {combineReducers}  from "redux"
import SwiperList from "./home"
import SvipList from "./Svip"
import JyuanList from "./juyuna"
import TitInfo from './Ticket_107032'

export default combineReducers({
    SvipList,
    SwiperList,
    JyuanList,
    TitInfo
})


