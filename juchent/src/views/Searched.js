import React from 'react';
import {connect} from 'react-redux'
import '../assets/css/Search.css'
class Searched extends  React.Component{
    render() {
        return(
            <div id={"qxy_box"}>
                    <header id={"qxy_headers"}>
                        <div className={"qxy_search-ipt"}>
                            <span className={"qxy_search-icon"}> </span>
                            <form action="">
                                <input type="search" placeholder={"搜索热门演出"} className={"qxy_text"}/>
                            </form>
                            <span className={"qxy_cancel-icon"}> </span>
                        </div>
                    </header>
            </div>
        )
    }
}
export default connect()(Searched)