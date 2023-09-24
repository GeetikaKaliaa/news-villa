import './App.css';
import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const pageSize= 20;
class App extends Component{
  apiKey =process.env.React_App_News_API_KEY;
  
    state ={
      progress:0
    }
    setProgress =(progress)=>{
    this.setState({progress:progress})
    }
 render(){
  return(
<>
     <Navbar />
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
       <Route   path="/"  element={<News setProgress={this.setProgress}  key="general" pageSize={pageSize} apiKey={this.apiKey} category="general" />}/> 
       <Route   path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={pageSize} apiKey={this.apiKey} category="technology"/>}/>
       <Route   path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"  pageSize={pageSize} apiKey={this.apiKey} category="entertainment"/>}/>
       <Route   path="/science" element={<News setProgress={this.setProgress} key="science"  pageSize={pageSize} apiKey={this.apiKey} category="science"/>}/>
       <Route   path="/politics" element={<News  setProgress={this.setProgress} key="politics"  pageSize={pageSize} apiKey={this.apiKey} category="politics"/>}/>
       <Route   path="/business" element={<News setProgress={this.setProgress} key="business"  pageSize={pageSize} apiKey={this.apiKey} category="business"/>}/>
       <Route   path="/health" element={<News setProgress={this.setProgress} key="health"  pageSize={pageSize} apiKey={this.apiKey} category="health"/>}/>
       <Route   path="/sports" element={<News setProgress={this.setProgress} key="sports"  pageSize={pageSize} apiKey={this.apiKey} category="sports"/>}/>
       {/* <Route   path="/about" element={<About/>}/> */}
      </Routes>
       <Footer />
      </>
  )
 }
}

export default App;
