import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Creator from '../../store/actionCreator/Search/index'
class HotSearch extends  React.Component{
    render() {
        return(
            <div className={"qxy_default-wrap"}>

                <section className={"qxy_history-search"} style={{display:this.props.historyList.length>0?"block":"none"}}>
                    <h3 className={"qxy_history-search_clearfix"}>
                        <span className={"qxy_clearfix_left"}>历史搜索</span>
                        <span className={"qxy_clearfix_icon"}  onClick={this.deleteHistory.bind(this)}> </span>
                    </h3>
                    <ul className={"qxy_history_list"}>
                        {
                            this.props.historyList.map((v,i)=>(
                                <li key={i} onClick={this.Putin.bind(this,v)}>
                                    {v}
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section className={"qxy_hot-search"}>
                    <h3 className={"qxy_history-search_clearfix"}>
                        <span className={"qxy_clearfix_left"}>热门搜索</span>
                    </h3>
                    <ul className={"qxy_history_list"}>
                        {
                            this.props.hotsearchList.map((v,i)=>(
                                <li key={i} onClick={this.Putin.bind(this,v)} ref={"Li"}>
                                    {v}
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>

        )
    }
    deleteHistory(){
        this.props.deleteHistoryList()
    }
    Putin(values){
        let input =document.getElementsByClassName("qxy_text")[0];
        input .value=values;
        if (input .value.length>0){

            const warp = document.getElementsByClassName("qxy_default-wrap")[0];
            const ullist = document.getElementsByClassName("qxy_recommend_wrap")[0];
            warp.style.display="none";
            ullist.style.display="block";
        }else {

            const warp = document.getElementsByClassName("qxy_default-wrap")[0];
            const ullist = document.getElementsByClassName("qxy_recommend_wrap")[0];
            warp.style.display="block";
            ullist.style.display="none";

        }

        this.props.getHistoryList(values);
        this.props.getSearchContent(values)
    }

    componentDidMount() {
        this.props.getHotSearch();

    }
}
function mapStateToProps(state,props) {

    return {
        hotsearchList:state.searchList.hotsearchList,
        searchList:state.searchList.searchList,
        historyList:state.searchList.historyList,
    };

}
function matDispatchToProps(dispatch,props) {
    return  bindActionCreators(Creator,dispatch)
}
export default connect(mapStateToProps,matDispatchToProps)(HotSearch)