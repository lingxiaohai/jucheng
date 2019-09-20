import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Creator from '../../store/actionCreator/Search/index'
class Search extends React.Component{
    render() {

        return(
            <header id={"qxy_headers"}>
                <div className={"qxy_search-ipt"}>
                    <span className={"qxy_search-icon"}> </span>
                    <form action="">
                        <input type="search"  placeholder={"搜索热门演出"} className={"qxy_text"} onChange={this.keyup.bind(this)} ref={"search"}/>
                    </form>
                    <span className={"qxy_cancel-icon"} onClick={this.empty.bind(this)}> </span>
                </div>
                <span className={"qxy_cancel"} onClick={()=>{this.props.history.push("/")}}>取消</span>
            </header>

        )
    }
    empty(){
        this.refs.search.value=null;

        this.keyup()
    }
    keyup(){
        if (this.refs.search.value.length>0){
            const warp = document.getElementsByClassName("qxy_default-wrap")[0];
            const ullist = document.getElementsByClassName("qxy_recommend_wrap")[0];
            warp.style.display="none";
            ullist.style.display="block";
        }else {
            const warp = document.getElementsByClassName("qxy_default-wrap")[0];
            const ullist = document.getElementsByClassName("qxy_recommend_wrap")[0];
            warp.style.display="block"
            ullist.style.display="none";
        }
        let str = this.refs.search.value;
        this.props.getSearchContent(str)
    }
     componentDidMount() {
        this.keyup()

    }
}
function mapStateToProps(state,props) {
    return{
        hotsearchList:state.searchList.hotsearchList,
        searchList:state.searchList.searchList,
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(Creator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)