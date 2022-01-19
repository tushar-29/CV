import {StrictMode} from "react";
import ReactDOM from "react-dom";
import"./component/style.css";
import App from "./component/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    rootElement
);