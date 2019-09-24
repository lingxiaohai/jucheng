import React,{Component} from "react";
import "../assets/css/ExclusiveDiscount.css"
export default class ExclusiveDiscount extends Component{
    render(){
        return (
            <div className="discount">
                <div className="discount_head">
                    <section className="title">
                        <span className="title_text">专享折扣</span>
                        <i className="iconfont icon-icon_left title_back"></i>
                        <i className="iconfont icon-sangedian title_ellipsis"></i>
                    </section>
                </div>
            </div>
        )
    }
}