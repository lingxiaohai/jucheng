import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Popover, NavBar, Icon } from 'antd-mobile';
import '../assets/css/Plusindex.css'
import { Drawer, Button } from 'antd';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Plusindex extends React.Component{
    state = {
        visible: false,
        visibles: false,
        selected: '',
    };
    onSelect = (opt) => {
        console.log(opt.props.value);
        this.setState({
            visible: true,
            selected: opt.props.value,
        },()=>{
            this.props.history.push(`${opt.props.value}`)
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };


    showDrawer = () => {
        this.setState({
            visibles: true,
        });
    };

    onClose = () => {
        this.setState({
            visibles: false,
        });
    };

    render() {
        return(
                <div >


                    <div id="qxy_header">
                        <i className="iconfont iconright" onClick={()=>{this.props.history.go(-1)}}></i>
                        <span className={"qxy_plus_header_span"}>橙PLUS卡</span>
                        <div  >
                            <NavBar
                                style={{background:"white",color:"black",height:"42px"}}
                                rightContent={
                                    <Popover mask
                                             overlayClassName="fortest"
                                             overlayStyle={{ color: 'currentColor' ,width:"140px",height:"88px",right:"10px"}}
                                             visible={this.state.visible}
                                             overlay={[
                                                 (<Item key="4" value="/"  icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId" style={{ whiteSpace: 'nowrap' ,height:"44px"}}>主页</Item>),
                                                 (<Item key="5" value="/my" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' ,height:"44px"}}>我的聚橙</Item>),
                                             ]}
                                             align={{
                                                 overflow: { adjustY: 0, adjustX: 0 },
                                                 offset: [-10, 0],
                                             }}
                                             onVisibleChange={this.handleVisibleChange}
                                             onSelect={this.onSelect}
                                    >

                                        <div style={{
                                            height: '100%',
                                            padding: '0 15px',
                                            marginRight: '-15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            background:'white'
                                        }}
                                        >
                                            <i className="iconfont iconsangedian"></i>
                                        </div>
                                    </Popover>
                                }
                            >
                            </NavBar>
                        </div>
                    </div>

                    <div className={"qxy_plus__no__info"}>
                        <div className={"qxy_plus__no__info__center"}>
                            <p className={"qxy_plus__no__info__center__type"}>橙PLUS卡</p>
                            <div className={"qxy_plus__no__info__center__cnt"}>
                                <span className={"qxy_plus__no__info__center__cnt--1"}>开卡999</span>
                                <span className={"qxy_plus__no__info__center__cnt--2"}>送</span>
                                <span className={"qxy_plus__no__info__center__cnt--3"}>100</span>
                                <span className={"qxy_plus__no__info__center__cnt--4"}>储值卡</span>
                            </div>
                            <div className={"qxy_plus__no__info__center__hint"}>
                                <span className={"qxy_plus__no__info__center__hint--1"}>赠送VIP+会员</span>
                                <span className={"qxy_plus__no__info__center__hint--2"}>年</span>
                                <span className={"qxy_plus__no__info__center__hint--3"}>尊享10大权益</span>
                            </div>

                                <a href="javascript:;" className={"qxy_plus__no__btn__rule"} onClick={this.showDrawer}>使用规则</a>


                                    <Drawer
                                        className={"Big_boom"}
                                        placement="bottom"
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={this.state.visibles}
                                    >

                                        <div id={"qxy_Drawer"}>
                                            <h3 className={"qxy_vip-plus-help-dialog__title"}>使用规则</h3>
                                            <div className={"vip-plus-help-dialog__content"}>
                                            <p style={{textAlign:"center",fontSize:"16px",fontFamily:"微软雅黑",marginBottom:"20px",fontWeight:"bold"}}>橙PLUS卡使用规则</p>
                                            <p style={{fontFamily:"微软雅黑"}}>橙PLUS卡是聚橙网发行的储值卡。用户开通橙PLUS卡，其有效期自开通之日起长期有效，可在聚橙网各平台购买演出票及周边产品时使用橙PLUS卡进行支付。</p>
                                                <p style={{height:"0.375rem"}}></p>
                                                <p className={"cardtitle"}>开卡送：</p>
                                                <p>开通橙PLUS卡单一面额999元，新开通可赠送：</p>
                                                <p>1.余额100元（平台节日活动额外叠加赠送）</p>
                                                <p>2.VIP+会员1年，尊享10大权益，会员有效期从开通之日顺延。</p>
                                                <p>2.VIP+会员1年，尊享10大权益，会员有效期从开通之日顺延。</p>
                                                <p style={{height:"0.375rem"}}></p>
                                                <p className={"cardtitle"}>充值送：</p>
                                                <p>充值橙PLUS卡单一面额999元，可选择充值倍数，充值可赠送：</p>
                                                <p>1.每充值999元赠送余额100元（平台节日活动额外叠加赠送）</p>
                                                <p>2.VIP+会员1年，尊享10大权益，会员有效期从充值之日起算。</p>
                                                <p style={{height:"0.375rem"}}></p>
                                                <p className={"cardtitle"}>特别说明：</p>
                                                <p>单笔订单仅支持单一方式支付，即可选择橙PLUS卡支付，或其他方式支付，不支持混合支付。（部分演出项目有购买张数的限制）</p>
                                                <p>橙PLUS卡充值仅支持单一面额倍数充值（即999元、1998元、2997元等），暂不支持其他面额充值。</p>
                                                <p>同一个聚橙网账号仅可绑定一张橙PLUS卡。</p>
                                                <p>开通/充值橙PLUS卡不赠送相应积分，且不支持开具发票，在具体消费时根据订单金额赠送积分。</p>
                                                <p>拼团、砍价、开通/充值橙PLUS卡订单不支持橙PLUS卡支付。</p>
                                                <p>订单发生退款时使用橙PLUS卡支付的金额将退回卡余额，不支持退现金。</p>
                                                <p>平台节日活动期间，可能基于保护所有消费者公平购物的机会，保障公平交易秩序以及其他合理商业原因，采取限制橙PLUS卡充值数量的安排，具体以线上活动规则为准。</p>
                                                <p style={{height:"0.375rem"}}></p>
                                                <p className={"cardtitle"}>橙PLUS卡会员权益解释权归聚橙网所有</p>
                                                <p style={{height:"2.5rem",lineHeight:"2.5rem"}}></p>
                                            </div>
                                        </div>


                                    </Drawer>

                            </div>

                    </div>

                    <div className={"qxy_plus__no__btn"}>
                        <button className={"qxy_plus__no__btn__open"} onClick={()=>{this.props.history.push("/shop/plus/buy")}}>立即开卡</button>
                    </div>
                    <div className={"qxy_plus__no__rights"}>
                        <div className={"qxy_plus__no__rights__grid"}>
                            <p className={"qxy_plus__no__rights__grid__title"}>VIP+尊享10大权益</p>
                            <div className={"qxy_right-grid"}>

                                <div className={"qxy_right-grid__row"}>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--prior-buy "}></div>
                                        <div className={"qxy_right-cell__name"}>优先购票</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--price "}></div>
                                        <div className={"qxy_right-cell__name"}>专属票价</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--discount "}></div>
                                        <div className={"qxy_right-cell__name"}>专享折扣</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--coupon "}></div>
                                        <div className={"qxy_right-cell__name"}>专享卷</div>
                                    </div>
                                </div>
                                <div className={"qxy_right-grid__row"}>
                                    <div className={"qxy_right-cell "}>
                                    <div className={"qxy_right-cell__icon qxy_right-cell__icon--free-shipping "}></div>
                                    <div className={"qxy_right-cell__name"}>全场包邮</div>
                                </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--double-points "}></div>
                                        <div className={"qxy_right-cell__name"}>双倍积分</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--free-ticket "}></div>
                                        <div className={"qxy_right-cell__name"}>赠观影卷</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--activity "}></div>
                                        <div className={"qxy_right-cell__name"}>明星活动</div>
                                    </div>
                                </div>
                                <div className={"qxy_right-grid__row"}>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--periodical "}></div>
                                        <div className={"qxy_right-cell__name"}>免费刊期</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--birthday"}></div>
                                        <div className={"qxy_right-cell__name"}>生日专项</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>
                                        <div className={"qxy_right-cell__icon qxy_right-cell__icon--more"}></div>
                                        <div className={"qxy_right-cell__name"}>敬请期待</div>
                                    </div>
                                    <div className={"qxy_right-cell "}>

                                    </div>
                                </div>
                            </div>
                            <button className={"qxy_plus__no__rights__grid__btn"} onClick={()=>{this.props.history.push("/vip/index/1")}}>立即开通 <span>￥</span><span>99</span>/年</button>
                        </div>

                    </div>
                    <div className={"qxy_plus__save"}>
                        <img src={require("../assets/img/like.png")}/>
                    </div>
                    <div className={"qxy_plus__btn"}>
                        <div className={"qxy_plus__btn__txt"}>
                            <span className={"qxy_plus__btn__txt__des"}>开卡限时送</span>
                            <span className={"qxy_plus__btn__txt__amount"}>￥100</span>
                        </div>
                        <button className={"qxy_plus__btn_cart"} onClick={()=>{this.props.history.push("/shop/plus/buy")}}>立即开卡</button>
                    </div>
                </div>

        )
    }
}
export default connect()(Plusindex)