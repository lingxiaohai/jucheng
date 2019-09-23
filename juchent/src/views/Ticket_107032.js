import React,{Component} from 'react';
import '../assets/css/ticket_107033.css'
import Top from '../components/Ticket_107032/Top'
import Content from '../components/Ticket_107032/Content'
import Secondary from '../components/Ticket_107032/Secondary'
import BtnBottom from '../components/Ticket_107032/BtnBottom'
import CenterTip from '../components/Ticket_107032/CenterTip'
import CenterBenefit from '../components/Ticket_107032/CenterBenefit'
import TourCity from '../components/Ticket_107032/TourCity'
import ShowIntro from '../components/Ticket_107032/ShowIntro'
import CenterLeftTips from '../components/Ticket_107032/CenterLeftTips'
import Recommend from '../components/Ticket_107032/Recommend'

 class Ticket_107032 extends Component{

    render(){
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
                                <Secondary/>
                            </div>
                            {/* 底部选座购票按钮 */}
                            <BtnBottom/>
                            {/* Center */}
                            <div data-v-277f55d8 className="t-center">
                                <div data-v-277f55d8 className="t-center__right">
                                    {/* tip */}
                                    <CenterTip/>
                                    {/*benefit (领券 入场 支持)*/}
                                    <CenterBenefit/>
                                    {/* 巡演城市    TourCity */}
                                    <TourCity/>
                                </div>
                                <div data-v-277f55d8 className="t-center__left">
                                    {/* 演出介绍 */}
                                    <ShowIntro/>
                                    {/* 温馨提示 */}
                                    <CenterLeftTips/>
                                    {/* 相关推荐 */}
                                    <Recommend/>
                                </div>
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
export default Ticket_107032;
