import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../../store/index'
import '../../assets/css/ShowLibrary.css'
import Creator,{changeShowcategoryList} from "../../store/actionCreator/Show";

class ShowList extends React.Component{

    render() {
        console.log(this.props.category_list,7777777777777)
        return(
            <section id="qxy_recommend_wrap">
                <ul>

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
                    <input type="button" value={"加载更多数据"} style={{background:"red"}} onClick={this.props.getcategoryList.bind(this.props,{id:this.props.id,index:this.props.category_list_page+1,cityid:this.props.cityid})}/>
                </ul>

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