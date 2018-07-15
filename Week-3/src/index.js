import "./style/main.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Content from "./components/Content.js";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Content />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("App"));
