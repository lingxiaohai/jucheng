import React,{Component} from "react"
import {NavLink,Link} from "react-router-dom";

class Advertion extends Component{
    constructor(){
        super();
        this.state={
            cityId:0
        }
    }
    render() {

        return(
            <>   {
                this.props.ifyList.map(v=>

                    <div className="label-item__block" key={v.id}>

                        <Link to={`show/showsLibrary/0/${v.category_id}`} className="label-item__block__column">
                            <img src={v.pic}
                                 className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">{v.name}</span>
                        </Link>
                    </div>
                )
            }


                </>
        )
    }
    componentDidMount() {
        if (localStorage.city){
            console.log(JSON.parse(localStorage.city).city_id,"88888888888888888");
            const id=JSON.parse(localStorage.city).city_id
            this.setState({
                cityId:id
            })
        }
    }
}
export default Advertion