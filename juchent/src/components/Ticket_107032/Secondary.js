import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import Creator from '../../store/actionCreator/Ticket_107032'
import axios from 'axios';
import store from '../../store';
import {changeInfo} from '../../store/actionCreator/Ticket_107032/try'


console.log(store.getState(),96321)
class Secondary extends Component{
    constructor(){
        super();
        this.state = {
            secondaryInfo : store.getState().Try.initInfo
        }
    }
    async componentDidMount(){
        const {data} = await axios.get('https://api.juooo.com/Show/Search/getShowList?category=79&city_id=1&version=6.0.6&referer=2');
        // console.log(52520,data.data)
        store.dispatch(changeInfo(data.data));
        this.setState({
            secondaryInfo : store.getState().Try.initInfo
        })
        
        // console.log(886,this.state.secondaryInfo)
    }
    render(){
        const secInfo = this.state.secondaryInfo || {};
        const list = secInfo.list || [];
        const item = list.find(v=>v.schedular_id === 107033) || {};
        // console.log(9845,secInfo)
        return(
            <div data-v-04d278ca className="t-brief__secondary">
                <div data-v-04d278ca className="t-brief__secondary__info">
                    <div data-v-04d278ca className="t-brief__secondary__info__date-time-wrapper">
                        <div data-v-04d278ca className="t-brief__secondary__info__date-time">
                            <span data-v-04d278ca className="t-brief__secondary__info__date-time__date">
                               {
                                   item.show_time_top
                               }
                            <i data-v-04d278ca className="iconfont icon-you t-brief__secondary__info__date-time__arrow"></i>
                            </span>
                        </div>
                    </div>
                    <div data-v-04d278ca className="t-brief__secondary__info__place">
                        {item.city_name} | { item.venue_name}
                           
                        
                    </div>
                </div>
                <div data-v-04d278ca className="t-brief__secondary__pointer"></div>
            </div>
        )
    }
}

export default Secondary;


// function mapStateToProps(state,props){
//     // console.log(54321,state)
//     return{
//         // cityId =  
//     }
// }
// function mapDispatchToProps(dispatch,props){
//     return bindActionCreators(Creator,dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Secondary);