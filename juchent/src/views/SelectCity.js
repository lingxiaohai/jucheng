import React,{Component} from "react"
import {Link} from "react-router-dom"
import  axios from "axios"
import  {bindActionCreators}  from "redux"
import {connect} from "react-redux"
import newsList from "../store/actionCreator/City";


class SelectCity extends Component{



  async componentDidMount() {
        this.props.getCity();
        this.props.getHotCity();
    }

    render() {
      let cityList=[];
        if(this.props.data){
            for(let i in this.props.data){
                cityList.push(this.props.data[i])
            }
        }
        console.log(cityList);
        console.log(this.props.cityList)
        return(
            <>
                <div className="head-nav">
                    <Link to={"/"}><span className={"head_icon"}></span></Link>
                    <h3 className={"title text-single"}>
                        城市选择
                    </h3>
                </div>
                <div className={"city"}>
                    <section className={""}>

                        <div className={"city-block"}>
                            <div className={"city-block__wrapper"}>
                                <div className={"city-block__con"}>
                                    <span className={"city-block__con__tip"}>当前城市</span>
                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item"} >{this.props.location.state.city}
                                           </li>
                                    </ul>
                                </div>
                                <div className={"city-block__con"}>
                                    <span className={"city-block__con__tip"}>定位城市</span>
                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item"} style={{color:"red"}}>{this.props.location.state.init}</li>
                                    </ul>
                                </div>
                                <div className={"city-block__con"}>

                                    <span className={"city-block__con__tip"}>热门城市</span>

                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item hots--item"}
                                        >全国</li>

                                        {this.props.cityList.map(v=>

                                                <li className={"city-block__con__item hots--item"} key={v.id} onClick={()=>{
                                                    localStorage.city=JSON.stringify({city_id:v.id,city_name:v.name});
                                                    this.props.history.push("/");
                                                }}> {v.name}</li>

                                        )}
                                    </ul>
                                </div>
                                <section className={"city-block__row"}>

                                    {cityList.map(v=>

                                                <div className={"city-block__row__con"} key={v.id}>
                                                    <span className={"city-block__row__con__letter"}>{v.id}</span>
                                                            <ul  className={"city-block__row__con__wrap"}>
                                                                {v.list.map(item=>

                                                                <li className={"city-block__row__con__column"} key={item.id}>
                                                                    {item.name}
                                                                </li>
                                                                )}
                                                            </ul>


                                                </div>

                                    )}

                                </section>
                            </div>

                        </div>
                    </section>
                    <section className="city-nav">
                        <span className={"city-nav__lab"}>当前</span>
                        <span className={"city-nav__lab"}>定位</span>
                        <span className={"city-nav__lab"}>热门</span>
                        <span className={"city-nav__lab"}>A</span>
                    </section>
                </div>

            </>
        )
    }

}
function mapStateToProps(state) {

    return{
    cityList:state.cityList.hot_city_List,
       data: state.cityList.data
    }
}
function mapDidpatchToProps(dispatch) {
    return bindActionCreators(newsList,dispatch)
}
export default connect(mapStateToProps,mapDidpatchToProps)(SelectCity)