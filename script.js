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
