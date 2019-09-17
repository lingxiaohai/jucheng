 import React,{Component} from "react"
import routerArr from "../router"
 import {NavLink,Route,Switch} from "react-router-dom"
import "../assets/css/tab.css"
 export default class Home extends Component{

    render() {
        return(
            <>
                {routerArr[1].Children.map((v,index)=>
                    <Route {...v}  key={index}></Route>
                )}
            <div className={"tabs"}>
                <nav className={'nav'}>
                <div className={"nav-item"}>
                    <NavLink to={"/"} className={"nav-item-link router-link-exact-active"} exact>
                        <span className={"icon home-icon"}></span>
                        <span className="nav-name nav-name0" style={{display:"none"}} >首页</span>
                    </NavLink>
                </div>
                    <div className="nav-item">
                        <NavLink to={"/Theater"} className="nav-item-link">
                            <span className="icon theater-icon"></span>
                            <span className="nav-name">剧院</span>

                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to={"/cart"}className="nav-item-link">
                            <span className="icon ticket-icon"></span>
                            <span className="nav-name">票夹</span>
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to={"/my"} className="nav-item-link">
                            <span className="icon my-icon"></span>
                            <span className="nav-name">我的</span>
                        </NavLink>
                    </div>

                </nav>

            </div>

                </>
        )
    }
 }