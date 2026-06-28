const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

},

{

    threshold:.15

}

);

document.querySelectorAll(".reveal,.fade-left,.fade-right,.scale-up")

.forEach(element=>{

    observer.observe(element);

});