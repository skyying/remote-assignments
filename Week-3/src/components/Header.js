import React, {Component} from "react"
import PropTypes from "prop-types"
import {PAGES} from "./constant.js"
import logo from "../Images/logo.svg"

const Navigator = ({links, curIndex, update}) => {
    const items = links.map((text, i) => {
        return (
            <a
                className={curIndex === i ? "current" : ""}
                onClick={() => update(i)}
                key={i}>
                {text}
            </a>
        )
    })
    return (
        <div id="navbar" className="nav shadow">
            <button className="toggle-nav-btn" />
            {items}
        </div>
    )
}

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curPageIndex: 0,
        }
        this.updatePage = this.updatePage.bind(this)
    }
    updatePage(index) {
        this.setState({
            curPageIndex: index,
        })
    }
    render() {
        return (
            <div className="head">
                <h1 className="head-logo">
                    <img src={logo} alt="logo" />
                </h1>
                <div className="current-page">
                    <b>{PAGES[this.state.curPageIndex]}</b>
                </div>
                    <Navigator
                        links={PAGES}
                        curIndex={this.state.curPageIndex}
                        update={this.updatePage}
                    />
            </div>
        )
    }
}
