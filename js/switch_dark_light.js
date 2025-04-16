export default function switch_dark_light (btnStwitch, body) {
    const $btn_switch = document.querySelector(btnStwitch);
    const $img = $btn_switch.querySelector('img');
    const $body = document.querySelector(body);
    const $body_classlist = $body.classList;
    

    $btn_switch.addEventListener("click", () => {
        
        $body_classlist.toggle("dark-mode");
        
        ($body_classlist.contains("dark-mode")) 
        ? $img.src = './assets/img-ligth-mode.png'
        :  $img.src = './assets/img-dark-mode.png';
    });
}