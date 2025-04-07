export default function countdown(id, limitDate, finalMessage) {
    const $countdown = document.getElementById(id),
        countdownDate = new Date(limitDate).getTime(); // Corrección de typo

    let countdownTempo = setInterval(() => {
        let nowDate = new Date().getTime(),
            limitTime = countdownDate - nowDate;

        // Cálculos corregidos
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

        // Mostrar mensaje final si se acaba el tiempo
        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
            return;
        }

        $countdown.innerHTML = `<h3>Faltan ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
    }, 1000);
}