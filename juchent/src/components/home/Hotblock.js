import React from "react"
import blockList from "../../store/actionCreator/homeblock"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Hotblock extends React.Component {

    render() {

        let {newsList = [1, 2, 3]} = this.props;
        if (newsList && newsList.length) {
            this.initSwiper();
        }

        return (
            <section className="hot-block">
                <div className="hot-block__lab">
                    <h3 className="hot-block__lab__title">热门演出</h3>
                    <a className="hot-block__lab__arrow">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
                            alt=""/>
                    </a>
                </div>
                <div className="hot-block__list hot-list">
                    <div className="swiper-container swiper-container-horizontal" ref={"container"}>
                        <div className="swiper-wrapper">

                            {newsList.map((v, index) =>

                                <div className="swiper-slide sliders .swiper-slide-active" key={index}>
                                    <a href="https://m.juooo.com/ticket/93146" className="hot-block__list__wrap">
                                        <div className="hot-block__list__wrap__item">
                                            <img
                                                src={v.pic}/>
                                        </div>
                                        <h3 className="hot-block__list__wrap__title text-single">{v.show_name} </h3>
                                    </a>
                                </div>
                            )}


                        </div>

                    </div>
                </div>
            </section>
        )
    }

    initSwiper() {
        setTimeout(() => {

            let container = this.refs["container"];
            new Swiper(container, {
                autoplay: false,
                freeMode: false,
                freeModeSticky: true,
                centeredSlides: false,
                slidesPerView: "auto",
            })

        }, 500)
    }

    componentDidMount() {
        this.props.gethomeblock();
    }
}

function mapStateToProps(state) {

    return {
        newsList: state.homeblock.hots_show_list
    }
}

function mapDidpatchTo(dispatch) {

    return bindActionCreators(blockList, dispatch)
}

export default connect(mapStateToProps, mapDidpatchTo)(Hotblock)