window.addEventListener("DOMContentLoaded", () => {
        const headerAccordion = document.getElementById("header__accordion");
        headerAccordion.addEventListener("click", accordion);
});

function accordion() {
    const headerAccordion = document.getElementById("header__accordion");
    const headerGlovalNav = document.getElementById("header__gloval-nav");

    if (window.matchMedia( "(max-width: 1023px)" ).matches) {
        // console.log(headerGlovalNav.style.display);
        if (headerGlovalNav.style.display === "") {
            headerGlovalNav.style.display = "flex";
            // console.log(headerGlovalNav.style.display);
        } else if (headerGlovalNav.style.display === "flex") {
            headerGlovalNav.style.display = "none";
            // console.log(headerGlovalNav.style.display);
        } else if (headerGlovalNav.style.display === "none") {
            headerGlovalNav.style.display = "flex";
            // console.log(headerGlovalNav.style.display);
        } else if (headerAccordion === null) {
            headerGlovalNav.style.display = "flex";
            // console.log(headerGlovalNav.style.display);
        }
    } else  {
        headerGlovalNav.style.display = "flex"
    }
};

// window.addEventListener("mousemove", displayGlovalNav);

// function displayGlovalNav() {
//     const headerAccordion = document.getElementById("header__accordion");
//     const headerGlovalNav = document.getElementById("header__gloval-nav");
//     if (headerAccordion.style.display === null ) {
//         headerGlovalNav.style.display = "flex";
//     }
// };


