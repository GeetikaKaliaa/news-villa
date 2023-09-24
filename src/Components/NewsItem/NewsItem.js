import { Component } from "react";

export default class NewsItem extends Component{
    render(){
       let {title,description,urlToImage,source,date} = this.props;
        return(
            
    <div className="card pd-3">
        <span className="align-self-end p-2" style={{background: "#ae1d9b",position: "absolute",color: "white"}}>{source}</span>

      <img src={urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <span className="fst-italic" style={{fontSize: "12px"}}>{date}</span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{fontFamily:"serif"}}>{description}</p>
        
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  
        )
    }
}