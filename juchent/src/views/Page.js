import React, { Component } from "react"
import Search from "../components/home/Search"
import "../assets/css/home.css"
import "../assets/css/main.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import pageList from "../store/actionCreator/home"
import Slideshow from "../components/home/Slideshow"
import Advertion from "../components/home/Advertion"
import Ahead from "../components/home/Ahead"
class Page extends Component {

    render() {
        return (
            <React.Fragment>
                <Search></Search>
                <main className={"main-wrap"}>
                    <section className={"main-wrap__content"}>
                        <div className="banner-wrap home-banner-wrap">
                            <div className="swiper-container swiper-container-horizontal">
                                <Slideshow swiperList={this.props}></Slideshow>
                            </div>
                        </div>

                        <section className="advertion-wrap">
                            <div className="label-item">
                                <Advertion ></Advertion>
                            </div>
                            <Ahead></Ahead>
                        </section>
                    </section>

                </main>
            </React.Fragment>

        )
    }


    componentDidMount() {
        this.props.getSwiper();

        this.setState({
            swiperList: this.props
        })

    }
}

function mapStateToProps(state, props) {

    return {
        newsList: state.SwiperList
    }
}
function mapDidToProps(dispatch) {
    return bindActionCreators(pageList, dispatch);

}
export default connect(mapStateToProps, mapDidToProps)(Page)