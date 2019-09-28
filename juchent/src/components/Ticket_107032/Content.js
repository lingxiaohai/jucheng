import React,{Component} from 'react';
// import {withRouter} from 'react-router-dom'
import axios from 'axios';
import store from '../../store';
import {changeTitInfo} from '../../store/actionCreator/Ticket_107032'

class Content extends Component{
    constructor(){
        super();
        this.state = {
            titInfo : store.getState().TitInfo.titInfo
        } 
    }
    async componentDidMount(){
        const {data} = await axios.get('https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=107032&version=6.0.5&referer=2')
        // console.log(130,data.data)
        // console.log(data.data.schedular_id)
       
        store.dispatch(changeTitInfo(data.data));
        this.setState({
            titInfo : store.getState().TitInfo.titInfo
        })
            
        
        
    }
    render(){
        // console.log(112233,this.state.titInfo)
        let titInfo = this.state.titInfo;
        let share_data = titInfo.share_data || {};
        let static_data = titInfo.static_data || {};
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
                                <span data-v-04d278ca className="t-brief__primary__fg__content__info__price__range">{static_data.price_range}</span>
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
}

export default Content;