import React from 'react';
import {connect} from 'react-redux'
import '../assets/css/Search.css'
import HotSearch from '../components/Search/HotSearch'
import Search from '../components/Search/Search'
import Creator from "../store/actionCreator/Search";
import {bindActionCreators} from 'redux'

class Searched extends  React.Component{
    render() {

        return(
            <div id={"qxy_box"}>
                    <Search {...this.props}></Search>


                    <HotSearch></HotSearch>

                <section className={"qxy_recommend_wrap"} >
                    <ul>
                        {
                            this.props.searchList.map((v,i)=>(
                                <li key={i}>
                                    <img src={v.pic} alt=""/>
                                    <div>
                                        <p>{v.show_time_top}</p>
                                        <h3 dangerouslySetInnerHTML={{__html: v.name}}></h3>
                                        <p>{v.venue_name}</p>
                                        <p>￥<strong>{v.min_price}</strong>起</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>


        )
    }

}
function mapStateToProps(state,props) {
    return {
        hotsearchList:state.searchList.hotsearchList,
        searchList:state.searchList.searchList,
    }
}
function matDispatchToProps(dispatch,props) {
    return  bindActionCreators(Creator,dispatch)
}
export default connect(mapStateToProps,matDispatchToProps)(Searched)
