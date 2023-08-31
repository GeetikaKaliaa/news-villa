import React, { Component } from 'react';
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import "./News.css";
import imgNull from "./imgNull.jpg";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class News extends Component{ 
    
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:true,
            page:1
    
        }
        document.title=`${capitalizeFirstLetter(this.props.category) } - NewsVilla` ;
    }
    async componentDidMount(){
        this.props.setProgress(10);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=page`)
        this.props.setProgress(30);
        const data = await response.json();
        this.props.setProgress(50);
        this.setState({articles: data.articles,loading:false})
        this.props.setProgress(100);
    }
    onButtonPrevious=async ()=>{
        this.props.setProgress(10);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`)
        this.props.setProgress(30);
        const data = await response.json();
        this.props.setProgress(50);
        this.setState({articles: data.articles,page:this.state.page - 1})
        this.props.setProgress(100);
    }
    onButtonNext= async ()=>{
        this.props.setProgress(10);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`)
        this.props.setProgress(30);
        const data = await response.json();
        this.props.setProgress(50);
        this.setState({articles: data.articles,page:this.state.page + 1})
        this.props.setProgress(100);
    }
    render(){
        return(
            
            <div className="row p-4  g-4 mb-2 " >
            <h1 style={{width:"100%"}}>{capitalizeFirstLetter(this.props.category)} Top Articles</h1>
            {this.state.loading && <Spinner/>}
            <div className='row row-cols-3' style={{width:"70%",margin: "auto"}}>
          {
            this.state.articles.map(
               (elem)=>{
                return <div className="col p-4" key={elem.url}>
                           <NewsItem source={elem.source.name} date={elem.publishedAt} title={elem.title?elem.title:"India to launch mission to study the sun"} description={elem.description?elem.description:"Days after India's successful moon mission, the country is now setting its sights on the sun"} urlToImage={elem.urlToImage?elem.urlToImage:"https://media.cnn.com/api/v1/images/stellar/prod/230830081414-02-idalia-tarpon-springs-0830.jpg?c=16x9&q=w_800,c_fill"}/>
                       </div>
               }
            )
          }
            
            </div>
            <div className='d-flex justify-content-around m-auto'>
            <button type="button" class="btn btn-primary btn-lg" onClick={this.onButtonPrevious} >Previous</button>
            <button  type="button" class="btn btn-primary btn-lg"  onClick={this.onButtonNext}>Next</button>
            </div>
           
            
            </div>
            

        )
    }
}

// for(let totalArticles of data.articles)
// {
//     this.getTitle = totalArticles.title;
//     this.getDescription= totalArticles.description;
//     this.urlToImage= totalArticles.urlToImage;
    
//     return (
//     <div className="col">
//         <NewsItem title={this.getTitle} description={this.getDescription} urlToImage={this.urlToImage}/>
//     </div>)
//     // console.log(totalArticles);
// }
// }