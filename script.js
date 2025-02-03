// Show the welcome popup when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("welcome-popup").style.display = "block";
});

// Close the welcome popup
function closePopup() {
    document.getElementById("welcome-popup").style.display = "none";
}

// Toggle day/night mode
function toggleMode() {
    document.body.classList.toggle("night-mode");
    const modeToggle = document.querySelector(".mode-toggle");
    modeToggle.textContent = document.body.classList.contains("night-mode") ? "☀️" : "🌙";
}

// Share the page
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Web Tools by NoobCoder',
            text: 'Check out these amazing web tools!',
            url: window.location.href
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Sharing is not supported in your browser.');
    }
}

// Bullet firing effect
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const crackEffect = document.createElement('div');
crackEffect.className = 'crack';
document.body.appendChild(crackEffect);

document.querySelectorAll('.tool-link').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const bullet = {
            x: event.clientX,
            y: event.clientY,
            radius: 10, // Larger bullet
            speed: 10,
            angle: Math.random() * Math.PI * 2 // Random angle for bullet direction
        };
    });
});