import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../store/index'
import '../assets/css/ShowLibrary.css'
import {changeShowcategoryTypeList,changeShowcategoryList,changeShowcategoryListMore,changeShowcategoryListPage} from '../store/actionCreator/Show'
import ShowTypeList from  '../components/Show/ShowTypeList'
import ShowList from  '../components/Show/ShowList'
class showsLibrary extends React.Component{
    render() {
        // console.log(this.props.location.state,9999);
        return(
                <div>
                    <div id="qxy_box">
                        <div id="qxy_header">
                            <i className="iconfont iconright1" onClick={()=>{this.props.history.go(-1)}}></i>
                            <span>演出</span>
                            <i className="iconfont iconsangedian"></i>
                        </div>

                        <ShowTypeList> </ShowTypeList>

                        <ShowList id={this.props.location.state}></ShowList>

                    </div>
                </div>
        )
    }

}
// function mapStateToProPs(state,props) {
//
//     return{
//         show_category_list:state.ShowTypeList.show_category_list, //演出类型
//         category_list:state.ShowTypeList.category_list,
//         category_list_page:state.ShowTypeList.category_list_page,
//     }
// }
// function mapDispatchToProps(dispatch,props) {
//
//     return{
//         async getcategorytypeList(){
//             const {data} = await axios.get("/ShowTpeList/Search/getShowCategory?version=6.0.5&referer=2");
//             dispatch(changeShowcategoryTypeList(data.data.show_category_list))
//         },
//
//         async getcategoryList(id=0){
//             console.log(id);
//             console.log(`/ShowList/Show/Search/getShowList?category=${id}&city_id=5&page=${this.category_list_page}&keywords=&version=6.0.5&referer=2`);
//             const {data} = await axios.get(`/ShowList/Show/Search/getShowList?category=${id}&city_id=5&page=${this.category_list_page}&keywords=&version=6.0.5&referer=2`);
//             dispatch(changeShowcategoryList(data.data.list));
//         },
//
//     }
// }
export  default connect()(showsLibrary)
