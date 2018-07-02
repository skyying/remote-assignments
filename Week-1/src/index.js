import "./style/reset.scss";
import "./style/main.scss";

let toggleBtn = document.querySelector(".toggle-nav-btn");
let navBar = document.querySelector(".nav")

toggleBtn.addEventListener(
    "click",
    function() {
        if (navBar.className === "nav") {
            navBar.className = "nav open";
        } else {
            navBar.className = "nav";
        }
    },
    false,
);

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class App extends Component{
//     constructor(props){
//         super(props);

//     }
//     render(){
//         return (
//             <div>
//                 恭喜, 安裝成功。
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById("main"));
