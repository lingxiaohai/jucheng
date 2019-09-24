import React from "react";
import "../assets/css/thenShop.css"
import {NavLink,Route,Switch} from "react-router-dom";
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import pageList from "../store/actionCreator/juyuan"
class TheShpList extends React.Component{
    state={
        changeRed:0,
        navLists:[
            {
              text:"全部",  
              id:0,
            },
            {
            text:"演唱会",
            id:35
           },
             {
            text:"音乐会",
            id:36
           },
             {
            text:"话剧歌剧",
            id:37
           },
             {
            text:"儿童亲子",
            id:38
           },
             {
            text:"音乐剧",
            id:79
           },
             {
            text:"舞蹈芭蕾",
            id:86
           },
             {
            text:"戏曲综艺",
            id:91
           },
             {
            text:"舞蹈芭蕾",
            id:99
           },
        ],
    }

    render(){
       
        let _tid=this.props.location.state.tid
        return(
            <div className="body">
            <div className="search-top">
                <div className="search-nav">
                    <div className="search_nav_wrap">
                        {
                            this.state.navLists.map((v,i)=>{
                                return (
                                        <NavLink onClick={()=>{
                                            this.props.getwutaidaohanlist(v.id,_tid)
                                            
                                            this.setState({
                                                changeRed:i
                                            })
                                        }} to={{path:'/Theater/showList',state:{tid:_tid,category:v.id}}}  key={v.id} className={["search_nav_item ",i===this.state.changeRed?"active":null].join('')}>{v.text}</NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div id="cjmain">
            {
                this.props.wutaiList.map((v)=>{
                    return(
                        <div className="show-wrap" key={v.id}>
                        <div className="list-wrap" >
                        <a href="#" className="show-item clearfix ">
                            <div  className="show-left">
                                <img src={`https://image.juooo.com//${v.pic}`} alt=""/>
                                <span className="icon-img"></span>
                                <span className="logo_i"></span>
                            </div>
                            <div className="show-right">
                                <p className="title ">{v.schedular_name}</p>
                                <p className="show-time ">
                                    <span className="day ">{v.show_time}</span>
                                </p>
                                <p className="show-venue ">
                                    <span className="vunue ">{v.name}</span>
                                </p>
                                <p className="ft0 price">
                                    <span className="fs24 mr8">¥</span>
                                    <span className="fs32">{v.min_price}</span>
                                    <span className="fs24 mr8">起</span>
                                </p>
                            </div>
                        </a>
            
                    </div>
                        </div>
                    )
                })
            }
            </div>
                      
            </div>
        )
    }
    componentWillMount(){
        this.props.getwutaidaohanlist(0,this.props.location.state.tid)
    }
}
function mapStateToProps(state, props) {
    return {
        wutaiList:state.JyuanList.wutaidaohan?state.JyuanList.wutaidaohan:[],
    }

}

function mapDidToProps(dispatch) {
    return bindActionCreators(pageList, dispatch);
}

export default connect(mapStateToProps, mapDidToProps)(TheShpList)