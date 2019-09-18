import Home from "../views/Home"
import My from "../views/My"
import Login from "../views/Login"
import Theater from "../views/Theater"
import Page from "../views/Page"
import Cart from "../views/Cart"
import Advertion from "../views/Advertion"
import Scores from "../views/Scores"

const route =[

    {
        path:"/Scores/index",
        name:"Scores",
        component:Scores
    }
    ,
    {
        path:"/show/showsLibrary",
        name:"show/showsLibrary",
        component:Advertion


    },

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
                exact:true
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
            }

        ]
    }

];
export default route