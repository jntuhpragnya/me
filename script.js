// Countdown Timer
const countdown = () => {
    const launchDate = new Date("June 19, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "We have launched!";
    }
};

setInterval(countdown, 1000);

// Subscribe Form
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('message').innerText = `Thank you, ${email}! You'll be notified when we launch.`;
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('subscribe-form').reset();
});
