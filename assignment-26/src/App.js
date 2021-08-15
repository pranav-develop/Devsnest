//jshint esversion: 8
import "./App.css";
import Input from "./Input";
import Data from "./Data";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div>
                    <Input />
                    <Data />
                </div>
            </div>
        </Provider>
    );
}

export default App;
