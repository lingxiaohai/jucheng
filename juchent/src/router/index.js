import Home from "../views/Home"
import My from "../views/My"
import Login from "../views/Login"
import Theater from "../views/Theater"
import Page from "../views/Page"
import Cart from "../views/Cart"
import Advertion from "../views/Advertion"
import Scores from "../views/Scores"
import Searched from '../views/Searched'
import Myjuooo from "../views/Myjuooo"
import MyIntegral from "../views/MyIntegral"
import IntegralRule from "../views/IntegralRule"
import MyjuoooIndex from "../views/MyjuoooIndex.js"
import SelectCity from "../views/SelectCity"

import Plusindex from "../views/Plusindex"
import ShopPlusby from "../views/ShopPlusBuy"
import VipPulsindex from "../views/VipPulsindex"







import TheIndex from "../views/TheIndex"
import TheShpList from "../views/TheShpList"

const route =[
    {
        path : "/Theater/index",
        name : "index",
        component :TheIndex,
    },
    {
        path : "/Theater/showList",
        name : "showList",
        component :TheShpList,
    },

    {
        path:"/index/selectCity",
        name:"selectCity",
        component:SelectCity
    },
    {
        path:"/show/showsLibrary/:cityid/:id",
        name:"show/showsLibrary",
        component:Advertion
    },
    {
        path:"/search/index",
        name:"search/index",
        component:Searched
    }
    ,
    {
        path : "/Myjuooo/integralRule",
        name : "integralRule",
        component : IntegralRule
    }
    ,
    {
        path : "/myjuooo",
        component : Myjuooo,
        Children : [
            {
                path : "/myjuooo/myintegral",
                name : "myintegral",
                component : MyIntegral,
                
            }
            ,
            {
                path : "/myjuooo",
                name : "myjuoooIndex",
                component : MyjuoooIndex,
                exact : true
            }
        ]

    }
    ,
    {
        path:"/Scores/index",
        name:"Scores",
        component:Scores
    }
    ,
    {
        path:"/plus/index",
        name:"plus/index",
        component:Plusindex
    }
    ,
    {
        path:"/vip/index/1",
        name:"/vip/index/1",
        component:VipPulsindex
    }
    ,

    {
        path:"/shop/plus/buy",
        name:"/shop/plus/buy",
        component:ShopPlusby
    }
    ,


    {
        path:"/Login",
        name:"login",
        component:Login
    },


    {
        path:"/",
        name:"home",
        component:Home,
        Children:[
            {
                path:"/",
                name:"Page",
                component:Page,
                exact:true,
            },
            {
                path:"/my",
                name:"my",
                component:My
            },
            {
                path:"/cart",
                name:"cart",
                component:Cart
            },
            {
                path:"/Theater",
                name:"Theater",
                component:Theater,        
            },



        ]

    },

];
export default route