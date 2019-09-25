import {combineReducers}  from "redux"
import SwiperList from "./home"
import ShowTypeList from './Show'
import SvipList from "./Svip"
import JyuanList from "./juyuna"
import TitInfo from './Ticket_107032'
import homeblock from "./homeblock"
import CategorList from "./Category"
import cityList from "./City"

export default combineReducers({
    SvipList,
    SwiperList,
    ShowTypeList,
    JyuanList,
    TitInfo,
    homeblock,
    CategorList,
    cityList
})


