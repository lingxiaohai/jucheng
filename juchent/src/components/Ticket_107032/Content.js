import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Creator from '../../store/actionCreator/Ticket_107032'
// import {withRouter} from 'react-router-dom'
// import axios from 'axios';
import store from '../../store';
import {changeTitInfo} from '../../store/actionCreator/Ticket_107032'


class Content extends Component{
    

    render(){
        // console.log(112233,this.state)
        // const picInfo = this.state.TitInfo.picInfo || {}
        // console.log(333333,picInfo)
        const picInfo = this.props.picInfo || {};
        const share_data = picInfo.share_data || {};
        const static_data = picInfo.static_data || {};
        // console.log(static_data,852)

        return(

            <>
                <div data-v-04d278ca className="t-brief__primary__fg__content">
                    <div data-v-681cfcc8 data-v-04d278ca className="t-cover t-brief__primary__fg__content__cover">
                        <img  className="t-cover__img" data-v-681cfcc8 
                        src={share_data.share_pic}
                        alt=""
                        />
                    </div>
                    <div data-v-04d278ca className="t-brief__primary__fg__content__tag">
                        <div data-v-04d278ca className="t-juooo_sponsor">
                            <i className="t-logo_i"></i>
                        </div>
                    </div>
                    <div data-v-04d278ca className="t-brief__primary__fg__content__info">
                        <div data-v-04d278ca className="t-brief__primary__fg__content__info__name">
                            <div data-v-04d278ca className="t-brief__primary__fg__content__info__name">
                                {share_data.share_title}
                            </div>
                            <div data-v-04d278ca className="t-brief__primary__fg__content__info__tag-wrapper">
                                <div data-v-04d278ca className="t-brief__primary__fg__content__info__tag"></div>
                            </div>
                            <div data-v-04d278ca className="t-brief__primary__fg__content__info__price">
                                <span data-v-04d278ca className="t-brief__primary__fg__content__info__price__range">
                                     {static_data.price_range}
                                </span>
                                <span data-v-04d278ca className="t-brief__primary__fg__content__info__price__type">
                                    <span data-v-04d278ca className="t-brief__primary__fg__content__info__price__type__plus"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
    componentDidMount(){
        // console.log(this.props,666666);
        // let schedularId = this.props.match.params.schedularId || this.props.schedularId
        this.props.getSchedularId(this.props.schedularId)
    }
    
}

function mapStateToProps(state,props){
    // console.log(state,88888888888);
    return {
        schedularId : state.TitInfo.schedularId,
        picInfo : state.TitInfo.picInfo
    }
}
function mapDispatchToProps (dispatch, props){
    return bindActionCreators(Creator,dispatch)
}

 export default connect(mapStateToProps, mapDispatchToProps)(Content);