import React from 'react';
import {connect} from 'react-redux'
import { Popover, NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import Creator from "../store/actionCreator/VipPulus";
import { Drawer, Button } from 'antd';
import '../assets/css/VipPulsindex.css'
import yxgpList from "../store/reducers/VipPulus";
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class VipPulsindex extends React.Component{
    state = {
        visible: false,
        visibles: false,
        selected: '',
        data: ['1', '2', '3'],
        imgHeight: 570,
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
            <div>
                <div id="qxy_header">
                    <i className="iconfont iconright1" onClick={()=>{this.props.history.go(-1)}}></i>
                    <span className={"qxy_plus_header_span"}>VIP + 会员</span>
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

                <div className={"qxy_vip-plus__desc"}>
                    <div className={"qxy_vip-plus__desc__title"}></div>
                    <div className={"qxy_vip-plus__desc__content"}>
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
                        <button className={"qxy_plus__no__rights__grid__btn"} onClick={()=>{this.props.history.push("/shop/plus/buy")}}>立即开通 <span>￥</span><span>99</span>/年</button>
                        <div className={"qxy_vip-plus__desc__content__rule"}>
                            权益解读
                        </div>
                    </div>
                </div>

                <div className={"qxy_vip-plus__desc__ad"}>
                    <div className={"qxy_ad-swipe"}>
                        <div className={"qxy_ad-swipe__swipe_van-swipe"}>
                            <div className={"qxy_ad-swipe__swipe__item_van-swipe-item"}>
                                <img src="https://image.juooo.com/group1/M00/02/D0/rAoKmV0jYo-AFJm6AABjBMdPbE4256.png" alt="" className={"qxy_ad-swipe__swipe__item__img"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"qxy_entry-block_vip-plus__prior-buy"}>
                    <div className={"qxy_entry-block__title"}>优先购票
                        <span className={"qxy_entry-block__title__desc"}></span>
                    </div>

                </div>

                <div style={{height:"570px"}}>
                    <WingBlank>
                        <Carousel
                            className={"qxy_vip_index"}
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.props.yxgpList.map(v => (

                                <div style={{height:"570px"}}>
                                    {
                                        v.map((s,i)=>(
                                            <div className={"qiegenao"}>
                                                <img src={s.pic} alt="" style={{width:"110px",height:"150px"}}/>
                                                <div>
                                                    <p className={"qxy_item__info__date-week__date"}>{s.date}</p>
                                                    <h3 className={"qxy_item__info__name__content_text-double"}>
                                                        {s.schedular_name}
                                                    </h3>
                                                    <p className={"qxy_item__info__place"}>
                                                        {s.venue_name}
                                                    </p>
                                                    <p className={"qxy_prior-buy-card__extra-wrapper"}>￥<strong>{s.min_price}</strong>起</p>
                                                </div>
                                                <hr/>
                                            </div>

                                        ))
                                    }
                                </div>

                            ))}
                        </Carousel>
                    </WingBlank>

                </div>

                <div className={"qxy_entry-block_vip-plus__discount"}>
                    <div className={"qxy_entry-block__title"}>专享折扣</div>
                    <div className={"qxy_vip-plus-discount-grid"}>
                        <div className={"qxy_vip-plus-discount-grid__row"}>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>9.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/2F/rAoKmVyBFvKAeB7ZAABpi5UOH9I692.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}> 法语音乐剧《摇滚红与黑》-广州站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>8.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/03/3F/rAoKNVzc_luAAYj0AABKXDcBW98962.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>世界经典原版音乐剧《猫》CATS -广州站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>9.8</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                        </div>
                        <div className={"qxy_vip-plus-discount-grid__row"}>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/73/rAoKmVzASuqAQKDaAACnh31kqr4797.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>【小橙堡微剧场】西班牙 |星光浪漫互动音乐剧场《月光摇篮曲》--北京站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>8.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIFqmAcoswAABmDtTNJyI871.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>【万有音乐系】《小城故事》——陈佳2019个人演唱会</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>9.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/83/rAoKNVw2Ba6AOX9yAACTafVkRpU195.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>【万有音乐系】“永恒旋律”经典影视系列主题音乐会-旭和坊团 深圳站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>8.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                        </div>
                        <div className={"qxy_vip-plus-discount-grid__row"}>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/03/3B/rAoKNVzYzp2AI3wCAAD-QbZWK0w494.gif" alt=""/>
                                        <div className={"qxy_show-cell__name"}>曹禺经典巨作-话剧《雷雨》-固安</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>9.5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/40/rAoKmVyS_FaACwYzAAC9SzDif6w720.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>【小橙堡】趣味情景互动音乐秀《我是演奏家》-南京站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                            <div>
                                <div className={"qxy_vip-plus-discount-show-cell"}>
                                    <div className={"qxy_show-cell"}>
                                        <img src="https://image.juooo.com/group1/M00/02/53/rAoKNVvfvMaAcRLVAAC_uXy3mac360.jpg" alt=""/>
                                        <div className={"qxy_show-cell__name"}>【小橙堡】经典成长童话《匹诺曹》-南京站</div>
                                    </div>
                                </div>
                                <div className={"qxy_vip-plus-discount-show-cell__discount"}>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__num"}>5</span>
                                    <span className={"qxy_vip-plus-discount-show-cell__discount__desc"}>折起</span>
                                </div>
                            </div>
                        </div>
                        <button className={"qxy_zxbutton"}>查看更多演出</button>
                    </div>
                </div>

                <div className={"qxy_vip-plus__free-view"}>
                    <div className={"qxy_entry-block"}>
                        <div className={"qxy_entry-block__title"}>免费观演</div>
                        <div className={"qxy_free-view-wrapper"}>
                            <div className={"qxy_free-view__item"}>
                                <div className={"qxy_show-cell"}>
                                    <img src="https://image.juooo.com/group1/M00/01/B4/rAoKmVvtRfmAHy2yAACgKNbPqdk406.jpg" alt=""/>
                                    <div className={"qxy_show-cell__name"}>【小橙堡】经典成长童话《丑小鸭》-广州站</div>
                                </div>
                                <div className={"qxy_free-view-show-cell__price"}>
                                    ￥0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"qxy_entry-block_vip-plus__double-points"}>
                    <div className={"qxy_entry-block__title"}>双倍积分</div>
                    <img src={require("../assets/img/vip_plus_double_points.e9a6530.png")} alt=""/>
                </div>
                <div className={"qxy_entry-block_vip-plus__double-points"}>
                    <div className={"qxy_entry-block__title"}>全场包邮</div>
                    <img src={require("../assets/img/vip_plus_free_shipping.2edb583.png")} alt=""/>
                </div>

                <div className={"qxy_vip-plus__more"}>
                    更多VIP+尊享权益，敬请期待
                </div>
                <button className={"qxy_ju-button_vip-pl"} onClick={()=>{this.props.history.push("/shop/plus/buy")}}>立即开通 ￥99/年</button>
                <div className={"qxy_faq"} onClick={this.showDrawer}></div>
                <Drawer
                    className={"Big_boom"}
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visibles}
                >

                    <div id={"qxy_Drawer"}>
                        <h3 className={"qxy_vip-plus-help-dialog__title"}>常见问题</h3>
                        <div className={"vip-plus-help-dialog__content"}>
                            <p className={"cardtitle"}>1.什么是VIP+会员？</p>
                            <p style={{fontFamily:"微软雅黑"}}>会员是聚橙推出的全新会员服务，旨在为用户提供更为多元化的选择。用户在购买会员资格后，可享受优先购票、专属票价、专享折扣等十大权益。目前，聚橙会员以年为单位进行购买，比如您在日购买了会员，那您的会员资格将会持续到2019</p>
                            <p style={{height:"0.375rem"}}></p>
                            <p className={"cardtitle"}>2.我想参加会员优先购，是要购买VIP+还是橙PLUS?</p>
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
        )
    }
    componentDidMount() {
        this.props.getyxgpList();
    }
}
function mapStateToPorps(state,props) {
    return {
        yxgpList:state.yxgpList.yxgpList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( Creator,dispatch)
}
export  default connect(mapStateToPorps,mapDispatchToProps)(VipPulsindex)


