import React,{Component} from "react"
import "../assets/css/login.css"
import axios from "axios"
export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            inputValue:""
        }
    }
    changeValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
   async register(){
        console.log(this.state.inputValue,this.refs["passWord"].value)
       const {data} = await axios.post("/logins/adminLogin",{
            adminName:this.state.inputValue,
            passWord:this.refs["passWord"].value
        })
       if(data.ok===1){
           localStorage.userName=data.adminName;
           this.props.history.push("/My");
       }
    }
    render() {
        // console.log(this.props);
        return(
            <div className="views login_bg">
                    <div className="navbar">
                        <div className="navbar-inner navbar-on-center">
                            <div className="left">
                                <a href="#" className="link">
                                    <span className="iconfont">&#xeba1;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="login-wrap">
                            <h1 className="title login-title">欢迎来到聚橙网</h1>
                            <div className="binded-iphone">
                                <div className="login-area">
                                    <form>
                                        <ul className="lg-list">
                                            <li className="lg-item">
                                                <input type="text" value={this.state.inputValue} placeholder="请输入手机号/邮箱" className="lg-input" name="tel"
                                                    onChange={this.changeValue.bind(this)}
                                                />
                                                {/*<div className="remove-btn" style={{display: "none"}}></div>*/}
                                            </li>
                                            <li className="lg-item">
                                                <input type="password" ref={"passWord"} placeholder="请输入密码" className="lg-input pwd-input" name="pwd"/>
                                                <input type="text" placeholder="请输入密码" className="lg-input pwd-input" name="pwd" style={{display: "none"}}/>
                                                {/*<div className="remove-btn" style={{display: "none"}}></div>*/}
                                                {/*<div className="btn-eye visualise" style={{display: "none"}}></div>*/}
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                <div className="login-btn">
                                    <a href="#" disabled="disabled" className="btn lg-btn" style={{background:this.state.inputValue.length>0?"skyblue":""}}
                                        onClick={this.register.bind(this)}
                                   >登录</a>
                                </div>
                                <div className="login-toggle">
                                    <div className="tg-wrap tg-sms">
                                        <span className="left tg-mail">忘记密码</span>
                                        <span className="right tg-login">验证码登录/注册</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-wrap" style={{position: "relative", marginTop:"2rem"}}>
                        <div className="footer-title">
                            <p className="footer-title-txt">其他登录方式</p>
                        </div>
                        <div className="footer-inner">
                            <div className="item">
                                <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq" className="img-media">
                                    <span className="icon qq-icon"></span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina" className="img-media">
                                    <span className="icon weibo-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<div className="dialog" style={{display:"none"}}>*/}
                    {/*    <p className="tips-text"></p>*/}
                    {/*</div>*/}
                </div>
        )
    }
}