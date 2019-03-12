import * as React from 'react';
import {render as r} from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "./index.scss";
import {App} from "./App";

const mountNode = document.getElementById("app");
r(
<Router>
            <Route exact path="*" render={()=><App name={"App"}/>}/>
        </Router>,mountNode);

