(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){e.exports=n.p+"d27bb9f3fc9b8e0c1d6cb800e07349d5.svg"},,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(3);var c=n(0),o=n.n(c),s=document.querySelector(".toggle-nav-btn"),r=document.querySelector(".nav"),a=document.querySelector(".current-page"),i=document.querySelectorAll(".nav>a"),l=document.querySelector(".head-logo > img"),u=(document.querySelector(".open"),document.querySelector(".overlay"));function d(e,t){var n=window.matchMedia("(max-width: 800px)").matches;e.classList.contains(t)?(e.classList.remove(t),n&&u.classList.remove("show")):(e.classList.add(t),n&&u.classList.add("show"))}function v(e,t){for(var n=0;n<e.length;n++)e[n].classList.remove(t)}l.src=o.a,s.addEventListener("click",function(e){e.preventDefault(),d(r,"open")});for(var m=0;m<i.length;m++)i[m].addEventListener("click",function(e){v(i,"current"),e.preventDefault();var t=e.target.innerHTML;a.innerHTML=t,d(r,"open"),e.target.classList.add("current")},!1);u.addEventListener("click",function(e){r.classList.contains("open")&&(r.classList.remove("open"),u.classList.remove("show"))},!1)}],[[6,0]]]);
//# sourceMappingURL=main.f350.js.map