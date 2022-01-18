window.addEventListener("DOMContentLoaded", () => {
    const headerAccordion = document.getElementById("header__accordion");
    const headerGlovalNav = document.getElementById("header__gloval-nav");
    const headerAccordionButton = document.getElementById("header__accordion__button")
    
    const headerAccordionStyle = headerAccordion.style
    const headerGlovalNavStyle = headerGlovalNav.style;

    if (window.matchMedia( "(min-width: 1024px)" ).matches) {
        headerAccordionStyle.setProperty("display", "none");
        headerGlovalNavStyle.setProperty("display", "flex");
    } else if (window.matchMedia( "(max-width: 1023px)" ).matches) {
        headerAccordionStyle.setProperty("display", "flex");
        headerGlovalNavStyle.setProperty("display", "none");
    }

    headerAccordionButton.addEventListener("click", accordion);
    window.addEventListener("resize", addjustAccordion);
});

function addjustAccordion() {
    const headerAccordion = document.getElementById("header__accordion");
    const headerGlovalNav = document.getElementById("header__gloval-nav");
    const headerAccordionButton = document.getElementById("header__accordion__button")

    if (window.outerWidth >= 1024) {
        headerAccordion.style.display = "none";
        headerGlovalNav.style.display = "flex";
    } else if (window.outerWidth <= 1024) {
        headerAccordion.style.display = "flex";
        headerGlovalNav.style.display = "none";
    }

    headerAccordionButton.addEventListener("click", accordion);
};

function accordion() {
    const headerAccordion = document.getElementById("header__accordion");
    const headerGlovalNav = document.getElementById("header__gloval-nav");
    
    if (headerGlovalNav.style.display === "none") {
        headerGlovalNav.style.display = "flex";
    } else if (headerGlovalNav.style.display === "flex") {
        headerGlovalNav.style.display = "none";
    }
};
// resizeイベントとwindow.outerwidthを使う