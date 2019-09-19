import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import svipList from "../../store/actionCreator/Svip";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Ahead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priorList: this.props.priorList
        }
    }

    render() {
        let { priorList } = this.props

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

                <div className="swiper-container home-banner-wrap" ref='swiper-container'>
                    <div className="swiper-wrapper">
                        {priorList.map(v =>
                            <div className={"swiper-slide"} key={v.schedular_id}>
                                <div className="vip-ahead__list">

                                    <div className="vip-ahead__list__item">
                                        <a href="" className="vip-ahead__list__item__wrap">
                                            <img
                                                src={v.pic}
                                                className="vip-ahead__list__item__wrap__pic" />
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
                                    <a href="#">
                                        <span className="vip-ahead__list__lab">开售提醒</span>
                                    </a>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className="swiper-pagination vip-pagination swiper-pagination-bullets" ref={"swiper-pagination"}></div>
                </div>
            </section>
        )
    }

    handleInitialization() {
        let item = this.refs['swiper-container'];
        let page = this.refs['swiper-pagination'];


        setTimeout(()=>{
        new Swiper(item, {
            loop: true,
            speed: 1000,
            autoplay: {
                disableOnInteraction:false,
            },
            observeParents: true,
            observer: true,
            pagination: {
                el: page,
                type: 'bullets',
            }
        })
        },500)
    }



    componentDidMount() {
        this.props.getSvipList(this.props);
        this.handleInitialization()
    }
    // componentWillUnmount() {
    //     if (this.swiper) { // 销毁swiper
    //         this.swiper.destroy()
    //     }
    // }

}

function mapStateToProps(state) {

    return {
        priorList: state.SvipList.priorList
    }
}

function mapDispatchTo(dispatch) {
    return bindActionCreators(svipList, dispatch)
}

export default connect(mapStateToProps, mapDispatchTo)(Ahead)