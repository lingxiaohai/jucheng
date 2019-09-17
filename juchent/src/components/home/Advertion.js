import React,{Component} from "react"

class Advertion extends Component{

    render() {
        console.log(this.props.list.newsList.classify_list)
        const newsList =this.props.list.newsList.classify_list;
        return(
            <>
                {newsList.map(v=>
                <div className="label-item__block" key={v.id}>
                    <a href={v.url} className="label-item__block__column">
                        <img src={v.pic}
                             className="label-item__block__column__icon" />
                            <span className="label-item__block__column__title">{v.name}</span>
                    </a>
                </div>

                )}
                </>
        )
    }
}
export default Advertion