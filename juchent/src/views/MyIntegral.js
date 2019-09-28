import React,{Component} from 'react';
import "../assets/css/myintegral.css"
import axios from 'axios';
import store from '../store'
import {changeMockList} from  '../store/actionCreator/scores'

// console.log(66655,store.getState())
class MyIntegral extends Component{
	constructor(){
		super();
		this.state = {
			mockList : store.getState().MyintegralList.mockList
		}
	}
	
	async componentDidMount(){
		const {data} = await axios.get('https://www.easy-mock.com/mock/5d8e67e8e53eef470c5eac37/scores/scores');
		console.log(666,data.list)
		store.dispatch(changeMockList(data.list))
		this.setState({
			mockList : store.getState().MyintegralList.mockList
		})
	}
    render(){
		const mockList = this.state.mockList || []
		// console.log(234543234,mockList)

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
						<p className="lzy-num">
							{mockList.length*2}
						</p>
						<a className="lzy-shop-integral" href="#">积分商城</a>
					</div>
					<div className="lzy-part lzy-integral-wrap">
						<div className="lzy-little">积分明细</div>
						<div className="lzy-part-box lzy-integral-list lzy-js-integral-list" >
							{/* <div className="lzy-item lzy-integral">
								<p className="lzy-name">每日登录</p>
								<p className="lzy-time">2019.09.18 04:43:02</p><span className="lzy-add lzy-num">+2</span>
							</div> */}
							{
								mockList.map((v,i)=>(
									<div key={i} className="lzy-item lzy-integral">
										<p className="lzy-name">{v.reason}</p>
										<p className="lzy-time">
											{v.createtime}
										</p>
										<span className="lzy-add lzy-num">+{v.scores}</span>
									</div>
								))
							}
							
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