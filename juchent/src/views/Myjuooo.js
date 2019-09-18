import React,{Component} from 'react';
import routerArr from '../router';
import {
    Route,NavLink
} from 'react-router-dom';
import MyIntegral from "../views/MyIntegral"

class Myjuooo extends Component{
    render(){
        const a = routerArr.find(s=>s.path==="/myjuooo");
        const children = a.Children ||[];
        console.log(1213,a);
        return(
            <div>
               
                {/* <NavLink to={"/myjuooo/myintegral"}>11111</NavLink>     */}
                {/* <Route path="/myjuooo/myintegral" component={MyIntegral}></Route>  */}
               {
                    children.map((item,i)=>{
                            console.log(item)
                            return <Route exact {...item} key={i}></Route>
                         })
               }
            </div>
        )
    }
}
export default Myjuooo;