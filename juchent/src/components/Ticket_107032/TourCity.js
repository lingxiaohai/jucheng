import React from 'react'
import store from '../../store'
import axios from 'axios';

class TourCity extends React.Component{
    constructor(){
        super();
        this.state = {
            tourCityInfo : store.getState().TitInfo.titInfo
        }
    }
    componentDidMount(){
        // const {data} = axios.get('')
    }
    
    render(){
        return(
            <div data-v-a1f1bff8 data-v-277f55d8 className="t-tour-cities t-detail__tour-cities">
                <div data-v-a1f1bff8 className="t-tour-cities__desc">
                    <span data-v-a1f1bff8 className="t-tour-cities__desc__title">巡演城市</span>
                    <span data-v-a1f1bff8 className="t-tour-cities__desc__count">
                        <span data-v-a1f1bff8 className="t-tour-cities__desc__count__num">
                            4
                        </span>场
                        <i data-v-a1f1bff8 className="iconfont icon-you t-tour-cities__desc__count__arrow"></i>
                    </span>
                </div>
                <div data-v-a1f1bff8 className="t-tour-cities__list">
                    <div data-v-a1f1bff8 className="t-tour-cities__list__content" style={{minWidth:" 0px"}}>
                        <div data-v-a1f1bff8
                            className="t-tour-cities__list__content__item tour-cities__list__content__first-child t-tour-cities__list__content__item--actived">
                            <div data-v-a1f1bff8
                                className="t-tour-cities__list__content__item__city t-tour-cities__list__content__item__city--actived">
                                深圳</div>
                            <div data-v-a1f1bff8
                                className="t-tour-cities__list__content__item__date t-tour-cities__list__content__item__date--actived">
                                12/13-12/14</div>
                        </div>
                        <div data-v-a1f1bff8 className="t-tour-cities__list__content__item">
                            <div data-v-a1f1bff8 className="t-tour-cities__list__content__item__city">上海</div>
                            <div data-v-a1f1bff8 className="t-tour-cities__list__content__item__date">
                                12/24-12/25</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TourCity;