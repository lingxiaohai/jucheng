import React from 'react'
import { Drawer, Button, Radio } from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Creator from '../../store/actionCreator/Show/index'

 class CityList extends React.Component{
    constructor(){
        super()
        this.state={
            num:0
        }
    }
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {

        return (
            <div
            >
                <div onClick={this.showDrawer} id={"titleName"}>全国<i className="iconfont icondibiao"></i></div>
                <Drawer

                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}

                >
                    <div style={{position:"relative"}}>
                        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>城市</h3>
                        <hr/>
                        <ul id={"qxy_ul"}>
                            <li className={"qxy_li cityli"}  onClick={this.clicks.bind(this,0)} >全国</li>

                            {
                                this.props.cityList.map((v,i)=>(
                                    <li className={"qxy_li"} key={v.city_id}   onClick={this.clicks.bind(this,v.city_id)}>

                                        {v.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <div  className={"qxy_div"}>
                            <span className={"qxy_span_left"} onClick={()=>{
                                this.setState({
                                    num:0
                                })
                            }}>重置</span>
                            <span  className={"qxy_span_right"} onClick={this.send.bind(this,this.state.num)} >确定</span></div>
                    </div>
                </Drawer>
            </div>
        );
    }
     send(cityid){
         this.onClose();
         this.props.gitcityId(cityid,this.props.id);
     }
     clicks(id,e){
        let li=document.getElementById("qxy_ul").children;
         for (let i=0;i<li.length;i++){
             li[i].className="qxy_li";
         }
         e.currentTarget.className="qxy_li cityli";

        this.setState({
            num:id
        });
        let title =document.getElementById("titleName");
        if (id ===0){
            title.innerHTML="全国"
        } else {
            let name= this.props.cityList.find(x => x.city_id === id).name;
            title.innerHTML=name+ "<i className=\"iconfont icondibiao\" style='width: 12px;height: 12px;color: red;font-size: 12px'></i>"
        }

     }
    async componentDidMount() {
            this.props.getcityList()
    }
}
function mapStateToPorps(state,props) {
    return {
        cityList: state.ShowTypeList.cityList,
        show_category_list:state.ShowTypeList.show_category_list, //演出类型
        category_list:state.ShowTypeList.category_list,
        category_list_page:state.ShowTypeList.category_list_page,
        id:state.ShowTypeList.id,
        cityid:state.ShowTypeList.cityid,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( Creator,dispatch)
}
export default connect(mapStateToPorps,mapDispatchToProps)(CityList)