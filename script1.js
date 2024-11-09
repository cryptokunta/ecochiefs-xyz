script1.js 

document.addEventListener('DOMContentLoaded', function() {
    const phases = [
        { number: 1, title: "Phase 1: Genesis", description: "Launch of EcoChiefs platform and initial Guardian NFT release" },
        { number: 2, title: "Phase 2: Growth", description: "Expansion of Guardian abilities and first major conservation project funding" },
        { number: 3, title: "Phase 3: Bloom", description: "Introduction of EcoToken and decentralized governance model" },
        { number: 4, title: "Phase 4: Harmony", description: "Global expansion and integration with major environmental initiatives" }
    ];

    let activePhase = 1;
    let intervalId;

    function updateActivePhase() {
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        roadmapItems.forEach((item, index) => {
            if (index + 1 === activePhase) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const progress = document.querySelector('.roadmap-progress');
        if (progress) {
            progress.style.height = `${(activePhase / phases.length) * 100}%`;
        }
    }

    function advancePhase() {
        activePhase = (activePhase % phases.length) + 1;
        updateActivePhase();
    }

    function startAdvancement() {
        if (!intervalId) {
            intervalId = setInterval(advancePhase, 3000);
        }
    }

    function stopAdvancement() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function handleResize() {
        updateActivePhase(); // Recalculate positions on resize
    }

    updateActivePhase();
    startAdvancement();

    // Add hover effect and touch support
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    roadmapItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            stopAdvancement();
            this.classList.add('active');
        });
        item.addEventListener('mouseleave', function() {
            startAdvancement();
            if (parseInt(this.getAttribute('data-phase')) !== activePhase) {
                this.classList.remove('active');
            }
        });
        item.addEventListener('touchstart', function(e) {
            e.preventDefault();
            stopAdvancement();
            this.classList.add('active');
        }, {passive: false});
        item.addEventListener('touchend', function() {
            startAdvancement();
            if (parseInt(this.getAttribute('data-phase')) !== activePhase) {
                this.classList.remove('active');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);
})const video = document.getElementById('background-video');

video.addEventListener('mouseenter', function() {
    video.pause(); // Pause the video on hover
});

video.addEventListener('mouseleave', function() {
    video.play(); // Resume playing when not hovered
});
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');

    video.addEventListener('mouseenter', function() {
        video.pause(); // Pause the video on hover
    });

    video.addEventListener('mouseleave', function() {
        video.play(); // Resume playing when not hovered
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const marquees = document.querySelectorAll('.marquee');
    
    function adjustMarqueeAnimations() {
        marquees.forEach(marquee => {
            const container = marquee.closest('.marquee-container');
            const textWidth = marquee.offsetWidth;
            const containerWidth = container.offsetWidth;
            
            if (textWidth > containerWidth) {
                const duration = textWidth / 50; // Adjust speed here
                marquee.style.animationDuration = `${duration}s`;
            } else {
                marquee.style.animationDuration = '0s';
            }
        });
    }
  
    // Run on load and resize
    adjustMarqueeAnimations();
    window.addEventListener('resize', adjustMarqueeAnimations);

    // Add hover effect to pause marquee animation
    document.querySelectorAll('.avatar-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.marquee').style.animationPlayState = 'paused';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.marquee').style.animationPlayState = 'running';
        });
    });
});
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

document.addEventListener("DOMContentLoaded", function() {
    const percentages = document.querySelectorAll(".percentage");
    percentages.forEach(function(percentageElement) {
        const targetPercentage = parseInt(percentageElement.getAttribute("data-percentage"), 10);
        animatePercentage(percentageElement, 0, targetPercentage, 2000); // Animate over 2 seconds
    });
});
;