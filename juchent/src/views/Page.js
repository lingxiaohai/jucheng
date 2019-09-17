import React,{Component} from "react"
import Search from "../components/home/Search"
 import "../assets/css/home.css"
import "../assets/css/main.css"
import {connect}  from "react-redux"
import {bindActionCreators} from "redux"
 class Page extends Component{

    render() {
        console.log(this.props)
        return(
            <>
               <Search></Search>
                <main className={"main-wrap"}>
                <section className={"main-wrap__content"}>
                    <div className="banner-wrap home-banner-wrap">
                        <div className="swiper-container swiper-container-horizontal">

                        </div>
                    </div>
                </section>

                </main>
                <input type="button" value={"跳转演唱会"} onClick={()=>{this.props.history.push("/show/showsLibrary")}}/>
            </>
        )
    }
}
function mapStateToProps(state,props) {
    console.log(state)
    return{
        state
    }
}
function mapDidToProps(dispatch) {
    return{

    }
}
export default connect(mapStateToProps,mapDidToProps)(Page)