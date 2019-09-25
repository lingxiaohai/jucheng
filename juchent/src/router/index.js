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
import MyjuoooIndex from "../views/MyjuoooIndex"
import Ticket_107032 from '../views/Ticket_107032'
import SelectCity from "../views/SelectCity"

const route =[

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
        path : "/ticket/107032",
        name : "ticket_107032",
        component : Ticket_107032
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
                component:Theater
            },



        ]

    },

];
export default route