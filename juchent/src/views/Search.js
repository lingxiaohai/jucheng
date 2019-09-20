import React,{Component} from "react"


export default class Search extends Component{

    changeInput(){
      console.log(this.refs["searchs"].value);
       // browserHistory.push({ pathname: '/jianjie/', query: {page: index}});
    // this.props.history.push({
    //     pathname:"/search/index/",
    //     state:this.refs["searchs"].value
    // })
    // this.props.location.state=this.refs["searchs"].value;
        console.log(window.location.search)
    console.log(this.props);
          if(this.refs["searchs"].value){
              //window.location.search="id="+this.refs["searchs"].value;
              //window.location.hash="?k="+this.refs["searchs"].value;
               window.history.pushState({path:11},"","?k="+this.refs["searchs"].value);
          }

    }
    render() {
        return(
            <div>
                <input type="text" ref={"searchs"} onChange={this.changeInput.bind(this)}/>
            </div>
        )
    }
}