(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,n,t){e.exports=t.p+"d27bb9f3fc9b8e0c1d6cb800e07349d5.svg"},,,function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);t(3);var o=t(0),r=t.n(o);var c=document.querySelector(".toggle-nav-btn"),i=document.querySelector(".nav"),a=document.querySelector(".current-page"),s=document.querySelectorAll(".nav>a"),d=document.querySelector(".head-logo > img"),u=(document.querySelector(".open"),document.querySelector(".overlay")),l=document.querySelector(".banner"),m=document.querySelector(".main-content"),v=document.querySelector(".more"),f=document.querySelector(".info"),h=document.body,p=!1;d.src=r.a;var L=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=0;t<n;t++){var o=document.createElement("div");o.innerHTML="Project details",o.className="item row-item",e.appendChild(o)}},y=function(){window.scroll({top:h.offsetHeight-window.innerHeight,behavior:"smooth"})},w=function(){i.classList.contains("open")?(i.classList.remove("open"),u.classList.remove("show")):(i.classList.add("open"),u.classList.add("show"))},g=function(){var e=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(s));e.map(function(n){n.addEventListener("click",function(n){n.preventDefault(),e.map(function(e){return e.classList.remove("current")});var t=n.target.innerHTML;a.innerHTML=t,w(),n.target.classList.add("current")},!1)})};c.addEventListener("click",w,!1),u.addEventListener("click",w,!1),v.addEventListener("click",function(){m.childElementCount<12?(L(m),y()):window.scroll({top:0,behavior:"smooth"}),!p&&m.childElementCount>=12&&(v.innerHTML="&#8593; Back to top",f.classList.add("showInfo"),y(),p=!p)},!1),l.addEventListener("click",function(e){this.innerHTML="<h2>Have a Good Time!</h2>"}),L(m),g()}],[[6,0]]]);
//# sourceMappingURL=main.3817.js.map