import {combineReducers}  from "redux"
import SwiperList from "./home"

import ShowTypeList from './Show'

import SvipList from "./Svip"
import JyuanList from "./juyuna"
import homeblock from "./homeblock"
import searchList  from "./Search"

import CategorList from "./Category"

import cityList from "./City"

export default combineReducers({
    SvipList,
    SwiperList,
    ShowTypeList,
    JyuanList,
    homeblock,
    searchList,
    CategorList,
    cityList

})


