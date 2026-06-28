const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

const menuToggle = document.getElementById("menu-toggle");
const navLinksList = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinksList.classList.toggle("active");
});

navLinksList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinksList.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});