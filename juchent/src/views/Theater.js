import React,{Component} from "react"
import "../assets/css/theatre.css"
import {bindActionCreators} from "redux"
import {connect}  from "react-redux"
import pageList from "../store/actionCreator/juyuan"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Theater extends Component{

    render() {
        console.log(this.props.juyuanList.theatre_list)
        return(
    <div>
    <header className="cjheader">
    
    <h3 className="cjtext-single" style={{lineHeight:"1.17rem"}}>剧院</h3>
</header>
<div className="theater-body">
    <div className="wrapper">
        <div className="theater-list">
            <ul className="theater-ul" style={{paddingInlineStart:'0'}}>
                {this.props.juyuanList.theatre_list.map((v,i)=>{
                    return(
                        <div key={i}>
                        <li className="theater-li" >
                        <div className="theater-info-shows">
                            <div className="theater-info">
                                <a href="#" className="theater-pic-name-count">
                                    <div className="theater-pic-wrap">
                                            <img src={v.pic} className="theater-pic"/>
                                    </div>
                                    <div className="theater-name-count-wrap">
                                        <p className="theater-name">{v.name}</p> 
                                        <p  className="theater-count">{v.count}场在售演出</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="theater-link">
                                    <img  className="theater-more-btn" src={require("../assets/img/as.png")} alt=""/>
                                </a>
                            </div>
                            <div className="theater-shows">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper lis1">
                                        {
                                            v.showList.map((j,i)=>{
                                                return(
                                                    <div>
                                                    <div className="swiper-slide" id="lis">
                                                    <div className="theater-show-date">
                                                            <p className="show-date">{j.show_time}</p>
                                                            <span  className="dot"></span>
                                                    </div>
                                                    <a href="#" className="theater-show-pic">
                                                            <img src={j.pic} alt="" className="show-pic"/>
                                                    </a>
            
                                                 </div>
                                                         <div className="swiper-slide" id="lis" >
                                                    <div className="theater-show-date">
                                                            <p className="show-date"></p>
                                                            <span  className="dot"></span>
                                                    </div>
                                                    <a href="https://m.juooo.com/theatre/showList?tid=2" className="theater-show-pic">
                                                            <p className="swipertext">查看更多></p>
                                                    </a>
                                                </div>
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
        var mySwiper=new Swiper(".swiper-container",{
            loop:true,
            autoplay:true,
            width:113, 
       
        })
   }
}
function mapStateToProps(state,props) {

    return{
       juyuanList:state.JyuanList
    }
}
function mapDidToProps(dispatch) {
    return bindActionCreators(pageList,dispatch);

}
export default connect(mapStateToProps,mapDidToProps)(Theater)