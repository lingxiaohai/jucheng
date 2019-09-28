import React,{Component} from 'react';
import "../assets/css/myintegral.css"
import axios from 'axios';

class MyIntegral extends Component{
	
	constructor(){
		super();
		this.state = {
			myintegralList : []
		}
	}
	async getMyintegralList(){
		
		const data = await axios.get('https://api.juooo.com/Show/Search/getShowList?keywords=%E6%9D%8E%E8%8D%A3%E6%B5%A9&page=1&sort_type=1&version=6.0.5&referer=2');
		console.log(110,data);
	}
	componentDidMount(){
		
		this.getMyintegralList();
		console.log(112233)
	}
    render(){
        return(
            <div>
              <div className="lzy-views">
                <header className="lzy-navbar">
                        <div className="lzy-navbar-inner">
                            <div className="lzy-left">
                                <a onClick={this.goBack.bind(this)} href="#" className="lzy-link"><span className="iconfont icon-zuo"></span></a>
                            </div>
                            <div  className="lzy-center">
                                积分商城
                            </div>
                            <div onClick={this.showBtn.bind(this)} className="lzy-right">
                                <a href="#"><span className="iconfont icon-gengduo"></span></a>
                            </div>
                        </div>
                    </header>
					<div ref="mark" className="lzy-shadow-bg lzy-js-shadow-bg"></div>
					<div ref="markBtn" className="lzy-back-wrapper">
						<div className="lzy-triangle"></div>
						<a onClick={this.toHome.bind(this)} className="lzy-to-home" href="#">首页</a>
						<a onClick={this.toMy.bind(this)} className="lzy-myjuooo" href="#">我的聚橙</a>
					</div>

					<div className="lzy-banner">
						<a onClick={this.toRule.bind(this)} className="lzy-rule" href="#"><span className="iconfont icon-xinxi"></span>积分规则</a>
						<p className="lzy-text">可用积分</p>
						<p className="lzy-num">8</p>
						<a onClick={this.toScoresIndex.bind(this)} className="lzy-shop-integral" href="#">积分商城</a>
					</div>
					<div className="lzy-part lzy-integral-wrap">
						<div className="lzy-little">积分明细</div>
						<div className="lzy-part-box lzy-integral-list lzy-js-integral-list" >
							<div className="lzy-item lzy-integral">
								<p className="lzy-name">每日登录</p>
								<p className="lzy-time">2019.09.18 04:43:02</p><span className="lzy-add lzy-num">+2</span>
							</div>
							<div className="lzy-item lzy-integral">
								<p className="lzy-name">每日登录</p>
								<p className="lzy-time">2019.09.18 04:43:02</p><span className="lzy-add lzy-num">+2</span>
							</div>
							<div className="lzy-item lzy-integral">
								<p className="lzy-name">每日登录</p>
								<p className="lzy-time">2019.09.18 04:43:02</p><span className="lzy-add lzy-num">+2</span>
							</div>
						</div>
					</div>
				</div>
            </div>
        )
	}
	goBack(){
		this.props.history.go(-1);
	}
	showBtn(){
		this.refs.mark.style.display = "block";
		this.refs.markBtn.style.display = "block";
	}
	toHome(){
		this.props.history.push("/");
	}
	toMy(){
		this.props.history.push("/my");
	}
	toScoresIndex(){
		this.props.history.push("/Scores/index");
	}
	toRule(){
		this.props.history.push("/Myjuooo/integralRule");
	}
}
export default MyIntegral;