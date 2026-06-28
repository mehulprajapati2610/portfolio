const palette =
document.getElementById("command-palette");

const input =
document.getElementById("command-input");

const list =
document.getElementById("command-list");

const commands=[

{
title:"Hero",
action:()=>location.hash="hero"
},

{
title:"About",
action:()=>location.hash="about"
},

{
title:"Selected Work",
action:()=>location.hash="work"
},

{
title:"Toolbox",
action:()=>location.hash="toolbox"
},

{
title:"Journey",
action:()=>location.hash="journey"
},

{
title:"GitHub",
action:()=>location.hash="github"
},

{
title:"Certifications",
action:()=>location.hash="certifications"
},

{
title:"Contact",
action:()=>location.hash="contact"
},

{
title:"Resume",
action:()=>window.open("resume.pdf")
},

{
title:"GitHub Profile",
action:()=>window.open("https://github.com/MehulPrajapati04")
},

{
title:"LinkedIn",
action:()=>window.open("https://linkedin.com/in/mehul-prajapati")
}

];

function render(filter=""){

list.innerHTML="";

commands

.filter(cmd=>

cmd.title

.toLowerCase()

.includes(filter.toLowerCase())

)

.forEach(cmd=>{

const li=document.createElement("li");

li.className="command-item";

li.innerHTML=`

<strong>${cmd.title}</strong>

<span>Enter ↵</span>

`;

li.onclick=()=>{

cmd.action();

closePalette();

};

list.appendChild(li);

});

}

render();

function openPalette(){

palette.classList.add("open");

input.value="";

render();

setTimeout(()=>input.focus(),50);

}

function closePalette(){

palette.classList.remove("open");

}

document.addEventListener("keydown",e=>{

if((e.ctrlKey||e.metaKey)&&e.key==="k"){

e.preventDefault();

openPalette();

}

if(e.key==="Escape"){

closePalette();

}

});

input.addEventListener("input",()=>{

render(input.value);

});

palette

.querySelector(".command-overlay")

.onclick=closePalette;