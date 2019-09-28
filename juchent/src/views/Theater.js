import React, {Component} from "react"
import "../assets/css/theatre.css"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import pageList from "../store/actionCreator/juyuan"
import {NavLink,Route,Switch} from "react-router-dom"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { from } from "rxjs"

class Theater extends Component {
    render() {
        return (
            <div>
                   <header className="cjheader">

                    <h3 className="cjtext-single" style={{lineHeight: "1.17rem"}}>剧院</h3>
                </header>
                <div className="theater-body">
                    <div className="wrapper">
                        <div className="theater-list">
                            <ul className="theater-ul" style={{paddingInlineStart: '0'}}>
                                {this.props.juyuanList.theatre_list.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <li className="theater-li">
                                                <div className="theater-info-shows">
                                                    <div className="theater-info">
                                                        <a href="#" className="theater-pic-name-count">
                                                            <div className="theater-pic-wrap">
                                                                <img src={v.pic} className="theater-pic"/>
                                                            </div>
                                                            <div className="theater-name-count-wrap">
                                                                <p className="theater-name">{v.name}</p>
                                                                <p className="theater-count">{v.count}场在售演出</p>
                                                            </div>
                                                        </a>
                                                     
                                                        
                                                        <a  className="theater-link" onClick={()=>{
                                                            this.props.history.push({ pathname:'Theater/index',state:{num:v.id}})
                                                        }}>
                                                            <img className="theater-more-btn"
                                                                 src={require("../assets/img/as.png")} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="theater-shows">
                                                        <div className="swiper-container" >
                                                            <div className="swiper-wrapper lis1">
                                                                {
                                                                    v.showList.map((j, i) => {
                                                                        return (

                                                                                <div className="swiper-slide" id="lis" key={i} >
                                                                                    <div className="theater-show-date">
                                                                                        <p className="show-date">{j.show_time}</p>
                                                                                        <span className="dot"></span>
                                                                                    </div>
                                                                                    <a href="#"
                                                                                       className="theater-show-pic">
                                                                                        <img src={j.pic} alt=""
                                                                                             className="show-pic"/>
                                                                                    </a>

                                                                                </div>


                                                                        )
                                                                    })
                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


    componentDidMount() {
        this.props.getjuyuanlist();
    }
    componentDidUpdate(){
        if(this.swiper){
            this.swiper = null;
        }
        this.swiper=   new Swiper(".swiper-container",{
            autoplay: false,
            freeMode : true,
            autoHeight: true,
            freeModeMomentum : false,
            freeModeSticky : true,
            centeredSlides : false,
            slidesPerView : "auto",
        });

    }
}

function mapStateToProps(state, props) {

    return {
        juyuanList: state.JyuanList
    }
}

function mapDidToProps(dispatch) {
    return bindActionCreators(pageList, dispatch);

}

export default connect(mapStateToProps, mapDidToProps)(Theater)