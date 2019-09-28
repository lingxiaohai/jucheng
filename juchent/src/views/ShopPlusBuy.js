import React from 'react';
import {connect} from 'react-redux'
import '../assets/css/ShopPlusbuy.css'
import {bindActionCreators} from 'redux'
import Creator from "../store/actionCreator/Show";

import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';





const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};



class ShopPlusBuy extends React.Component {
    state = {
        data: [],
        cols: 1,
        visible: false,
        colorValue: [''],
    };
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data: provinceLite,
            });
        }, 120);
    };



    onChangeColor = (color) => {
        this.setState({
            colorValue: color,
        });

    };


    render() {

        const colors = this.props.cityList.map((v,i)=>

                ({
                    label:
                        (<div key={i}>
                            <span>{v.name}</span>

                        </div>),
                    value:`${v.name}`
                })

        );

        return (
            <div>
                <header id="qxy_header">
                    <i className="iconfont iconright" onClick={() => {
                        this.props.history.go(-1)
                    }}></i>
                    <h5 className={"qxy_plus_header_buyspan"}>开通橙PLUS卡</h5>
                </header>
                <div className={"qxy_plus-buy__content__info"}>
                    <div className={"qxy_card-block"}>
                        <div className={"qxy_card-block__info"}>
                            <div className={"qxy_card-block__info__mark"}></div>
                            <div className={"qxy_card-block__info__bg"}>
                                <div className={"cqxy_ard-block__info__title"}>
                                    <span className={"qxy_card-block__info__title__block_plus--logo"}></span>
                                    <span className={"qxy_card-block__info__title__lab_plus--lab"}>储值卡</span>
                                </div>
                                <div className={"qxy_card-block__info__amount"}>
                                    <span className={"qxy_card-block__info__amount__may_plus--may"}>￥999</span>
                                    <div className={"qxy_card-block__info__amount__act"}>
                                        <span className={"qxy_card-block__info__amount__act_plus--act"}>开卡 999</span>
                                        <span className={"qxy_card-block__info__amount__give_plus--give"}>赠 100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"qxy_payment-activity"}>
                            <div className={"qxy_payment-content"}>
                                <div className={"qxy_payment-activity__info"}>
                                    <span className={"qxy_payment-activity__info__sign"}>活动</span>
                                    <p className={"qxy_payment-activity__info__label"}>
                                        <span className={"qxy_payment-activity__info__label__tip"}>赠送 VIP+会员</span>
                                        <span className={"qxy_payment-activity__info__label__unit"}>年</span>
                                    </p>
                                </div>
                                <div className={"qxy_payment-activity__arrow"}>
                                    <span>立省</span>
                                    <span className={"qxy_payment-activity__arrow--con_c_ff6"}>99</span>
                                    <span>元</span>
                                </div>
                            </div>
                        </div>
                        <div className={"qxy_watch-citys"}>
                            <div className={"qxy_watch-citys__block"}>
                                {/*<h3 className={"qxy_watch-citys__block__title"}>常驻城市</h3>*/}
                                <div className={"qxy_watch-citys__block__arrow"}>
                                    {/*<span className={"qxy_watch-citys__block__arrow__label"}>*/}
                                    {/*    请选择城市</span>*/}
                                    {/*<span className={"qxy_watch-citys__block__arrow__icon"}></span>*/}
                                    <Picker
                                        data={colors}
                                        value={this.state.colorValue}
                                        cols={1}
                                        onChange={this.onChangeColor}
                                    >
                                        <List.Item >常驻城市</List.Item>
                                    </Picker>
                                </div>
                            </div>
                        </div>

                        <div className={"qxy_payment-mode"}>
                            <div className={"qxy_payment-mode__title"}>
                                <h3 className={"qxy_payment-mode__title__h3"}>支付方式</h3>
                            </div>
                            <div className={"qxy_payment-mode__list"}>
                                <div className={"qxy_payment-mode__list__info"}>
                                    <div className={"qxy_payment-mode__list__info__icon_alipay--icon"}></div>
                                    <div className={"qxy_payment-mode__list__info__payname"}>
                                        <h3 className={"qxy_payment-mode__list__info__payname__title"}>支付宝网页支付</h3>
                                    </div>
                                </div>
                                <div className={"qxy_payment-mode__list__checkout"}>
                                    <span className={"qxy_payment-mode__list__checkout__icon_juooo-success_juooo-checkout"}></span>
                                </div>
                            </div>
                        </div>

                        <footer className={"qxy_foot_foot-media"}>
                            <div className={"qxy_foot-agree"}>
                                <span>购买即视为同意</span>
                                <span className={"qxy_c_ff6"}>《聚橙网橙PLUS卡服务协议》</span>
                            </div>
                            <div className={"qxy_foot-btn"}>
                                <div className={"qxy_foot-btn__text"}>
                                    <span className={"qxy_foot-btn__text__label"}>应付：</span>
                                    <span className={"qxy_foot-btn__text__payment"}>￥999</span>
                                    <span className={"qxy_foot-btn__text__gift"}>赠100元</span>
                                </div>
                                <button className={"qxy_juooo-btn_juooo-btn--primary"}>立即开卡</button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        this.props.getcityList();
    }
}
function mapStateToPorps(state,props) {
    return {
        cityList: state.ShowTypeList.cityList,
        cityid:state.ShowTypeList.cityid,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( Creator,dispatch)
}
export default connect(mapStateToPorps,mapDispatchToProps)(ShopPlusBuy)