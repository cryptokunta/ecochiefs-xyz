// Function to copy wallet address to clipboard
function copyWalletAddress() {
    const walletAddress = document.getElementById("wallet-address").innerText;

    navigator.clipboard.writeText(walletAddress)
        .then(() => {
            alert("Wallet address copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
            alert("Failed to copy the wallet address.");
        });
}

// Function to render the token distribution chart using Chart.js
function renderTokenDistribution() {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    const chartData = {
        labels: ['Development', 'Marketing', 'Community', 'Locked'],
        datasets: [{
            label: 'Token Distribution',
            data: [30, 30, 30, 10],
            backgroundColor: ['#4CAF50', '#FFEB3B', '#2E7D32', '#1A2A3A'],
            hoverBackgroundColor: ['#66BB6A', '#FFEE58', '#388E3C', '#263238'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// Function to animate percentage values from 0 to the target value
function animatePercentage(element, start, end, duration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + "%";

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Initialize functions when the window loads
window.onload = function() {
    renderTokenDistribution();
};

// Animate percentages when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const percentages = document.querySelectorAll(".percentage");
    percentages.forEach(function(percentageElement) {
        const targetPercentage = parseInt(percentageElement.getAttribute("data-percentage"), 10);
        animatePercentage(percentageElement, 0, targetPercentage, 2000); // Animate over 2 seconds
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated counter for token distribution percentages
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate percentages when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percentage = entry.target;
            const value = parseInt(percentage.getAttribute('data-percentage'));
            animateValue(percentage, 0, value, 2000);
            observer.unobserve(percentage);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.percentage').forEach(percentage => {
    observer.observe(percentage);
});

// Copy wallet address to clipboard
function copyWalletAddress() {
    const walletAddress = document.getElementById('wallet-address');
    const textArea = document.createElement('textarea');
    textArea.value = walletAddress.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Visual feedback
    walletAddress.style.backgroundColor = 'rgba(255, 235, 59, 0.3)';
    setTimeout(() => {
        walletAddress.style.backgroundColor = 'rgba(255, 235, 59, 0.1)';
    }, 300);
}

// Token distribution chart using Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Development', 'Marketing', 'Community', 'Locked'],
            datasets: [{
                data: [30, 30, 30, 10],
                backgroundColor: [
                    '#4CAF50',
                    '#2E7D32',
                    '#8BC34A',
                    '#FFEB3B'
                ]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: '#ECF0F1'
                }
            }
        }
    });
});

// Dynamic roadmap progress
const roadmapItems = document.querySelectorAll('.roadmap-item');
roadmapItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('active');
    }, index * 500);
});
// ... (previous JavaScript code remains the same)

// New animation for distribution items
document.addEventListener('DOMContentLoaded', function() {
    const distributionItems = document.querySelectorAll('.distribution-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animatePercentage(entry.target.querySelector('.percentage'));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    distributionItems.forEach(item => {
        observer.observe(item);
    });
});

function animatePercentage(element) {
    const finalPercentage = parseInt(element.getAttribute('data-percentage'));
    let currentPercentage = 0;
    const duration = 1500; // 1.5 seconds
    const stepTime = 20; // Update every 20ms

    const updatePercentage = () => {
        if (currentPercentage < finalPercentage) {
            currentPercentage++;
            element.textContent = `${currentPercentage}%`;
            setTimeout(updatePercentage, stepTime);
        }
    };

    updatePercentage();
}