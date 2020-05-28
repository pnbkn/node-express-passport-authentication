import React from "react";
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {HashRouter, Switch, Route, Router } from 'react-router-dom';
// import { Provider } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
// import "../css/styles.css"

class App extends React.Component{

    render(){
       return(
        <React.Fragment>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                {/* <Route exact path="/register" component={Register}/> */}
            </Switch>
        </HashRouter>
     </React.Fragment>
       )
    }
}

render(<App />, document.getElementById("root"));
  