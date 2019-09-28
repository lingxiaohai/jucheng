import React from "react"
import {withRouter} from 'react-router-dom'
 class Vipblock extends React.Component{

    render() {

        return(
            <section className="vip-block">
                <a href="/vip/index/1">
                    <div className="vip-block__advert">
                        <div className="vip-block__advert__left"><span className="vip-block__advert__left__logo"></span>
                            <span className="vip-block__advert__left__tip">VIP+会员尊享权益</span></div>
                        <div className="vip-block__advert__right"><span
                            className="vip-block__advert__right__lab">99元/年</span> <span
                            className="vip-block__advert__right__icon"></span></div>
                    </div>
                </a>
                <div className="vip-block__conent">
                    <div className="vip-block__conent__power">
                        <h3 className="vip-block__conent__power__title title-left"><span>专享折扣</span></h3>
                        <ul className="vip-block__conent__power__wrap wrap--ul">
                            <li className="vip-block__conent__power__item item--list"><a
                                                                                         className="vip-block__conent__power__click">
                                <div className="vip-block__conent__power__click__icon" onClick={()=>{
                                    this.props.history.push("/ExclusiveDiscount")
                                }}><img
                                    src="https://image.juooo.com/group1/M00/03/A8/rAoKNV1fNlGAYQ4kAAB_-x8YGi8240.jpg"/>
                                </div>
                                <p className="vip-block__conent__power__click__info text-single"><strong
                                    className="vip-block__conent__power__click__info__blod c_ff6">8.5</strong>
                                    <span className="vip-block__conent__power__click__info__lab">折</span></p>
                            </a></li>
                            <li className="vip-block__conent__power__item item--list"><a href="/vip/discount"
                                                                                         className="vip-block__conent__power__click">
                                <div className="vip-block__conent__power__click__icon" onClick={()=>{
                                    this.props.history.push("/ExclusiveDiscount")
                                }}><img
                                    src="https://image.juooo.com/group1/M00/03/3F/rAoKNVzc_luAAYj0AABKXDcBW98962.jpg"/>
                                </div>
                                <p className="vip-block__conent__power__click__info text-single"><strong
                                    className="vip-block__conent__power__click__info__blod c_ff6">9.8</strong>
                                    <span className="vip-block__conent__power__click__info__lab">折</span></p>
                            </a></li>
                        </ul>
                    </div>
                    <div className="vip-block__conent__power">
                        <h3 className="vip-block__conent__power__title title--right"><span>优先购票</span> <span
                            className="vip-block__conent__power__title--arrow"><a href="/vip/index/1"><i
                            className="iconfont ju-icon-arrow-right"></i></a></span></h3>
                        <ul className="vip-block__conent__power__wrap wrap-list--right">
                            <li className="vip-block__conent__power__item"><a href="/vip/index/1"
                                                                              className="vip-block__conent__power__click">
                                <div className="vip-block__conent__power__click__icon" onClick={()=>{
                                    this.props.history.push("/ExclusiveDiscount")
                                }}><img
                                    src="https://image.juooo.com/group1/M00/03/BA/rAoKNV1_IcWAAKMCAACBad-K3Io772.jpg" />
                                </div>
                                <p className="vip-block__conent__power__click__info text-single"><span
                                    className="c_ff6">09/19 11:00</span> <span
                                    className="vip-block__conent__power__click__info__lab">开始</span></p>

                            </a></li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}
export default withRouter(Vipblock)