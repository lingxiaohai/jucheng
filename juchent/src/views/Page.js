import React, {Component} from "react"
import Search from "../components/home/Search"
import "../assets/css/home.css"
import "../assets/css/main.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import pageList from "../store/actionCreator/home"
import Slideshow from "../components/home/Slideshow"
import Advertion from "../components/home/Advertion"
import Ahead from "../components/home/Ahead"
import Operation from "../components/home/Operation"
import Hotblock from "../components/home/Hotblock"
import Category from "../components/home/Category"
import Vipblock from "../components/home/Vipblock"
import Recommend from "../components/home/Recommend"
import {withRouter} from "react-router-dom"


class Page extends Component {
    state = {
        city: "",
        init:""
    };

    render() {

        return (
            <React.Fragment>
                <Search ></Search>
                <main className={"main-wrap"}>
                    <section className={"main-wrap__content"}>
                        <div className="banner-wrap home-banner-wrap">
                            <div className="swiper-container swiper-container-horizontal">
                                <Slideshow swiperList={this.props}></Slideshow>
                            </div>
                        </div>

                        <section className="advertion-wrap">
                            <div className="label-item">
                                <Advertion ifyList={this.props.newsList.classify_list}></Advertion>
                            </div>
                            <Ahead></Ahead>
                            <Operation operation={this.props.newsList.operation_list}></Operation>
                            <Hotblock></Hotblock>

                        </section>
                        <Vipblock></Vipblock>
                        <Category></Category>
                        <Recommend></Recommend>
                    </section>

                </main>


            </React.Fragment>


        )
    }

    componentDidMount() {
        this.props.getSwiper(JSON.parse(localStorage.city).city_id);

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

export default withRouter(connect(mapStateToProps, mapDidToProps)(Page))