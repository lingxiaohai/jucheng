import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../../store/index'
import '../../assets/css/ShowLibrary.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router,Route,NavLink,Switch} from "react-router-dom"
import Creator, {changeShowcategoryList, changeShowcategoryTypeList} from "../../store/actionCreator/Show";
import City from './CityList'
class ShowTypeList extends React.Component{
    render() {
        return(
            <div id="qxy_show_type_wrap">
                <ul id={"typeListul"}>
                            <li className="typeli" onClick={this.clicked.bind(this,{id:0,cityid:this.props.cityid})} >
                                全部
                            </li >
                            {
                                this.props.show_category_list.map((v,i)=>(
                                    <li key={i} onClick={this.clicked.bind(this,{id :v.category_id,cityid:this.props.cityid})}> {v.name}</li>
                                ))
                            }
                </ul>
                {/*<div>北京<i className="iconfont icondibiao"></i></div>*/}
                <City></City>
            </div>
        )
    }
    clicked({id,cityid},e){
        let typeul =e.currentTarget.parentNode.children;
        for (let i=0;i<typeul.length;i++){
                typeul[i].className="";
        }
        e.currentTarget.className="typeli";
        this.props.getcategoryList({id,cityid})
    }
    componentDidMount() {
        let paramstypelistid =this.props.id;
        // console.log(paramstypelistid,"--------------")
        // // console.log(this.props,"***********")
        this.props.getcategorytypeList({id:0,cityid:0});
    }
}

function mapStateToProPs(state,props) {
    return{
        cityList: state.ShowTypeList.cityList,
        show_category_list:state.ShowTypeList.show_category_list, //演出类型
        category_list:state.ShowTypeList.category_list,
        category_list_page:state.ShowTypeList.category_list_page,
        id:state.ShowTypeList.id,
        cityid:state.ShowTypeList.cityid,

    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(Creator,dispatch)
}
export default connect(mapStateToProPs,mapDispatchToProps)(ShowTypeList)