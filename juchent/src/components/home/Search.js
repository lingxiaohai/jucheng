import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import "../../assets/css/SelectCity.css"
class Search extends Component {
    state={
        city:"",
        init:""
    };
    componentDidMount() {
       let H= this.head.offsetHeight;
       let head = this.head
        window.onscroll = function () {
            let topScroll = document.body.scrollTop || document.documentElement.scrollTop;//滚动的距离,距离顶部的距离


            if (topScroll > H) {  //当滚动距离大于H时执行下面的东西
                // iconfont.style.color = "orange";
                // fontCol.style.cssText = "color:black;background:white";
                // search.style.cssText = "background:#D3D3D3;color:gray";
              head.style.cssText = "position:fixed;top:0;z-index:9999;background-color:white";
            } else {//当滚动距离小于H的时候执行下面的内容，也就是让导航栏恢复原状
                head.style = '';
                // iconfont.style = "";
                // fontCol.style = "";
                // search.style = "";
            }
        }
        //定位

        fetch("http://restapi.amap.com/v3/ip?key=\tccada76d919e5f09a40f58e5177d6f2c").then((res) => {
            if (res.ok) {

                res.text().then((data) => {
                    let detail = JSON.parse(data);
                    detail.city = detail.city ? detail.city : "全国";

                    this.setState({
                        init:(detail.city.length > 2 ? detail.city.substring(0, detail.city.length - 1):detail.city)
                    });

                    detail.city = localStorage.city ? JSON.parse(localStorage.city).city_name : detail.city;
                    this.setState({
                        city: (detail.city.length > 2 ? detail.city.substring(0, detail.city.length - 1) : detail.city)
                    })
                })
            }
        }).catch((res) => {
            console.log(res.status);
        });

    }

    render() {
        return (
            <header className="head" ref={el=>this.head=el}>
                <div className="head-address" onClick={()=>{
           this.props.history.push({
               pathname:"/index/selectCity",
               state: {
                 city:  this.state.city,
                  init:this.state.init
               }
           })
                }}>
                    <strong className="head-address__icon"></strong>
                    <span className="head-address__name text-single">{this.state.city}</span>
                </div>

                <div className="head-search" onClick={()=>{this.props.history.push("/search/index")}}>

                    <img src="https://m.juooo.com/static/img/nav_icon_search.f194288.png" alt=""
                         className="head-search__img" />
                        <span className="head-search__lab">搜索热门演出</span>
                </div>
                <span className="head-space">
                        <a href="https://m.juooo.com/Distributor/centre" className="head-space__block">
                            <img alt="图片" src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" />
                            </a>
                </span>
            </header>

        )
    }
}

export default withRouter(Search)