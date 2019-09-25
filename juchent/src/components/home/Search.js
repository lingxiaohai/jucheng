import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import "../../assets/css/SelectCity.css"
class Search extends Component {
    state={
        city:"",
        init:""
    };
    componentDidMount() {
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
            <header className="head">
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