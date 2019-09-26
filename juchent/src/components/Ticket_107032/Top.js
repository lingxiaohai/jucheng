import React,{Component} from 'react';
import {
    withRouter
} from 'react-router-dom'


class Top extends Component{
     // 返回上级
     goBack(){
        this.props.history.go(-1);
    }
    // 返回主页
    goHome(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div data-v-04d278ca className="t-brief__primary__fg__title">
                <span data-v-04d278ca className="t-brief__primary__fg__title__text">演出详情</span>
                <i onClick={this.goBack.bind(this)} data-v-04d278ca className="iconfont icon-zuo t-brief__primary__fg__title__back"></i>
                <i  data-v-04d278ca className="iconfont icon-tuichu t-brief__primary__fg__title__share"></i>
                <i onClick={this.goHome.bind(this)} data-v-04d278ca className="iconfont icon-fangzi t-brief__primary__fg__title__home"></i>
            </div>
        )
    }
}
export default withRouter(Top);