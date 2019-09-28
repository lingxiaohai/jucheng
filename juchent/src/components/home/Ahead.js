import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import svipList from "../../store/actionCreator/Svip";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {NavLink} from "react-router-dom";


class Ahead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorList: this.props.priorList
        }
    }
   

    render() {
        let {priorList} = this.props

        // if (priorList && priorList.length>1) {

        // }
        return (
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

                <div className="swiper-container home-banner-wrap" ref={el=>this.connainer=el}>
                    <div className="swiper-wrapper">
                        {priorList.map(v =>
                            <div className={"swiper-slide"} key={v.schedular_id}>
                                <div className="vip-ahead__list">

                                    <div className="vip-ahead__list__item">
                                        <a href="" className="vip-ahead__list__item__wrap">
                                            <img
                                                src={v.pic}
                                                className="vip-ahead__list__item__wrap__pic"/>
                                        </a>
                                    </div>
                                    <div className="vip-ahead__list__info">
                                        <a href="#">
                                            <h3 className="vip-ahead__list__info__title text-double">{v.schedular_name}</h3>

                                        </a>
                                        <p className="vip-ahead__list__info__venue text-single">{v.city_name} | {v.venue_name}</p>
                                        <p className="vip-ahead__list__info__tip">
                                            <span className="c_ff6">09/17 12:00</span>
                                            <span className="vip-ahead__list__info__tip__text">开始</span>
                                        </p>
                                    </div>
                                    <NavLink to={"/ticket/107032"}  href="#">
                                        <span  className="vip-ahead__list__lab">开售提醒</span>
                                    </NavLink>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className="swiper-pagination vip-pagination swiper-pagination-bullets"
                         ref={el=>this.page=el}></div>
                </div>
            </section>
        )
    }

    handleInitialization() {

        let item = this.connainer;
        let page = this.page;
         this.swiper =  new Swiper(item, {
                loop: true,
             spaceBetween : 0,
             centeredSlides : true,
                speed: 1000,
                autoplay: {
                    disableOnInteraction: false,
                },
                pagination: {
                    el: page,
                    type: 'bullets',
                }
            })

    }

    componentDidUpdate(){
        if(this.swiper){
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        this.handleInitialization()
    }
    componentDidMount() {
        this.props.getSvipList(this.props);

    }

    componentWillUnmount() {
        if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
        }
    }

}

function mapStateToProps(state) {

    return {
        priorList: state.SvipList.discountList
    }
}

function mapDispatchTo(dispatch) {
    return bindActionCreators(svipList, dispatch)
}

export default connect(mapStateToProps, mapDispatchTo)(Ahead)