import React,{Component} from "react"
import CCCart from "../components/cart/CCCart";
export default class Cart extends Component{

    componentWillMount() {
        if(!localStorage.userName){
            this.props.history.push("/login")
        }
    }
    render() {
        return(
            <div>
                <CCCart></CCCart>
            </div>
        )
    }
}