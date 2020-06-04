import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BCMenu from "./component/BCMenu";

import BCHome from "./component/BCHome";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import BCCard from "./component/BCCard";
import BCVideo from "./component/BCVideo";
import BCCardContent from "./component/BCCardContent";
import BCCategory from "./component/BCCategory";
import BCRequest from "./component/BCRequest";
import BCAnimation from "./component/BCAnimation";
import BCMovie from "./component/BCMovie";
import BCShowType from "./component/BCShowType";
import BCAccount from "./component/BCAccount";
import BCWelcome from "./component/BCWelcome";
import history from "./component/history";
import BCForm from "./component/BCForm";

class App extends Component {
    constructor() {
        super();
        this.state={
            record:[
                {id:1,name:"EBOOK1",img:"./image/img1.png"},
                {id:2,name:"EBOOK2",img:"./image/img2.png"},
                {id:3,name:"EBOOK3",img:"./image/img3.png"},
                {id:4,name:"EBOOK4",img:"./image/img4.png"},
                {id:5,name:"EBOOK5",img:"./image/img5.png"},
                {id:6,name:"EBOOK6",img:"./image/img6.png"},
                {id:7,name:"EBOOK7",img:"./image/img7.png"},
            ],
            login:false
        }
    }
     logined=()=> {
        let test1=/^[a-zA-Z0-9 ]+$/.test(document.getElementById("txt1").value)
        let test2=/^[a-zA-Z0-9 ]+$/.test(document.getElementById("txt2").value)
        if(test1 && test2)
          this.setState({login:true})
    }
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <BCMenu/>
                    <Route path="/" exact strict component={BCHome}/>
                    <Route path="/home" exact render={()=>
                        <div style={{paddingTop:"2vh",display: "flex"}}>
                            <BCCard record={this.state.record}/>
                        </div>}
                    />
                    <Route path="/video" component={BCVideo}/>
                    <Route path="/video" exact strict component={BCRequest}/>
                    <Route path="/video/:animation" component={BCCategory}/>
                    <Route path="/video/animation" component={BCAnimation}/>
                    <Route path="/video/movie" component={BCMovie}/>
                    <Route path="/video/animation" exact strict component={BCRequest}/>
                    <Route path="/video/movie" exact strict component={BCRequest}/>
                    <Route path="/video/animation/:type" component={BCShowType}/>
                    <Route path="/video/movie/:type" component={BCShowType}/>
                    <Route path="/account" exact  component={BCAccount}/>
                    <Route path="/auth" exact  render={()=>{
                        return(
                            <BCForm event1={this.logined.bind(this)}/>
                        )
                    }}/>
                    <Route path="/welcome" exact strict
                           render={()=>
                           {
                               return this.state.login?(<BCWelcome/>):(<Redirect to="/auth"/>)
                           }}
                    />
                    <Route path="/post/:id" exact component={BCCardContent}/>
                </Router>
            </div>
        )
    }
}

export default App;
