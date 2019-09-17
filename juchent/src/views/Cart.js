import React,{Component} from "react"

export default class Cart extends Component{

    componentWillMount() {
        if(!localStorage.userName){
            this.props.history.push("/login")
        }
    }
    render() {
        return(
            <div>
                cart
            </div>
        )
    }
}