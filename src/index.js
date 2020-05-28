import React from "react";
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import store from "./redux/store";
import {HashRouter, Switch, Route, Router } from 'react-router-dom';
import { Provider } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import history from "./components/history";


// import "../css/styles.css"

class App extends React.Component{

    render(){
       return(
        <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/users" component={Users}/>
            </Switch>
        </HashRouter>
        </Provider>
       )
    }
}

render(<App />, document.getElementById("root"));
  