import React, {Component} from "react";
import {ITEM_NUM} from "./constant.js";
import {ALL_ITEMS} from "./ALL_ITMES.js";


/*
 * @param {object} ALL_ITEMS - data for loaded items
 * @param {string} ALL_ITEMS.title - title for item collection
 * @param {array} ALL_ITEMS.items - item contents
 * @param {number} ITEM_NUM - number of loaded items per time
 */


/*
 * @param {string} name - class name
 * @param {string} text - text shown on button
 * @param {onClick} func - handleClick function
 */


const Button = ({name, text, onClick}) => {
    return (
        <button className={"btn " + name} onClick={onClick}>
            <b>{text}</b>
        </button>
    );
};


class Content extends Component {
    constructor(props) {
        super(props);

        /*
        * @param {boolean} isLoaded: all items are on current page
        * @param {number} loaded: how many items are loaeded to current page
        */

        this.state = {
            isLoaded: false,
            loaded: ITEM_NUM,
        };

        this.updateItems = this.updateItems.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
    }

    /*
     * load more items if there are more to load, if not scroll to top
     */
    updateItems() {
        let loaded = this.state.loaded + ITEM_NUM;
        this.setState({
            isLoaded: loaded >= ALL_ITEMS.items.length,
            loaded: loaded,
        });
        if (this.state.isLoaded) {
            this.scrollTo(0);
        }
    }

    /*
     * @param {number} posY - will scroll whole page to to posY
     */
    scrollTo(posY) {
        window.scroll({
            top: posY,
            behavior: "smooth",
        });
    }

    /*
     * scroll to bottom after rendering
     */
    componentDidUpdate() {
        if (this.state.loaded <= ALL_ITEMS.items.length) {
            this.scrollTo(document.body.offsetHeight - window.innerHeight);
        }
    }

    render() {
        // generate items base on loaded items and load interval

        const items = () => {
            return ALL_ITEMS.items
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
                    <h2>{ALL_ITEMS.title}</h2>
                </div>
                <div className="main-content"> {items()} </div>
                <div className="bottom">
                    {this.state.isLoaded ? (
                        <div>No more projects...</div>
                    ) : null}
                    <Button
                        name={this.state.isLoaded ? "showInfo" : "more"}
                        text={this.state.isLoaded ? "Back to top" : "More"}
                        onClick={this.updateItems}
                    />
                </div>
            </div>
        );
    }
}

export default Content;
