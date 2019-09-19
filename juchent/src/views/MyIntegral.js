import React,{Component} from 'react';
import "../assets/css/myintegral.css"
class MyIntegral extends Component{
    render(){
        return(
            <div>
              <div className="lzy-views">
					<header className="lzy-navbar">
						<div className="lzy-navbar-inner">
							<div className="lzy-left">
								<a href="#" className="lzy-link"><span className="iconfont icon-zuo"></span></a>
							</div>
							<div className="lzy-center">
								积分商城
							</div>
							<div className="lzy-right">
								<a href="#"><span className="iconfont icon-gengduo"></span></a>
							</div>
						</div>
					</header>
					<div className="lzy-shadow-bg lzy-js-shadow-bg"></div>
					<div className="lzy-back-wrapper">
						<div className="lzy-triangle"></div>
						<a className="lzy-to-home" href="#">首页</a>
						<a className="lzy-myjuooo" href="#">我的聚橙</a>
					</div>

					<div className="lzy-banner">
						<a className="lzy-rule" href="#"><span className="iconfont icon-xinxi"></span>积分规则</a>
						<p className="lzy-text">可用积分</p>
						<p className="lzy-num">8</p>
						<a className="lzy-shop-integral" href="#">积分商城</a>
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
}
export default MyIntegral;