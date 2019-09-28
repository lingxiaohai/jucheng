import {combineReducers}  from "redux"
import SwiperList from "./home"
import ShowTypeList from './Show'
import SvipList from "./Svip"
import JyuanList from "./juyuna"
import TitInfo from './Ticket_107032'
import homeblock from "./homeblock"

import searchList  from "./Search"
import yxgpList  from "./VipPulus"


import CategorList from "./Category"
import cityList from "./City"
import ExclusiveDiscount from "./ExclusiveDiscount";
export default combineReducers({
    SvipList,
    SwiperList,
    ShowTypeList,
    JyuanList,
    TitInfo,
    homeblock,
    searchList,
    CategorList,
    cityList,
    ExclusiveDiscount,
    yxgpList

})


