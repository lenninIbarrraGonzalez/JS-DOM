export function digitalOclock(
    star_timer, 
    clock_hours, 
    clock_minutes, 
    clock_seconds,
    stop_timer
) {
    let intervalTimer = null;

    // Obtener referencias a los elementos una sola vez
    const btnStart = document.querySelector(star_timer);
    const btnStop = document.querySelector(stop_timer);
    const hoursEl = document.querySelector(clock_hours);
    const minutesEl = document.querySelector(clock_minutes);
    const secondsEl = document.querySelector(clock_seconds);

    // Verificar si los elementos existen
    if (!btnStart || !btnStop || !hoursEl || !minutesEl || !secondsEl) {
        console.error("Error: No se encontraron los elementos en el DOM.");
        return;
    }

    document.addEventListener("click", (e) => {
        if (e.target === btnStart) {
            if (intervalTimer) return; // Evita múltiples intervalos

            intervalTimer = setInterval(() => {
                const ahora = new Date();
                const horas = ahora.getHours().toString().padStart(2, '0');
                const minutos = ahora.getMinutes().toString().padStart(2, '0');
                const segundos = ahora.getSeconds().toString().padStart(2, '0');

                hoursEl.textContent = `${horas}:`;
                minutesEl.textContent = ` ${minutos}:`;
                secondsEl.textContent = segundos;
            }, 1000);

            btnStart.disabled = true; // Deshabilita el botón de inicio
        }

        if (e.target === btnStop) {
            clearInterval(intervalTimer);
            intervalTimer = null;
            
            btnStart.disabled = false; // Habilita el botón de inicio
            hoursEl.textContent = "";
            minutesEl.textContent = "";
            secondsEl.textContent = "";
        }
    });
}

export function alarm (sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = document.createElement("audio");
    $alarm.src=sound;
    console.log($alarm);

    document.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)) {
            if(alarmTempo) return
            alarmTempo = setTimeout(() => {
                console.log("play!!!");
                $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0; // reinicia el audio 
            alarmTempo = null;
            document.querySelector(btnPlay).disabled = false;
        }
    });
}
