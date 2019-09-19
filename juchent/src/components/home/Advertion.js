import React,{Component} from "react"
import {NavLink} from "react-router-dom";

class Advertion extends Component{

    render() {

        return(
            <>   {
                this.props.ifyList.map(v=>

                    <div className="label-item__block" key={v.id}>
                        <NavLink to={`show/showsLibrary?cid=0&caid=${v.category_id}`} className="label-item__block__column">
                            <img src={v.pic}
                                 className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">{v.name}</span>
                        </NavLink>
                    </div>
                )
            }


                </>
        )
    }
}
export default Advertion