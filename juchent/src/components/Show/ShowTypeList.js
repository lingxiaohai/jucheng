import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../../store/index'
import '../../assets/css/ShowLibrary.css'
import { BrowserRouter as Router,Route,NavLink,Switch} from "react-router-dom"
import {changeShowcategoryList, changeShowcategoryTypeList} from "../../store/actionCreator/Show";

class ShowTypeList extends React.Component{
    render() {

        return(
            <div id="qxy_show_type_wrap">
                <ul>
                    <Router>
                        <li className="active" >
                            <NavLink to={{pathname:"/show/showsLibrary",state:0}}>全部</NavLink>
                        </li>
                        {
                            this.props.show_category_list.map((v,i)=>(
                                <li key={i} > <NavLink to={{
                                    pathname:"/show/showsLibrary",
                                    state:
                                        v.category_id

                                }}>{v.name}--{v.category_id}</NavLink></li>

                            ))
                        }

                    </Router>

                </ul>
                <div>北京<i className="iconfont icondibiao"></i></div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getcategorytypeList();
        this.props.getcategoryList();
    }
}

function mapStateToProPs(state,props) {
    return{
        show_category_list:state.ShowTypeList.show_category_list, //演出类型
        category_list:state.ShowTypeList.category_list,
    }
}
function mapDispatchToProps(dispatch,props) {

    return{
        async getcategorytypeList(){
            const {data} = await axios.get("/ShowTpeList/Search/getShowCategory?version=6.0.5&referer=2");
            dispatch(changeShowcategoryTypeList(data.data.show_category_list))
        },
        async getcategoryList(){
            const {data} = await axios.get(`/ShowList/Show/Search/getShowList?category=${this.id}&city_id=5&page=1&keywords=&version=6.0.5&referer=2`);
            dispatch(changeShowcategoryList(data.data.list));
        },
    }
}
export default connect(mapStateToProPs,mapDispatchToProps)(ShowTypeList)