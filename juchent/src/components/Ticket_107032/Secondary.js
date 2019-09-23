import React,{Component} from 'react';
import axios from 'axios';
import store from '../../store';
import {changeTitInfo} from '../../store/actionCreator/Ticket_107032'

class Secondary extends Component{
    constructor(){
        super();
        this.state = {
            secondaryInfo : store.getState().TitInfo.titInfo
        }
    }
    async componentDidMount(){
        const {data} = await axios.get('https://api.juooo.com/Show/Search/getShowList?category=79&city_id=1&version=6.0.5&referer=2');
        store.dispatch(changeTitInfo(data.data));
        this.setState({
            secondaryInfo : store.getState().TitInfo.titInfo
        })
    }
    render(){
        const secInfo = this.state.secondaryInfo || {};
        const list = secInfo.list || [];
        const item = list.find(v=>v.schedular_id === 107033) || {};
        // console.log(item)
        return(
            <div data-v-04d278ca className="t-brief__secondary">
                <div data-v-04d278ca className="t-brief__secondary__info">
                    <div data-v-04d278ca className="t-brief__secondary__info__date-time-wrapper">
                        <div data-v-04d278ca className="t-brief__secondary__info__date-time">
                            <span data-v-04d278ca className="t-brief__secondary__info__date-time__date">
                               {
                                   item.show_time_top
                               }
                            <i data-v-04d278ca className="iconfont icon-you t-brief__secondary__info__date-time__arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div data-v-04d278ca className="t-brief__secondary__info__place">
                        {
                            item.venue_name
                        }
                    </div>
                </div>
                <div data-v-04d278ca className="t-brief__secondary__pointer"></div>
            </div>
        )
    }
}
export default Secondary;