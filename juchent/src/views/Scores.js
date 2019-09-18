import React,{Component} from "react"

class Scores extends Component{

    render() {
        return(
            <div>
                Scores/index
                <input type="button" onClick={()=>{
                    this.props.history.push("/myjuooo/myintegral");
                }} value="我的积分"/>
            </div>
        )
    }
}
export default Scores