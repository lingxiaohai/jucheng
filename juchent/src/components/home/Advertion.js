import React,{Component} from "react"
import {NavLink} from "react-router-dom";

class Advertion extends Component{

    render() {

        return(
            <>
                <div className="label-item__block">
                    <NavLink to={"show/showsLibrary?cid=0&caid=35"} className="label-item__block__column">
                        <img src="https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png"
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">演唱会</span>
                    </NavLink>
                </div>
                <div className="label-item__block">
                    <NavLink to={"show/showsLibrary?cid=0&caid=79"} className="label-item__block__column">
                        <img src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png"
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">音乐剧</span>
                    </NavLink>
                </div>
                <div className="label-item__block">
                    <NavLink to={"show/showsLibrary?cid=0&caid=37"} className="label-item__block__column">
                        <img src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png"
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">舞台剧</span>
                    </NavLink>
                </div>
                <div className="label-item__block">
                    < NavLink to={"show/showsLibrary?cid=0&caid=38"} className="label-item__block__column">
                        <img src="https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png"
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">儿童剧</span>
                    </NavLink>
                </div>
                <div className="label-item__block">
                    <NavLink to={"show/showsLibrary?cid=0&caid=36"} className="label-item__block__column">
                        <img src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png"
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">音乐会</span>
                    </NavLink>
                </div>
                </>
        )
    }
}
export default Advertion