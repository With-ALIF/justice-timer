const startDate = new Date("December 12, 2025 14:00:00").getTime();

function updateTimer(){
    const now = new Date().getTime();
    let diff = now - startDate;
    if(diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

function downloadImage(){
    const element = document.getElementById("captureArea");

    html2canvas(element, {
        scale: 2,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "justice-timer.jpg";
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.click();
    });
}