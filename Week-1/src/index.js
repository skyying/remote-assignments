import "./style/main.scss";
import logo from "./Images/logo.svg";

let toggleBtn = document.querySelector(".toggle-nav-btn");
let navBar = document.querySelector(".nav");
let currentPage = document.querySelector(".current-page");
let links = document.querySelectorAll(".nav>a");
let logoContainer = document.querySelector(".head-logo > img");
let open = document.querySelector(".open");
let overlay = document.querySelector(".overlay");
let banner = document.querySelector(".banner");


logoContainer.src = logo;

function toggle(obj, objClassName) {
    let matchScrren = window.matchMedia("(max-width: 800px)").matches;
    if (obj.classList.contains(objClassName)) {
        obj.classList.remove(objClassName);
        if (matchScrren) {
            overlay.classList.remove("show");
        }
    } else {
        obj.classList.add(objClassName);
        if (matchScrren) {
            overlay.classList.add("show");
        }
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
            removeClass(links, "current");
            e.preventDefault();
            let title = e.target.innerHTML;
            currentPage.innerHTML = title;
            toggle(navBar, "open");
            e.target.classList.add("current");
        },
        false,
    );
}

overlay.addEventListener(
    "click",
    function(e) {
        if (navBar.classList.contains("open")) {
            navBar.classList.remove("open");
            overlay.classList.remove("show");
        }
    },
    false,
);


banner.addEventListener("click", function(e) {
    this.innerHTML = "<h2>Have a Good Time!</h2>";
});

