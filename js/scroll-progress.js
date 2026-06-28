const progress=

document.getElementById(

"scroll-progress"

);

window.addEventListener(

"scroll",

()=>{

const height=

document.documentElement.scrollHeight

-

window.innerHeight;

const width=

(window.scrollY/height)*100;

progress.style.width=

width+"%";

});