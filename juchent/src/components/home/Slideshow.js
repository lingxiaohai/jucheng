import React, {Component} from "react"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {connect} from "react-redux"

class Slideshow extends Component {
   constructor(props){
       super(props);
   }

    componentDidMount() {

        this.mySwiper1 = new Swiper(this.myswipers,{
            loop:false,
            observer: true,
            observeParents: true,

            pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: 'my-bullet-active',
            },
            autoplay: {
                disableOnInteraction: false,
            },
            onSlideChangeEnd: function(swiper){
                swiper.update();
                this.mySwiper1.startAutoplay();
                this.mySwiper1.reLoop();
            }
        });

    }

    render() {
        const newsList = this.props.newsList;
        return (
            <div className="swiper-container myswiper" ref={el=>this.myswipers=el}>
                <div className="swiper-wrapper">
                    {newsList.map((v, index) =>
                        <div key={index} className="swiper-slide swiper-slide-duplicate"
                             style={{height: "196.1px"}}><a
                            href="http://card.juooo.com/booking/index?card_group_id=228"
                            className="banner-wrap__block">
                            <img src={v.image_url}/></a>
                        </div>
                    )}
                </div>
                <div className="swiper-pagination" ref={el=>this.page=el}></div>

            </div>

        )
    }

}

function mapStateToProps(state) {
    if (state.SwiperList.slide_list) {
        return {
            newsList: state.SwiperList.slide_list
        }
    }

}

export default connect(mapStateToProps)(Slideshow)