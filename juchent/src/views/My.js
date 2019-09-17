import React,{Component} from "react"

export default class My extends Component{

    componentWillMount() {
        if(!localStorage.userName){
            this.props.history.push("/login")
        }
    }

    render() {
        return(
            <div>
                我的
            </div>
        )
    }
}