export default function hamburgerMenu(hamburger, nav, anchor) {
    const d = document;
    const $buttonHamburger = d.querySelector(hamburger);
    const $classesHamburger = $buttonHamburger.classList;
    const $menuHamburger = d.querySelector(nav);
    const $classesMenu = $menuHamburger.classList;
    
    document.addEventListener("click", (e) => {
        if (e.target.matches(hamburger) 
            || e.target.matches(`${hamburger} *`)){
                $classesHamburger.toggle("is-active");
                $classesMenu.toggle("active");
                $classesMenu.toggle("inactive");
        }

        if(e.target.matches(anchor)) {
            $classesHamburger.remove("is-active");
            $classesMenu.toggle("active");
            $classesMenu.toggle("inactive");
        }
    });
}






