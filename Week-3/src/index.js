import "./style/main.scss"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="overlay"></div>
                <Header/>
                <Banner/>

            </div>
        )
    }
}

    ReactDOM.render(<App />, document.getElementById("main"))
