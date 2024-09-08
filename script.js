// script.js

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

// Chart.js example for token distribution
window.onload = function() {
    var ctx = document.getElementById('distributionChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Development', 'Marketing', 'Community', 'Locked'],
            datasets: [{
                label: 'Token Distribution',
                data: [30, 30, 30, 10],
                backgroundColor: ['#4CAF50', '#FFEB3B', '#2E7D32', '#1A2A3A'],
                hoverBackgroundColor: ['#66BB6A', '#FFEE58', '#388E3C', '#263238'],
                borderWidth: 1
            }]
        },
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
};
// Dummy data for token distribution
const tokenData = {
    Development: 30,
    Marketing: 30,
    Community: 30,
    Locked: 10
};

function renderTokenDistribution() {
    // Get the canvas context
    var ctx = document.getElementById('distributionChart').getContext('2d');

    // Prepare chart data
    var chartData = {
        labels: Object.keys(tokenData),
        datasets: [{
            label: 'Token Distribution',
            data: Object.values(tokenData),
            backgroundColor: ['#4CAF50', '#FFEB3B', '#2E7D32', '#1A2A3A'],
            hoverBackgroundColor: ['#66BB6A', '#FFEE58', '#388E3C', '#263238'],
            borderWidth: 1
        }]
    };

    // Create and display the chart
    var chart = new Chart(ctx, {
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

// Copy wallet address logic
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

// Render the chart when the window loads
window.onload = function() {
    renderTokenDistribution();
};
