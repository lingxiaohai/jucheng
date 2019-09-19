import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../store/index'
import '../assets/css/ShowLibrary.css'
import {changeShowcategoryTypeList,changeShowcategoryList,changeShowcategoryListMore,changeShowcategoryListPage} from '../store/actionCreator/Show'
import ShowTypeList from  '../components/Show/ShowTypeList'
import ShowList from  '../components/Show/ShowList'


import { Popover, NavBar, Icon } from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class showsLibrary extends React.Component{
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        console.log(opt.props.value);
        this.setState({
            visible: true,
            selected: opt.props.value,
        },()=>{
            this.props.history.push(`${opt.props.value}`)
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        // console.log(this.props.location.state,9999);
        return(
                <div>
                    <div id="qxy_box">
                        <div id="qxy_header">
                            <i className="iconfont iconright1" onClick={()=>{this.props.history.go(-1)}}></i>
                            <span>演出</span>
                            <div  >
                                <NavBar
                                    style={{background:"#f5f5f9",color:"black",height:"42px"}}
                                    rightContent={
                                        <Popover mask
                                                 overlayClassName="fortest"
                                                 overlayStyle={{ color: 'currentColor' ,width:"140px",height:"88px",right:"10px"}}
                                                 visible={this.state.visible}
                                                 overlay={[
                                                     (<Item key="4" value="/"  icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId" style={{ whiteSpace: 'nowrap' ,height:"44px"}}>主页</Item>),
                                                     (<Item key="5" value="/my" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' ,height:"44px"}}>我的聚橙</Item>),
                                                 ]}
                                                 align={{
                                                     overflow: { adjustY: 0, adjustX: 0 },
                                                     offset: [-10, 0],
                                                 }}
                                                 onVisibleChange={this.handleVisibleChange}
                                                 onSelect={this.onSelect}
                                        >
                                                <i className="iconfont iconsangedian"></i>
                                        </Popover>
                                    }
                                >
                                </NavBar>
                            </div>
                        </div>

                        <ShowTypeList> </ShowTypeList>

                        <ShowList > </ShowList>

                    </div>
                </div>
        )
    }

}

export  default connect()(showsLibrary)



