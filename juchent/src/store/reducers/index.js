import {combineReducers}  from "redux"
import SwiperList from "./home"
import SvipList from "./Svip"
import JyuanList from "./juyuna"
import homeblock from "./homeblock"
import CategorList from "./Category"
export default combineReducers({
    SvipList,
    SwiperList,
    JyuanList,
    homeblock,
    CategorList
})


