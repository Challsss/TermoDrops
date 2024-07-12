function updateCountdown() {
    const now = new Date();
    const target = new Date("2024-07-20T00:00:00");
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Drops in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCountdown, 1000);
updateCountdown();
