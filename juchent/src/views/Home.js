 import React,{Component} from "react"
import routerArr from "../router"
 import {NavLink,Route,Switch} from "react-router-dom"
import "../assets/css/tab.css"
 export default class Home extends Component{
        constructor(props){
            super(props);
            this.state={
                isShow:true
            }
        }
        chanisShow(){
            this.setState({
                isShow:false
            })
        }
    render() {

        return(
            <div id={"app"}>
                <div className="home page">
<<<<<<< HEAD
                {routerArr[3].Children.map((v,index)=>
=======
                {routerArr[routerArr.length-1].Children.map((v,index)=>
>>>>>>> 252b4c4bfbca8081146d3c0bfa88eae93fa8e682
                    <Route {...v}  key={index}></Route>
                )}
            <div className={"tabs"}>
                <nav className={'nav'}>
<<<<<<< HEAD
                <div className={"nav-item"}>
                    <NavLink to={"/"} className={"nav-item-link router-link-exact-active"}  exact>
                        <span className={"icon home-icon"}></span>
                        <span className="nav-name nav-name0" style={{display:"none"}} >首页</span>
=======
                <div className={"nav-item"} onClick={()=>{
                    this.setState({isShow:true})
                }}>
                    <NavLink to={"/"} className={"nav-item-link router-link-exact-active"} exact activeStyle={{color:"red"}}>
                        <span className={this.state.isShow?"icon home-icon":"icon home-icons"}></span>
                        <span className="nav-name nav-name0" style={{display:this.state.isShow?"none":"block"}} >首页</span>
>>>>>>> 252b4c4bfbca8081146d3c0bfa88eae93fa8e682
                    </NavLink>
                </div>
                    <div className="nav-item" onClick={this.chanisShow.bind(this)}>
                        <NavLink to={"/Theater"} className="nav-item-link" activeStyle={{color:"red"}}>
                            <span className="icon theater-icon"></span>
                            <span className="nav-name">剧院</span>

                        </NavLink>
                    </div>
                    <div className="nav-item" onClick={this.chanisShow.bind(this)}>
                        <NavLink to={"/cart"}className="nav-item-link" activeStyle={{color:"red"}}>
                            <span className="icon ticket-icon"></span>
                            <span className="nav-name">票夹</span>
                        </NavLink>
                    </div>
                    <div className="nav-item" onClick={this.chanisShow.bind(this)}>
                        <NavLink to={"/my"} className="nav-item-link" activeStyle={{color:"red"}}>
                            <span className="icon my-icon" ></span>
                            <span className="nav-name">我的</span>
                        </NavLink>
                    </div>

                </nav>

            </div>




                </div>
            </div>

        )
    }
 }