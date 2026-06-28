/* ==========================================
   PAGE LOADER
========================================== */

const loader = document.getElementById("page-loader");

const alreadyVisited = sessionStorage.getItem("portfolioLoaded");

window.addEventListener("load", () => {

    if (alreadyVisited) {

        loader.remove();

        return;

    }

    sessionStorage.setItem("portfolioLoaded", "true");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1200);

});

const originalTitle=document.title;

document.addEventListener(

"visibilitychange",

()=>{

document.title=

document.hidden

?

"👋 Come back! — Mehul Prajapati"

:

originalTitle;

});

console.log(

"%c👋 Thanks for checking my portfolio!\n\nLet's connect:\nmehulprajapati2004@gmail.com",

"color:#4a7cff;font-size:14px;font-weight:bold;"

);