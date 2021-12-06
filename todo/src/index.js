import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById("root"))