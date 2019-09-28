import React,{Component} from "react";
import "../assets/css/ExclusiveDiscount.css"
import axios from "axios"
import {connect} from "react-redux"
import {bindActionCreators}   from "redux"
import ExclusiveDiscounts from "../store/actionCreator/ExclusiveDiscount"
class ExclusiveDiscount extends Component{

    // async componentDidMount() {
    //     const {data} = await axios.get("https://api.juooo.com/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.6&referer=2");
    //     console.log(data,1212)
    // }

    componentDidMount(){
        this.props.getExclusive();
    }
    render(){
        console.log(this.props)
        return (
            <div className="discount">
                <div className="discount_head">
                    <section className="title" onClick={()=>{
                        this.props.history.push("/")
                    }}>
                        <span className="title_text">专享折扣</span>
                        <i className="iconfont icon-icon_left title_back" onClick={()=>{

                        }}></i>
                        <i className="iconfont icon-sangedian title_ellipsis"></i>
                    </section>
                </div>
                <div className="discount-body">
                    <div className="tab-box">
                        <div className="tab">
                            <ul className="slide-tab">
                                <li className="slide-tab__item active">全部</li>
                                <li className="slide-tab__item">演唱会</li>
                                <li className="slide-tab__item">音乐会</li>
                                <li className="slide-tab__item">话剧歌剧</li>
                                <li className="slide-tab__item">儿童亲子</li>
                                <li className="slide-tab__item">音乐剧</li>
                                <li className="slide-tab__item">戏曲综艺</li>
                                <li className="slide-tab__item">展览</li>
                                <li className="slide-tab__item">舞蹈芭蕾</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-right">
                        <div className="slide-tab-right">
                            <span className="separator">|</span>
                            <span className="slide-tab-right__txt">筛选</span>
                            <i className="iconfont icon-icon_filter"></i>
                        </div>
                    </div>
                    <div className="discount-list-box">
                        <div className="wrapper">
                            <ul className="discount-scroll__ul">
                                {this.props.list.map(item=>
                                    <li className="discount__item">
                                        <div className="exclusive-card">
                                            <div className="item exclusive-card__base">
                                                <img
                                                    src={item.pic}
                                                    alt="" className="item__cover"/>
                                                <div className="item__info">
                                                    <div className="item__info__date-week">
                                                        <span className="item__info__date-week__date">{item.date}</span>
                                                    </div>
                                                    <div className="item__info__name">
                                                        <div className="item__info__name__content text-double">
                                                            {item.schedular_name}
                                                        </div>
                                                    </div>
                                                    <div className="item__info__place">
                                                        {item.city_name} | {item.venue_name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="exclusive-card__extra-wrapper">
                                                <div className="exclusive-card__extra">
                                                    <span className="exclusive-card__extra__price">￥{item.min_price}</span>
                                                    <span className="exclusive-card__extra__price-desc">起</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="discount__item__bottom">
                                            <p className="discount__item__bottom__discount">
                                                <span className="discount__item__bottom__discount--light">{item.min_discount}</span>折起
                                            </p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        list:state.ExclusiveDiscount.Exclusive
    };
}
function MainFeng(dispatch) {
    return bindActionCreators(ExclusiveDiscounts,dispatch)
}
export default connect(mapStateToProps,MainFeng)(ExclusiveDiscount)