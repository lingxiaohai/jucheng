import React from 'react';
import logo from './logo.svg';
import './App.css';
import routerArr from "./router/index"
import { BrowserRouter as Router,Route,NavLink,Switch} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators} from "redux"
class App extends React.Component{

    render() {
        console.log(this.props);
        return(
            <div id={"app"}>
                <div className="home page">
              <Router>
                  {
                      routerArr.map((v,index)=>
                       <Route {...v} key={index}></Route>
                      )
                  }
              </Router>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state,props) {

    return{
        state
    }
}
function mapDidToProps(dispatch) {
    return{

    }
}
export default connect(mapStateToProps,mapDidToProps)(App)
