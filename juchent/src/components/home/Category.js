import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import changeCate from "../../store/actionCreator/Categor"

class Category extends React.Component {

    render() {
        let {data} = this.props.newsList;

        return (
            <div className="category-block category-wrap">


                {data.map(v =>


                    <section className="category-block__list" key={v.cat_id} style={{display:v.list.length>4?"block":"none"}}>
                        <div className="category-block__list__wrap">
                            <h3 className="category-block__list__wrap__title">{v.title}</h3>
                            <a href="https://m.juooo.com/show/showsLibrary?cid=1&amp;caid=35"
                               className="category-block__list__wrap__arrow"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="/></a>
                        </div>
                        <div className="category-block__list__row" title="rgba(142,105,124,1)"
                        >

                            <div className="row--bg">

                                <a href="https://m.juooo.com/ticket/101861" className="category-block__list__row__wrap">
                                    <div className="category-block__list__row__item"><img
                                        src={v.list[0].pic}/>

                                        <div className="juooo_sponsor"></div>
                                    </div>
                                    <div className="category-block__list__row__info">
                                        <p className="category-block__list__row__info__date">
                                            <strong>{v.list[0].date}</strong>
                                            <span>{v.list[0].week}</span>
                                        </p>
                                        <h3 className="category-block__list__row__info__title text-double">
                                            {v.list[0].schedular_name}</h3>
                                        <p className="category-block__list__row__info__venue text-single">{v.list[0].city_name} |
                                            {v.list[0].venue_name}</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="category-block__list__column">
                            <div className="swiper-container swiper-container-horizontal data-swiper">
                                <div className="swiper-wrapper">

                                    {v.list.map((item,index) =>{
                                            if(index>0){


                              return     <div className="swiper-slide" style={{width: "107px"}} key={item.sche_id}>
                                        <a href="https://m.juooo.com/ticket/103173"
                                           className="category-block__list__column__wrap">
                                            <div className="category-block__list__column__item"><img
                                                src={item.pic} style={{height:"151px"}}/>
                                                <div className="juooo_sponsor"><span className="logo_i"></span></div>
                                            </div>
                                            <h3 className="category-block__list__column__title text-single">
                                                {item.schedular_name}</h3>
                                            <p className="category-block__list__column__price">
                                                <strong className="c_ff6">￥{item.low_price}</strong> <span>起</span></p>
                                        </a></div>
                                    }}
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>)}

            </div>

        )
    }
    componentDidUpdate(){
        if(this.swiper){
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        this.swiper=   new Swiper(".data-swiper",{
            autoplay: false,
            freeMode : false,
            spaceBetween : 8,
            freeModeSticky : true,
            centeredSlides : false,
            slidesPerView : "auto",
        });

    }




    componentDidMount() {
        this.props.getCateList();
    }
}

function mapStateToProps(state) {
    return {
        newsList: state.CategorList
    }
}

function mapDidpatchProps(dispatch) {
    return bindActionCreators(changeCate, dispatch)
}

export default connect(mapStateToProps, mapDidpatchProps)(Category)