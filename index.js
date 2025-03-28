import hamburgerMenu from "./js/menu_hamburguer.js";
import {digitalOclock, alarm} from "./js/timer_alarm.js";
import {move_object, short_Cuts} from "./js/move_object.js";

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
});

