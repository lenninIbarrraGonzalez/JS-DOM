export default function scroll_up(btnup) {
    const $btn_up = document.querySelector(btnup);
    const $btn_up_classlist = $btn_up.classList;
    //console.log($btn_up_classlist);
    

    document.addEventListener("scroll", () => {
        //console.log(window.scrollY);
        if (window.scrollY  > 100) {
            $btn_up_classlist.remove("btn-inactive");
        }else {
            $btn_up_classlist.add("btn-inactive");
        }
    });

    $btn_up.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // para que suba suavemente
        });
    });

    

}