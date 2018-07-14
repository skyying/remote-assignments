import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {PROJECT, INTERVAL} from "./constant.js";

const Button = ({name, text, update}) => {
    return (
        <button className={"btn " + name} onClick={update}>
            <b>{text}</b>
        </button>
    );
};

const scrollTo = pos => {
    console.log(document.body.offsetHeight - window.innerHeight);
    window.scroll({
        top: 200, //document.body.offsetHeight - window.innerHeight,
        behavior: "smooth",
    });
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            loaded: INTERVAL,
        };
        this.updateItems = this.updateItems.bind(this);
    }
    updateItems() {
        let loaded = this.state.loaded + INTERVAL;
        this.setState({
            isLoaded: loaded >= PROJECT.items.length,
            loaded: loaded,
        });
        scrollTo();
    }
    render() {
        const items = () => {
            return PROJECT.items
                .filter((item, i) => i <= this.state.loaded - 1)
                .map((item, i) => (
                    <div key={"item" + i} className="item row-item">
                        {item}
                    </div>
                ));
        };

        return (
            <div className="main align-center">
                <div className="row-item">
                    <h2>{PROJECT.title}</h2>
                </div>
                <div className="main-content"> {items()} </div>
                <div className="bottom">
                    {this.state.isLoaded ? (
                        <div>No more projects...</div>
                    ) : null}
                    <Button
                        name={this.state.isLoaded ? "showInfo" : "more"}
                        text={
                            this.state.isLoaded ? "Back to top" : "More"
                        }
                        update={this.updateItems}
                    />
                </div>
            </div>
        );
    }
}

export default Content;

// content
// title
// content-items
// btn
