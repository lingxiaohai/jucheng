import React,{Component} from "react"
import  {connect}  from "react-redux"
import {bindActionCreators} from "redux"
import svipList from "../../store/actionCreator/Svip";
class Ahead extends Component{
    render() {
        console.log(this.props)
        return(
            <section className="vip-ahead">
                <a href="#">
                    <div className="vip-ahead__advert">
                        <div className="vip-ahead__advert__left">
                            <span className="vip-ahead__advert__left__pre">优先购票</span>
                            <span className="vip-ahead__advert__left__tip">VIP+会员尊享权益</span>
                        </div>
                        <div className="vip-ahead__advert__right">
                            <span className="vip-ahead__advert__right__lab">99元/年</span>
                            <span className="vip-ahead__advert__right__icon"></span>
                        </div>
                    </div>

                </a>

                <div className="swiper-container home-banner-wrap">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="vip-ahead__list">

                                <div className="vip-ahead__list__item">
                                    <a href="" className="vip-ahead__list__item__wrap">
                                        <img
                                            src="https://image.juooo.com/group1/M00/03/10/rAoKmV17Of-ANaviAABk6br_K4U472.jpg"
                                            className="vip-ahead__list__item__wrap__pic" />
                                    </a>
                                </div>
                                <div className="vip-ahead__list__info">
                                    <a href="#">
                                        <h3 className="vip-ahead__list__info__title text-double">"文华大奖"获奖舞剧《永不消逝的电波》-深圳站</h3>

                                    </a>
                                    <p className="vip-ahead__list__info__venue text-single">深圳 | 南山文体中心剧院大剧院</p>
                                    <p className="vip-ahead__list__info__tip">
                                        <span className="c_ff6">09/17 12:00</span>
                                        <span className="vip-ahead__list__info__tip__text">开始</span>
                                    </p>
                                </div>
                                <a href="#">
                                    <span className="vip-ahead__list__lab">开售提醒</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
    componentDidMount() {
        this.props.getSvipList();
    }
}
function mapStateToProps(state) {
      console.log(state)
    return{

    }
}
function mapDispatchTo(dispatch) {
    return bindActionCreators(svipList,dispatch)
}
export default connect(mapStateToProps,mapDispatchTo)(Ahead)