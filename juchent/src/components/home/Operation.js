import React, {Component} from "react"
import {NavLink} from "react-router-dom";

class  Operation extends Component {

    render() {

        return (
            <div className="operation">

                <ul className="operation__ul operation--top">

                    <li className="operation__item" >
                        <NavLink to={"/plus/index"}><a className="operation__item__block">
                            <div>
                                <h3 className="operation__item__block__title">橙PLUS卡</h3>

                                <p>送<span className="c_ff6">100元</span>,享V+权益</p>
                            </div>
                            <div className="operation__item__block__icon">
                                <img src="https://image.juooo.com/group1/M00/02/D0/rAoKmV0jZBGAD_e4AAAE27hwBgs927.png"/>
                            </div>
                        </a></NavLink>
                    </li>

                    <li className="operation__item">
                        <a className="operation__item__block">
                            <div>
                                <h3 className="operation__item__block__title">VIP+专区</h3>

                                <p>尊享<span className="c_ff6">10</span>大权益</p>

                            </div>
                            <div className="operation__item__block__icon">
                                <img src="https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png"/>
                            </div>
                        </a>
                    </li>
                </ul>

                <ul className="operation__ul operation--bottom">
                    <li className="operation__item">
                        <NavLink to={"/myjuooo/myintegral"} className="operation__item__block">
                            <div>
                                <h3 className="operation__item__block__title">积分商城</h3>
                                <p>用积分,<span className="c_ff6">0元</span>购票
                                </p>
                            </div>
                            <div className="operation__item__block__preferential">
                                <img src="https://image.juooo.com/group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png"/>
                            </div>
                        </NavLink>
                    </li>
                    <li className="operation__item">
                        <a href="https://m.juooo.com/calendar/index" className="operation__item__block">
                            <div><h3 className="operation__item__block__title">日历</h3>
                                <p>演出信息,<span className="c_ff6">一目了然</span></p>
                            </div>
                            <div className="operation__item__block__preferential">
                                <img src="https://image.juooo.com/group1/M00/02/63/rAoKmVyumJuADezsAAAFQQ7pzxI319.png"/>
                            </div>
                        </a>
                    </li>
                    <li className="operation__item">
                        <a href="https://m.juooo.com/Cardproduct/index" className="operation__item__block">
                            <div data-v-0cb0cb18=""><h3 className="operation__item__block__title">欢聚橙卡</h3>
                                <p><span className="c_ff6">33元</span>看演出</p>
                            </div>
                            <div className="operation__item__block__preferential">
                                <img src="https://image.juooo.com/group1/M00/03/0D/rAoKNVyumKiAfP1qAAACYTizNOw440.png"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Operation