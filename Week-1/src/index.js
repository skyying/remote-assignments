import "./style/main.scss";
import logo from "./Images/logo.svg";

// declear dom element
let toggleBtn = document.querySelector(".toggle-nav-btn"),
    navBar = document.querySelector(".nav"),
    currentPage = document.querySelector(".current-page"),
    links = document.querySelectorAll(".nav>a"),
    logoContainer = document.querySelector(".head-logo > img"),
    open = document.querySelector(".open"),
    overlay = document.querySelector(".overlay"),
    banner = document.querySelector(".banner"),
    mainContent = document.querySelector(".main-content"),
    moreContentBtn = document.querySelector(".more"),
    info = document.querySelector(".info"),
    body = document.body;

//constant and variable
let TOTAL_ITEM = 12;
// if content exceeds TOTAL_ITEM;
let isAllLoaded = false;

// add logo
logoContainer.src = logo;

// load more content
function addItems(container, itemNum=4) {
    for (let i = 0; i < itemNum; i++) {
        let element = document.createElement("div");
        element.innerHTML = "Project details";
        element.classList.add("item");
        element.classList.add("row-item");
        container.appendChild(element);
    }

}

//scroll to top of current page
const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

//scroll to bottom of current page
const scrollToBottom = () => {
    window.scroll({
        top: body.offsetHeight - window.innerHeight,
        behavior: "smooth",
    });
};

//load more content
const loadContent = () => {
    if (mainContent.childElementCount < TOTAL_ITEM) {
        addItems(mainContent);
        scrollToBottom();
    } else {
        scrollToTop();
    }

    if (!isAllLoaded && mainContent.childElementCount >= TOTAL_ITEM) {
        moreContentBtn.innerHTML = "&#8593; Back to top";
        info.classList.add("showInfo");
        scrollToBottom();
        isAllLoaded = !isAllLoaded;
    }
};

// Responsive menu
const toggleNav = () => {
    if (navBar.classList.contains("open")) {
        navBar.classList.remove("open");
        overlay.classList.remove("show");
    } else {
        navBar.classList.add("open");
        overlay.classList.add("show");
    }
};

//behavior for click an navigator item
const onClickNavItem = () => {
    let navItems = [...links];
    navItems.map(item => {
        item.addEventListener(
            "click",
            function(e) {
                e.preventDefault();
                navItems.map(item => item.classList.remove("current"));
                let title = e.target.innerHTML;
                currentPage.innerHTML = title;
                toggleNav();
                e.target.classList.add("current");
            },
            false,
        );
    });
};

// init function
const init = () => {
    addItems(mainContent);
    onClickNavItem();
};

// click overlay, toggleMenuButton
toggleBtn.addEventListener("click", toggleNav, false);
overlay.addEventListener("click", toggleNav, false);

// click "more" button to load more content
moreContentBtn.addEventListener("click", loadContent, false);

// Click banner to change message
banner.addEventListener("click", function(e) {
    this.innerHTML = "<h2>Have a Good Time!</h2>";
});

init();
