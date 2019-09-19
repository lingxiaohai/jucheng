import React,{Component} from "react"
import Mys from "../components/My/Mys";
export default class My extends Component{

    componentWillMount() {
        if(!localStorage.userName){
            this.props.history.push("/login")
        }
    }

    render() {
        return(
            <div>
                <Mys></Mys>
            </div>
        )
    }
}