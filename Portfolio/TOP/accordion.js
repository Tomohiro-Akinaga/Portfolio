window.addEventListener("DOMContentLoaded", () => {
    const accordionOpen = document.getElementById("header__accordion--open");
    accordionOpen.addEventListener("click", showGlovalNab);
});

function showGlovalNab() {
    const accordionOpen = document.getElementById("header__accordion--open");
    const glovalNav = document.getElementById("header__gloval-nav");
    const accordionClose = document.getElementById("header__accordion--close");

    accordionOpen.style.display = "none";
    glovalNav.style.display = "flex";
    accordionClose.style.display = "flex";
}