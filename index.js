import hamburgerMenu from "./js/menu_hamburguer.js";
import {digitalOclock, alarm} from "./js/timer_alarm.js";
import {move_object, short_Cuts} from "./js/move_object.js";
import countdown from "./js/cuenta_regresiva.js"
import scroll_up from "./js/scroll_up.js";
import switch_dark_light from "./js/switch_dark_light.js";

const d = document;
d.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu(".hamburger", ".nav", ".nav a");
    digitalOclock(
        "#start-timer", 
        ".clock-hours", 
        ".clock-minutes", 
        ".clock-seconds",
        "#stop-timer"
    ); 
    alarm("assets/alarma.mp3","#btn-play-sound", "#btn-stop-sound");
    move_object(".circle");
    short_Cuts();
    countdown("count-down","Apr 04,2030 11:23:19", "LLego la hora 🤓");
    scroll_up(".btn-up");
    switch_dark_light(".btn-theme", "body");
}); 

