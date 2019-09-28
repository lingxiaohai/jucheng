import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../../store/index'
import '../../assets/css/ShowLibrary.css'
import InfiniteScroll from "react-infinite-scroll-component";
import Creator,{changeShowcategoryList} from "../../store/actionCreator/Show";
const styles = {
    height: "100%",
    overflow: "none"
};
class ShowList extends React.Component{
    ListArr = [];
    index=1;
    state = {
        hasMore: true
    };

    fetchMoreData = () => {
        setTimeout(() => {
            this.props.getcategoryList({id:this.props.id,index:this.props.category_list_page+1,cityid:this.props.cityid})
        }, 500);
    };

    render() {
        return(
            <section id="qxy_recommend_wrap" style={{marginTop:"0"}}>
                {/*<ul>*/}

                {/*    {*/}
                {/*        this.props.category_list.map((v,i)=>(*/}

                {/*            <li key={i} onClick={()=>{this.props.history.push("/ticket/"+v.schedular_id)}}>*/}
                {/*                <img src={v.pic} alt=""/>*/}
                {/*                <div>*/}
                {/*                    <p>{v.show_time_top}</p>*/}
                {/*                    <h3>{v.name}</h3>*/}
                {/*                    <p>{v.venue_name}</p>*/}
                {/*                    <p>￥<strong>{v.min_price}</strong>起</p>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*    <input type="button" value={"加载更多数据"} style={{background:"red"}} onClick={this.props.getcategoryList.bind(this.props,{id:this.props.id,index:this.props.category_list_page+1,cityid:this.props.cityid})}/>*/}
                {/*</ul>*/}
                <InfiniteScroll
                                style={styles}
                                dataLength={this.props.category_list.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                loader={<div className="recommend-logoding"></div>}
                                endMessage={
                                    <button className="recommend-block__more">
                                        查看更多演出
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAMAAACDMFxkAAAAM1BMVEUAAAD/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTIMtL8tAAAAEXRSTlMA/AW1wr2r3K+fy6YKz5OSB/KUf8wAAABKSURBVAjXbc7bDoAwCAPQwjbBzdv/f60PSsUoTyehTQorivtcaG0yIVxedvxlqozkOWU2ultwWS3UZb90sKaNqkmDX/8MewTz0AmWCAFo1w/zpQAAAABJRU5ErkJggg=="
                                            className="recommend-block__more__icon"/></button>
                                }
                >

                    <ul className={"qxy_ul_recommend"} style={{padding:"0"}}>

                        {
                            this.props.category_list.map((v,i)=>(

                                <li key={i} onClick={()=>{this.props.history.push("/ticket/"+v.schedular_id)}}>
                                    <img src={v.pic} alt=""/>
                                    <div>
                                        <p>{v.show_time_top}</p>
                                        <h3>{v.name}</h3>
                                        <p>{v.venue_name}</p>
                                        <p>￥<strong>{v.min_price}</strong>起</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>

                </InfiniteScroll>
            </section>
        )
    }



    componentDidMount() {
        this.props.getcategoryList({index:1});
    }
}

function mapStateToProPs(state,props) {

    return{
        cityList: state.ShowTypeList.cityList,
        show_category_list:state.ShowTypeList.show_category_list, //演出类型
        category_list:state.ShowTypeList.category_list,
        category_list_page:state.ShowTypeList.category_list_page,
        id:state.ShowTypeList.id,
    }
}
function mapDispatchToProps(dispatch,props) {
  return bindActionCreators(Creator,dispatch)
}
export default connect(mapStateToProPs,mapDispatchToProps)(ShowList)