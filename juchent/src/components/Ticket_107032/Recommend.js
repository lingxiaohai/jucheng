import React from 'react';
import store from '../../store'
import axios from 'axios'
import {changeTitInfo} from '../../store/actionCreator/Ticket_107032'


// console.log(999,store.getState())
export default class Recommend extends React.Component{
    constructor(){
        super();
        this.state = {
            recommendInfo : store.getState().TitInfo.titInfo
        }
    }

    async componentDidMount(){
        const {data} = await axios.get('https://api.juooo.com/Show/Search/getShowList?category=79&city_id=1&version=6.0.5&referer=2');
        // console.log(123,data.data)
        store.dispatch(changeTitInfo(data.data));
        this.setState = {
            recommendInfo : store.getState().TitInfo.titInfo
        }

    }

    render(){
        const recInfo = this.state.recommendInfo || {};
        const list = this.state.recommendInfo.list || [];

        return(
            <div data-v-3c4bc15e data-v-277f55d8 className="t-recommend detail__recommend  t-center__left__recommend">
                <div data-v-3c4bc15e className="t-recommend__title">相关推荐</div>
                <div data-v-3c4bc15e className="t-recommend__list">
                   
                    <div data-v-4458129e data-v-3c4bc15e className="t-item">
                        <div data-v-681cfcc8 data-v-4458129e className="t-cover t-item__cover">
                            <img data-v-681cfcc8 
                            src="https://image.juooo.com/group1/M00/03/85/rAoKNV01aVCAUOS8AACH0mVDc1c858.jpg" alt="" 
                            className="t-cover__img"
                            />
                        </div> 
                        <div data-v-4458129e className="t-item__info">
                            <div data-v-4458129e className="t-item__info__date-week">
                                <span data-v-4458129e className="t-item__info__date-week__date">01/02 - 01/10</span> 
                                <span data-v-4458129e className="t-item__info__date-week__week"></span>
                            </div> 
                            <div data-v-4458129e className="t-item__info__name">
                                <div data-v-4458129e className="t-item__info__name__content t-text-double">
                                    音乐剧《芝加哥》
                                </div>
                            </div> 
                            <div data-v-4458129e className="t-item__info__place">深圳 | 南山文体中心剧院大剧院</div> 
                            <div data-v-4458129e className="t-item__info__price">
                                <span data-v-4458129e className="t-item__info__price__num">￥180</span> 
                                <span data-v-4458129e className="t-item__info__price__text">起</span>
                            </div>
                        </div>
                    </div>
                    
                    {list.map((v,i)=>(
                        console.log(v)
                   
                    ))}
               
                </div>
                <div data-v-3c4bc15e className="t-recommend__more">
                    查看更多演出
                    <i data-v-3c4bc15e className="iconfont icon-you t-recommend__more__arrow"></i>
                </div>
            </div>
        )
    }
}