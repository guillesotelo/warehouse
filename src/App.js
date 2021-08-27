import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import SinglePoke from './components/SinglePoke'

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pokemon/:name" component={SinglePoke}/>
            </Switch>
        </>
    );
}

export default App;
