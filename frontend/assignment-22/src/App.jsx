//jshint esversion: 8

import "./App.css";
import { Switch, Route } from "react-router-dom";
import MemeContainer from "./components/MemeContainer";
import MemeEditor from "./components/MemeEditor";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={MemeContainer} />
                <Route exact path="/:memeId" component={MemeEditor} />
            </Switch>
        </div>
    );
}

export default App;
