//jshint esversion: 8
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Private from "./Private";
import Profile from "./Profile";
import { LoginProvider } from "./LoginContext";

function App() {
    return (
        <BrowserRouter>
            <LoginProvider>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/private" exact component={Private} />
                        <Route path="/profile" exact component={Profile} />
                    </Switch>
                </div>
            </LoginProvider>
        </BrowserRouter>
    );
}

export default App;
