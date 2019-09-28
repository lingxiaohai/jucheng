import React,{Component} from 'react';
import '../assets/css/ticket_107033.css'
import Top from '../components/Ticket_107032/Top'
import Content from '../components/Ticket_107032/Content'
import axios from 'axios';
import store from '../store';
import {changeInfo} from '../store/actionCreator/Ticket_107032/try'

 class TicketInfo extends Component{
    constructor(){
        super();
        this.state = {
            ticketInfo : store.getState().Try.initInfo
        }
    }
    async componentDidMount(){
        const {data} = await axios.get('https://api.juooo.com/Schedule/schedule/getTourShowInfo?show_id=40123&version=6.0.6&referer=2')
        // console.log(5654,data.data.tour_list)
        store.dispatch(changeInfo(data.data.tour_list))
        this.setState({
            ticketInfo : store.getState().Try.initInfo
        })
    }

    render(){
        const obj = this.state.ticketInfo || {};
        // Object.keys(obj).map(key => console.log(1111122,obj[key])); 
        let arr = [];
        for(let key in obj){
            // console.log(obj[key]);
            arr.push(obj[key]);
            // console.log(900008,arr)
        }
        // console.log(66886,arr)
        return(

            <div>
                <div id="t-app" className=" t-disable-global-auto-adapt">
                    <div data-v-277f55d8 className="t-detail-wrapper">
                        <div data-v-277f55d8 className="t-detail">
                            <div data-v-04d278ca data-v-277f55d8 className="t-brief detail__brief">
                                <div data-v-04d278ca className="t-brief__bg-wrapper">
                                    <img  className="t-brief__bg" data-v-04d278ca 
                                    src="https://image.juooo.com/group1/M00/03/14/rAoKmV2A7tKAJ0nwAABNyrxlQf8038.jpg"
                                    alt=""
                                    />
                                </div>
                                <div data-v-04d278ca className="t-brief__mask"></div>
                                <div data-v-04d278ca className="t-brief__primary">
                                    <div data-v-04d278ca className="t-brief__primary__fg">
                                        <Top />
                                        <Content/>
                                    </div>
                                </div>
                            </div>
                            
                            <div data-v-7f5504b5 className="t-tour-block__content__list">
                               
                                <div data-v-7f5504b5 className="t-tour-block__content__list--item">
                                    <div data-v-74dbd923 data-v-7f5504b5 className="t-show-column">
                                        <div data-v-74dbd923 className="t-show-column__date t-show-column--will">
                                            <p data-v-74dbd923>
                                                <strong data-v-74dbd923 className="t-show-column__date--bold"> 01/</strong> 
                                                <span data-v-74dbd923 className="t-show-column__date--normal t-date--lab"> 09-10 </span>
                                            </p>
                                        </div> 
                                        <div data-v-74dbd923 className="t-show-column__info t-show-column--will">
                                            <a data-v-74dbd923 href="/ticket/107412" className="t-show-column__info--block">
                                                <h3 data-v-74dbd923 className="t-show-column__info--title"> 
                                                    百老汇摇滚音乐剧《吉屋出租RENT》中文版-北京站 
                                                </h3> 
                                                <p data-v-74dbd923 className="t-show-column__info--tip">
                                                    北京 | 中国人民大学如论讲堂
                                                </p> 
                                                <p data-v-74dbd923 className="t-show-column__info--bottom">
                                                    <span data-v-74dbd923 className="t-show-column__info--bottom__price">￥100</span> 
                                                    <span data-v-74dbd923>起</span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                               {
                                   arr.map((v,i)=>(
                                       
                                    <div key={i} data-v-7f5504b5 className="t-tour-block__content__list--item">
                                        <div data-v-74dbd923 data-v-7f5504b5 className="t-show-column">
                                            <div data-v-74dbd923 className="t-show-column__date t-show-column--will">
                                                <p data-v-74dbd923>
                                                    <strong data-v-74dbd923 className="t-show-column__date--bold"> 01/</strong> 
                                                    <span data-v-74dbd923 className="t-show-column__date--normal t-date--lab"> 09-10 </span>
                                                </p>
                                            </div> 
                                            <div data-v-74dbd923 className="t-show-column__info t-show-column--will">
                                                <a data-v-74dbd923 href="/ticket/107412" className="t-show-column__info--block">
                                                    <h3 data-v-74dbd923 className="t-show-column__info--title"> 
                                                        {v.schedular_name}
                                                    </h3> 
                                                    <p data-v-74dbd923 className="t-show-column__info--tip">
                                                        {v.city_name} | {v.venue_name}
                                                    </p> 
                                                    <p data-v-74dbd923 className="t-show-column__info--bottom">
                                                        <span data-v-74dbd923 className="t-show-column__info--bottom__price">￥{v.low_price}</span> 
                                                        <span data-v-74dbd923>起</span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                   ))
                               }
                           
                            </div>

                           
                        </div>
                    </div>
                    {/* 垫高 */}
                    <div data-v-277f55d8 className="t-detail__placeholder"></div>

                </div>
            </div>
      
       )
    }
   
}
export default TicketInfo;
