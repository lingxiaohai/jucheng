import React, {Component} from "react"
import {Carousel, WingBlank} from 'antd-mobile';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        data: ['1', '2', '3'],
        imgHeight: 196,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {

            this.setState({
                data: nextProps.swiperList.newsList.slide_list
            })
        }
    }

    componentDidMount() {

        // simulate img loading
    }

    render() {
        let dotStyle = {
            width: ".13333rem",
            height: ".13333rem",
            "background": "#fff",

            opacity: 0.5,
        };
        let active = {
            opacity: "1",
            width: ".34667rem",

            background: "#fff"
        }

        const swiperList = this.props.swiperList.newsList.slide_list;

        return (
            <WingBlank style={{margin: 0,}} >
                <Carousel className="swiper-container swiper-container-horizontal"
                          autoplay={true}
                          slideWidth={1}
                          infinite
                          dotStyle={dotStyle}
                          dotActiveStyle={active}


                >
                    {this.state.data.map((val, index) => (
                        <a className={"swiper-container swiper-container-horizontal"}
                           href={val.url}
                           key={index}
                           href="http://www.alipay.com"
                           style={{display: 'inline-block', width: '100%', height: "196px"}}
                        >
                            <img
                                src={val.image_url}
                                alt={val.title}
                                style={{width: '100%', verticalAlign: 'top'}}


                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Slideshow