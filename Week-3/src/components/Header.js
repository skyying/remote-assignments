import React, {Component} from "react";
import PropTypes from "prop-types";
import {PAGES} from "./constant.js";
import logo from "../Images/logo.svg";

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    toggleMenu() {
        if(this.props.isSmallScreen) {
            this.props.updateNav(!this.props.open);
        }
    }
    handleClick(i) {
        this.toggleMenu();
        this.props.updatePage(i);
    }
    render() {
        const {links, curIndex, updatePage, updateNav, open} = this.props;
        const items = links.map((text, i) => {
            return (
                <a
                    className={curIndex === i ? "current" : ""}
                    onClick={() => this.handleClick(i)}
                    key={i}>
                    {text}
                </a>
            );
        });
        return (
            <div id="navbar" className={"nav shadow " + (open ? "open" : "")}>
                <button className="toggle-nav-btn" onClick={this.toggleMenu} />
                {items}
            </div>
        );
    }
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curPageIndex: 0,
            isSmallScreen: false,
            isNavOpen: false,
        };
        this.updatePage = this.updatePage.bind(this);
        this.updateScreenSize = this.updateScreenSize.bind(this);
        this.updateNav = this.updateNav.bind(this);
    }
    updatePage(index) {
        this.setState({
            curPageIndex: index,
        });
    }
    updateNav(isOpen) {
        this.setState({
            isNavOpen: isOpen,
        });
    }
    updateScreenSize() {
        this.setState({
            isSmallScreen: window.innerWidth < 800,
        });
    }
    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener("resize", this.updateScreenSize, false);
    }
    componetWillMount() {
        window.removeEventListener("resize", this.updateScreenSize, false);
    }
    render() {
        return (
            <div>
                <div
                    onClick={() => this.updateNav(false)}
                    className={
                        "overlay " +
                        (this.state.isSmallScreen && this.state.isNavOpen
                            ? "show"
                            : "")
                    }
                />
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
                        updatePage={this.updatePage}
                        updateNav={this.updateNav}
                        isSmallScreen={this.state.isSmallScreen}
                        open={this.state.isSmallScreen && this.state.isNavOpen}
                    />
                </div>
            </div>
        );
    }
}
