window.addEventListener("DOMContentLoaded", () => {
    const accordionOpen = document.getElementById("header__accordion--open");
    const accordionClose = document.getElementById("header__accordion--close");
    const glovalNav = document.getElementById("header__gloval-nav");
    accordionOpen.addEventListener("click", addClassName);
    accordionClose.addEventListener("click", addClassName);


    function addClassName() {
        if(glovalNav.classList.contains("is-active")) {
            glovalNav.classList.remove("is-active")
        } else {
            glovalNav.classList.add("is-active")

        }

        if(accordionOpen.classList.contains("inactive")) {
            accordionOpen.classList.remove("inactive")
        } else {
            accordionOpen.classList.add("inactive")

        }

        if(accordionClose.classList.contains("is-active")) {
            accordionClose.classList.remove("is-active")
        } else {
            accordionClose.classList.add("is-active")

        }
    }
    

});