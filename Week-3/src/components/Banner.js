import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const message = "Hi, there";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Message",
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage(text) {
        this.setState({
            message: text,
        });
    }
    render() {
        return (
            <div onClick={ () => this.updateMessage(message)} className="banner row-item align-center">
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}
export default Banner;
