import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'
import store from '../../store/index'
import '../../assets/css/ShowLibrary.css'
import {changeShowcategoryList} from "../../store/actionCreator/Show";

class ShowList extends React.Component{
    render() {
        console.log(this.props.id)

        return(
            <section id="qxy_recommend_wrap">

                <ul>

                    {
                        this.props.category_list.map((v,i)=>(

                            <li key={i}>
                                <img src={v.pic} alt=""/>
                                <div>
                                    <p>{v.show_time_top}</p>
                                    <h3>{v.name}</h3>
                                    <p>{v.venue_name}</p>
                                    <p>￥<strong>{v.min_price}</strong>起</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </section>
        )
    }
    componentDidMount() {
        this.props.getcategoryList();
    }
}

function mapStateToProPs(state,props) {
    return{
        category_list:state.ShowTypeList.category_list,
    }
}
function mapDispatchToProps(dispatch,props) {

    return{
        async getcategoryList(){
            // console.log(`/ShowList/Show/Search/getShowList?category=${id}&city_id=5&page=${this.category_list_page}&keywords=&version=6.0.5&referer=2`);
            const {data} = await axios.get(`/ShowList/Show/Search/getShowList?category=${this.id}&city_id=5&page=1&keywords=&version=6.0.5&referer=2`);
            dispatch(changeShowcategoryList(data.data.list));
        },

    }
}
export default connect(mapStateToProPs,mapDispatchToProps)(ShowList)