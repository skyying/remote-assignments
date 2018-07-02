import "./style/reset.scss";
import "./style/main.scss";
import logo from "./Images/logo.svg";

let toggleBtn = document.querySelector(".toggle-nav-btn");
let navBar = document.querySelector(".nav");
let currentPage = document.querySelector(".current-page");
let links = document.querySelectorAll(".nav>a");
let logoContainer = document.querySelector(".head-logo > img");
let open = document.querySelector(".open");
logoContainer.src = logo;

function toggle(obj, objClassName) {
    if (obj.classList.contains(objClassName)) {
        obj.classList.remove(objClassName);
    } else {
        obj.classList.add(objClassName);
    }
}

toggleBtn.addEventListener("click", function(e) {
    e.preventDefault();
    toggle(navBar, "open");
});
function removeClass(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(name);
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        "click",
        function(e) {
            removeClass(links,"current");
            e.preventDefault();
            let title = e.target.innerHTML;
            currentPage.innerHTML = title;
            toggle(navBar, "open");
            e.target.classList.add("current");
        },
        false,
    );
}
// links.addEventListener("click", function(e){
//     let element =  e.target;
//     console.log(e);

// },false)

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
