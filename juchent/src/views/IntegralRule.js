import React,{Component} from 'react';
import '../assets/css/integralRule.css';

export default class IntegralRule extends Component{
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
    render(){
        return(
            <div>
                <div className="views">
                    <header className="l-navbar">
                        <div className="l-navbar-inner">
                            <div onClick={this.goBack.bind(this)} className="l-left">
                                <a href="#" className="l-link"><span className="iconfont icon-zuo"></span></a>
                            </div>
                            <div className="l-center">
                                积分规则
                            </div>
                            <div onClick={this.showBtn.bind(this)} className="l-right">
                                <a href="#"><span className="iconfont icon-gengduo"></span></a>
                            </div>
                        </div>
                    </header>
                    <div ref="mark" className="l-shadow-bg l-js-shadow-bg"></div>
                    <div ref="markBtn" className="l-back-wrapper">
                        <div className="l-triangle"></div>
                        <a onClick={this.toHome.bind(this)} className="l-to-home" href="#">首页</a>
                        <a onClick={this.toMy.bind(this)} className="l-myjuooo" href="#">我的聚橙</a>
                    </div>


                    <div className="l-panel">
                        <div className="l-panel-box">
                            <p className="l-panel-VIP">会员在聚橙网获得的积分，可用于积分换购，会员可通过以下几种渠道获取积分：</p>
                            <p className="l-title">1. 消费积分</p>
                            <p className="l-title-text">消费10元获得1个积分，每日无上限（配送费用不送积分）。</p>
                            <p className="l-title">2. 验证邮箱</p>
                            <p className="l-title-text">采用邮箱验证可获得10个积分。</p>
                            <p className="l-title">3. 绑定手机</p>
                            <p className="l-title-text">没有用手机注册的用户，绑定手机可获得50积分。</p>
                            <p className="l-title">4. 上传头像</p>
                            <p className="l-title-text">用户首次上传头像可获得5个积分（只有首次可赠送积分）。</p>
                            <p className="l-title">5. 完善资料</p>
                            <p className="l-title-text">用户完善个人资料可获得50个积分（需填写真实姓名、性别、出生日期、演出爱好等信息）。</p>
                            <p className="l-title">6. 发表剧评</p>
                            <p className="l-title-text">发表一条剧评可获得1个积分（每日上限50个积分）。</p>
                            <p className="l-title">7. 剧评加精</p>
                            <p className="l-title-text">用户剧评加精可获得5个积分（按加精条数计算，一条5分，二条10分）。</p>
                            <p className="l-title">8. 橙友日消费</p>
                            <p className="l-title-text">每月22号消费10元可获得2个积分，当日积分无上限（橙友日消费得双倍积分，以下单日期为准）。</p>
                            <p className="l-title">9. 新用户注册</p>
                            <p className="l-title-text">注册可获得20个积分（若用手机注册，默认绑定用户手机号）。</p>
                            <p className="l-panel-VIP"></p>
                            <p className="l-title">注意事项：</p>
                            <p className="l-title-text">1）购买欢聚橙卡符合消费积分，可获得积分；</p>
                            <p className="l-title-text">2）欢聚橙卡支付的订单不能获得积分。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}