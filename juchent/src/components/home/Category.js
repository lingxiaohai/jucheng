import React from "react"

export default class category extends React.Component{

    render() {
        return (
            <div className="category-block category-wrap">
                <section className="category-block__list">
                    <div className="category-block__list__wrap">
                        <h3 className="category-block__list__wrap__title">演唱会</h3>
                        <a href="https://m.juooo.com/show/showsLibrary?cid=1&amp;caid=35"
                           className="category-block__list__wrap__arrow"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" /></a>
                    </div>
                    <div className="category-block__list__row" title="rgba(142,105,124,1)"
                         >

                        <div className="row--bg">

                            <a href="https://m.juooo.com/ticket/101861" className="category-block__list__row__wrap">
                                <div className="category-block__list__row__item"><img
                                    src="https://image.juooo.com//group1/M00/03/5F/rAoKNV0CMc6ADnUXAABmTJVNWLE356.jpg" />

                                    <div className="juooo_sponsor"></div>
                                </div>
                                <div className="category-block__list__row__info">
                                    <p className="category-block__list__row__info__date"><strong>10/26</strong>
                                        <span>周六</span>
                                    </p>
                                    <h3 className="category-block__list__row__info__title text-double">
                                        关心妍时刻触动演唱会2019-深圳站</h3>
                                    <p className="category-block__list__row__info__venue text-single">深圳 |
                                        ​深圳市宝安体育中心体育馆</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="category-block__list__column">
                        <div className="swiper-container swiper-container-horizontal">
                            <div className="swiper-wrapper">


                                <div className="swiper-slide" ><a
                                    href="https://m.juooo.com/ticket/103173"
                                    className="category-block__list__column__wrap">
                                    <div className="category-block__list__column__item"><img
                                        src="https://image.juooo.com//group1/M00/03/26/rAoKNVzIFqmAcoswAABmDtTNJyI871.jpg"/>
                                        <div className="juooo_sponsor"><span className="logo_i"></span></div>
                                    </div>
                                    <h3 className="category-block__list__column__title text-single">
                                        【万有音乐系】《小城故事》——陈佳2019个人演唱会-深圳站</h3>
                                    <p className="category-block__list__column__price">
                                        <strong className="c_ff6">￥100</strong> <span>起</span></p>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

    )
    }
    }