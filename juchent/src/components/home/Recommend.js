import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios"

const styles = {
    height: "100%",
    overflow: "none"
};

class Recommend extends React.Component {

    ListArr = [];
    index = 1;
    state = {
        items: [],
        hasMore: true
    };

    fetchMoreData = () => {
         console.log(11111)
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.getshowList(this.index++)
        }, 500);
    };


    async getshowList(index = 1) {

        const {data} = await axios.get("/home/getRecommendShow?cityAdd=SZ&page=" + index + "&version=6.0.5&referer=1");

        if (data.data.recommend_show_list.length <= 8) {
            this.setState({hasMore: false});
            return;
        }
        if (data.code === "200") this.setState({items: this.state.items.concat(data.data.recommend_show_list)})

    }

    render() {
        return (
            <section className="recommend-block recommend-wrap">
                <div className="recommend-block__wrap ">
                    <h3 className="recommend-block__wrap__title">为你推荐</h3>
                </div>
                <InfiniteScroll className={"recommend-block__list recommend-list"}
                                style={styles}
                                dataLength={this.state.items.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                loader={<div className="recommend-logoding"></div>}
                                endMessage={
                                    <button className="recommend-block__more">
                                        查看更多演出
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAMAAACDMFxkAAAAM1BMVEUAAAD/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTIMtL8tAAAAEXRSTlMA/AW1wr2r3K+fy6YKz5OSB/KUf8wAAABKSURBVAjXbc7bDoAwCAPQwjbBzdv/f60PSsUoTyehTQorivtcaG0yIVxedvxlqozkOWU2ultwWS3UZb90sKaNqkmDX/8MewTz0AmWCAFo1w/zpQAAAABJRU5ErkJggg=="
                                            className="recommend-block__more__icon"/></button>
                                }
                >

                    <ul>
                        {this.state.items.map((i, index) => (
                            <li key={index}>
                                <div className="show-icon"><a href={`/ticket/${i.sche_id}`}><img
                                    src={i.schePic}/></a>
                                    <div className="juooo_sponsor"><i className="logo_i"></i></div>
                                </div>
                                <div className="item-desc">
                                    <p className="show-date"><strong>{i.show_time}</strong> <span>{i.week}</span></p>
                                    <a href="/ticket/103486">
                                        <h3 className="titles text-double">{i.show_name}
                                        </h3>
                                    </a>
                                    <p className="venue text-single">{i.c_name} | {i.v_name}</p>
                                    <p className="price"><strong className="c_ff6">￥{i.high_price}</strong>
                                        <span>起</span></p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </InfiniteScroll>
            </section>
        );
    }
}

export default Recommend
