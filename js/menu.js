const $buttonHamburger = document.querySelector("button");
const $classesHamburger = $buttonHamburger.classList;
const $menuHamburger = document.querySelector("menu");
const $classesMenu = $menuHamburger.classList;

document.addEventListener("click", (e) => {
    if ((e.target.matches(".hamburger")) || 
    (e.target.matches(".hamburger-inner")) ||
    (e.target.matches(".hamburger-box" ))){
        $classesHamburger.toggle("is-active");
        $classesMenu.toggle("active");
        $classesMenu.toggle("inactive");
    }
});


