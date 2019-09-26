import React from "react";
import { Divider } from "antd";
import "../assets/css/theindex.css"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import pageList from "../store/actionCreator/juyuan"

class TheIndex extends React.Component{
    render(){
       let num=this.props.location.state.num
        return(
            <div>
            <div style={{overflow:'hidden',marginTop:'45px'}}>
     
            <div className="cjchadow-bog"></div>
        
            <div className="cjnavbar">
                <div className="cjnavbar-innre">
                    <div className="cjleft"><a className="cjlefta" onClick={()=>{
                        this.props.history.go(-1)
                    }} ><span style={{fontSize:"23px"}} className="iconfont">&#xe75b;</span></a></div>
                    <div className="cjcenter" style={{fontSize:"17px"}}>{this.props.wutaiListname.name}</div>
                    <div className="cjright"><i className="iconfont"  style={{fontSize:"26px",fontWeight:"600"}}>&#xe608;</i></div>
                </div>
            </div>
         
            <div className="cjswiper-slide swiper-slide-active" style={{overflow: "hidden"}}>
                <div className="cjbox">
                    <a className="cjlink" href="#">
                        <img className="cjswiper-slideimg" data-src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg" alt="" title=""/>
                    </a>
                </div>
            </div>
        
            <div className="cjcategory-container">
                <div className="cjcategory-wrap">
                     <a > 
                     <div  className="cjimgbox" onClick={()=>{
                        this.props.history.push({ pathname:'/Theater/showList',state:{tid:num}})
                    }}><img src={require("../assets/img/icon-show.png")} alt="" srcset=""/></div>
                        <p className="cjimgtext">演出</p>
                     </a>
                    <a href="#">
                            <div className="cjimgbox"><img src={require("../assets/img/icon-calendar.png")}  alt="" srcset=""/></div>
                            <p className="cjimgtext">日历</p>
                    </a>
                    <a href="#">
                        <div className="cjimgbox"><img src={require("../assets/img/icon-theater.png")} alt="" srcset=""/></div>
                        <p className="cjimgtext">剧院</p>
                    </a>
                    <a href="#">
                            <div className="cjimgbox"><img src={require("../assets/img/icon-offer.png")} alt="" srcset=""/></div>
                            <p className="cjimgtext">特惠</p>
                    </a>
                </div>
            </div>
            <div className="cjdivtext">
                <h3>热门演出</h3>
            </div>
            {
                this.props.wutailist.map((v,i)=>{
                    if(i<4){
                        return(
                            <div className="cjshow-wrap" key={i} >
                            <div className="cjlist-wrap">
                                <a className="cjshow-item clearfix" >
                                    <div  className="cjshow-left">
                                        <img src={v.pic} alt=""/>
                                        <span className="cjicon-img"></span>
                                        <span className="cjlogo_i"></span>
                                    </div>
                                    <div className="cjshow-right">
                                        <p className="cjtitle ">{v.schedular_name}</p>
                                        <p className="cjshow-time ">
                                            <span className="cjday ">2019.09.17 - 2019.09.22</span>
                                        </p>
                                        <p className="cjshow-venue ">
                                            <span className="cjvunue ">{this.props.wutaiListname.name}</span>
                                        </p>
                                        <p className="cjft0 price">
                                            <span className="cjfs24 mr8">¥</span>
                                            <span className="cjfs32">{this.filters(v.id)}</span>
                                            <span className="cjfs24 mr8">起</span>
                                        </p>
                                    </div>
                                </a>
                               
                            </div>
                        </div>
                        )    
                    }
                 
                })
            }
            
            <div className="cjall-show">
                <a  className="cjall-a" onClick={()=>{
                    this.props.history.push({ pathname:'/Theater/showList',state:{tid:num}})
                }}>
                查看全部演出 
                </a>
            </div>
        
         </div>
     
        </div>
        )
    }
    filters(v){
        v=v.toString();
        return v.slice(0,3)
    }
    componentWillMount() {
        this.props.getwutailist(this.props.location.state.num);
    }
}
function mapStateToProps(state, props) {
    return {
    
        wutaiListname: state.JyuanList.wutai_list ?state.JyuanList.wutai_list:[],
         wutailist:state.JyuanList.wutailist ?state.JyuanList.wutailist:[]
    }

}

function mapDidToProps(dispatch) {
    return bindActionCreators(pageList, dispatch);
}

export default connect(mapStateToProps, mapDidToProps)(TheIndex)
