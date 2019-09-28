import React from 'react'
import store from '../../store'
import axios from 'axios';
import {changeInfo} from '../../store/actionCreator/Ticket_107032/try'
import {NavLink} from 'react-router-dom'


class TourCity extends React.Component{
    constructor(){
        super();
        this.state = {
            tourCityInfo : store.getState().Try.initInfo
        }
    }
    async componentDidMount(){
       
        const {data} = await axios.get('https://api.juooo.com/Schedule/Schedule/getTour?show_id=40123&venue_id=1078&version=6.0.6&referer=2')
        // console.log(data.data)
        store.dispatch(changeInfo(data.data))
        this.setState({
            tourCityInfo : store.getState().Try.initInfo
        })     
    }
    
    render(){
        const tcInfo = this.state.tourCityInfo || {};
        // console.log(5566,tcInfo)
        const tour_list = tcInfo.tour_list || [];
        const sz = tour_list.find(v => v.city_name === "深圳") || {};
        const sh = tour_list.find(v => v.city_name === "上海") || {};

        return(
            <div data-v-a1f1bff8 data-v-277f55d8 className="t-tour-cities t-detail__tour-cities">
                <div data-v-a1f1bff8 className="t-tour-cities__desc">
                    <span data-v-a1f1bff8 className="t-tour-cities__desc__title">巡演城市</span>
                    <NavLink to={'/tour/tourshowinfo'}>
                        <span data-v-a1f1bff8 className="t-tour-cities__desc__count">
                            <span data-v-a1f1bff8 className="t-tour-cities__desc__count__num">
                                {tcInfo.show_total}
                            </span>场
                            <i data-v-a1f1bff8 className="iconfont icon-you t-tour-cities__desc__count__arrow"></i>
                        </span>
                    </NavLink>
                   
                </div>
                <div data-v-a1f1bff8 className="t-tour-cities__list">
                    <div data-v-a1f1bff8 className="t-tour-cities__list__content" style={{minWidth:" 0px"}}>
                        <div data-v-a1f1bff8
                            className="t-tour-cities__list__content__item tour-cities__list__content__first-child t-tour-cities__list__content__item--actived">
                            <div data-v-a1f1bff8
                                className="t-tour-cities__list__content__item__city t-tour-cities__list__content__item__city--actived">
                                {sz.city_name}
                            </div>
                            <div data-v-a1f1bff8
                                className="t-tour-cities__list__content__item__date t-tour-cities__list__content__item__date--actived">
                                {sz.show_time}
                            </div>
                        </div>
                        <div data-v-a1f1bff8 className="t-tour-cities__list__content__item">
                            <div data-v-a1f1bff8 className="t-tour-cities__list__content__item__city">
                                {sh.city_name}
                            </div>
                            <div data-v-a1f1bff8 className="t-tour-cities__list__content__item__date">
                                {sh.show_time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TourCity;