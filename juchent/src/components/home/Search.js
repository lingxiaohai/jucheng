import React,{Component} from "react"
import {Link} from "react-router-dom"
class Search extends Component {

    render() {

        return (

            <header className="head">
                <div className="head-address">
                    <strong className="head-address__icon"></strong>
                    <span className="head-address__name text-single">深圳</span>
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
export default Search