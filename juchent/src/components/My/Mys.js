import React from "react"
import "../../assets/css/my.css"
import axios from "axios"
export default class Mys extends React.Component{
    // async componentDidMount() {
    //     const {data} = await axios.get("https://api.juooo.com/user/account/basicInfo?version=6.0.5&referer=2");
    //     console.log(data,1212)
    // }
    render(){
        return (
            <div className="mine">
                <div className="mine__body">
                    <div className="mine-info mine-info">
                        <a href="https://m.juooo.com/Myjuooo/mysecurity">
                            <i className="iconfont icon-baise_shezhi"></i>
                        </a>
                        <div className="mine-info__main">
                            <div className="mine-info__main__head">
                                <div className="mine-info__main__head__pic">
                                    <img
                                        src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
                                        alt=""/>
                                </div>
                                <span className="mine-info__main__head__name">橙子</span>
                                <span className="mine-info__main__head__uid">ID:6832591</span>
                            </div>
                            <div className="mine-info__main__label">
                                <p className="mine-info__main__label__name">普通会员</p>
                            </div>
                            <div className="mine-info__main__cnt">
                                <a href="https://m.juooo.com/Myjuooo/mymoney" className="mine-info__main__cnt__item">
                                    <p className="mine-info__main__cnt__item__num">0</p>
                                    <p className="mine-info__main__cnt__item__name">账户余额</p>
                                    <div className="separator"></div>
                                </a>
                                <a href="https://m.juooo.com/Myjuooo/myintegral" className="mine-info__main__cnt__item">
                                    <p className="mine-info__main__cnt__item__num">6</p>
                                    <p className="mine-info__main__cnt__item__name">积分</p>
                                    <div className="separator"></div>
                                </a>
                                <a href="https://m.juooo.com/Myjuooo/couponExchange"
                                   className="mine-info__main__cnt__item">
                                    <p className="mine-info__main__cnt__item__num">0</p>
                                    <p className="mine-info__main__cnt__item__name">优惠券</p>
                                    <div className="separator"></div>
                                </a>
                                <a href="https://m.juooo.com/plus/index"
                                   className="mine-info__main__cnt__item mine-info__main__cnt__plus">
                                    <p className="mine-info__main__cnt__item__num mine-info__main__cnt__item__num--no">立即开通</p>
                                    <p className="mine-info__main__cnt__item__name">橙PLUS卡</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="https://m.juooo.com/shop/vip/buy" className="mine-vip">
                        <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="" className="mine-vip__pic"/>
                    </a>
                    <div className="mine-setting">
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/my/myOrderList" className="mine-setting__list__item--link">
                                    <i className="iconfont icon-icon-"></i>
                                    <p className="mine-setting__list__item__name">我的订单</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/eticket/mine" className="mine-setting__list__item--link">
                                    <i className="iconfont icon-piaojia"></i>
                                    <p className="mine-setting__list__item__name">我的票夹</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/Cardproduct/index?current=mine"
                                   className="mine-setting__list__item--link">
                                    <i className="iconfont icon-qiabao1"></i>
                                    <p className="mine-setting__list__item__name">我的卡包</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item"></li>
                        </ul>
                        <ul className="mine-setting__list">
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/Myjuooo/myRealNameCertification"
                                   className="mine-setting__list__item--link">
                                    <i className="iconfont icon-dianhuaben-copy"></i>
                                    <p className="mine-setting__list__item__name">实名购票人</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/myjuooo/myaddress"
                                   className="mine-setting__list__item--link">
                                    <i className="iconfont icon-dizhi"></i>
                                    <p className="mine-setting__list__item__name">收货地址</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="https://m.juooo.com/feedback/index" className="mine-setting__list__item--link">
                                    <i className="iconfont icon-yijianfankui"></i>
                                    <p className="mine-setting__list__item__name">意见反馈</p>
                                </a>
                            </li>
                            <li className="mine-setting__list__item">
                                <a href="#" className="mine-setting__list__item--link">
                                    <i className="iconfont icon-kefubangzhu"></i>
                                    <p className="mine-setting__list__item__name">客服帮助</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}