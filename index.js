import hamburgerMenu from "./js/menu_hamburguer.js";
import {digitalOclock, alarm} from "./js/timer_alarm.js";

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
});

