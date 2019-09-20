import {combineReducers}  from "redux"
import SwiperList from "./home"

import ShowTypeList from './Show'

import SvipList from "./Svip"
import JyuanList from "./juyuna"
import homeblock from "./homeblock"
import searchList  from "./Search"

export default combineReducers({
    SvipList,
    SwiperList,
    ShowTypeList,
    JyuanList,
    homeblock,
    searchList
})


