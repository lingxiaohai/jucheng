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

export  default connect()(showsLibrary)
