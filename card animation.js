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
  
    // Add hover effect to pause animation
    document.querySelectorAll('.avatar-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.marquee').style.animationPlayState = 'paused';
      });
      card.addEventListener('mouseleave', () => {
        card.querySelector('.marquee').style.animationPlayState = 'running';
      });
    });
  });Your JavaScript code has several issues, including duplicate functions, missing semicolons, and redundant event listeners. Here's a corrected version with improvements:

  ```javascript
  // Function to copy wallet address to clipboard
  function copyWalletAddress() {
    const walletAddress = document.getElementById('wallet-address').textContent;
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
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // FAQ Dropdown Functionality
    const faqDropdown = document.getElementById('faq-dropdown');
    const faqAnswer = document.getElementById('faq-answer');
    const faqContent = {
      'how-to-buy': `
        <p>To buy EcoChiefs tokens using SOL:</p>
        <ol>
          <li>Ensure you have SOL in your Solana wallet (e.g., Phantom, Solflare).</li>
          <li>Visit our token sale page and connect your wallet.</li>
          <li>Enter the amount of EcoChiefs tokens you want to purchase.</li>
          <li>Confirm the transaction in your wallet.</li>
          <li>Once confirmed, you'll receive your EcoChiefs tokens.</li>
        </ol>
      `,
      'minimum-amount': `
        <p>The minimum purchase amount is 0.1 SOL. This ensures that even smaller investors can participate in our ecosystem.</p>
      `,
      'fees': `
        <p>There are no additional fees from EcoChiefs for purchasing tokens. However, you will need to pay the standard Solana network transaction fee, which is typically a fraction of a SOL.</p>
      `,
      'receipt-time': `
        <p>EcoChiefs tokens are usually transferred to your wallet immediately after the Solana network confirms the transaction, which typically takes a few seconds. In rare cases of network congestion, it might take up to a few minutes.</p>
      `,
      'other-crypto': `
        <p>Currently, we only accept SOL for direct purchases of EcoChiefs tokens. However, you can easily swap other cryptocurrencies for SOL on various exchanges before making your purchase.</p>
      `
    };
    faqDropdown.addEventListener('change', function() {
      const selectedQuestion = this.value;
      if (selectedQuestion && faqContent[selectedQuestion]) {
        faqAnswer.innedocument.addEventListener('DOMContentLoaded', function() {
      const roadmapItems = document.querySelectorAll('.roadmap-item');
      const roadmapProgress = document.querySelector('.roadmap-progress');
      let currentPhase = 1;
  document.addEventListener('DOMContentLoaded', function() {
      const phases = [
          { number: 1, title: "Phase 1: Genesis", description: "Launch of EcoChiefs platform and initial Guardian NFT release" },
          { number: 2, title: "Phase 2: Growth", description: "Expansion of Guardian abilities and first major conservation project funding" },
          { number: 3, title: "Phase 3: Bloom", description: "Introduction of EcoToken and decentralized governance model" },
          { number: 4, title: "Phase 4: Harmony", description: "Global expansion and integration with major environmental initiatives" }
      ];
  
      let activePhase = 1;
  
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
          progress.style.height = `${(activePhase / phases.length) * 100}%`;
      }
  
      function advancePhase() {
          activePhase = (activePhase % phases.length) + 1;
          updateActivePhase();
      }
  
      updateActivePhase();
  
      setInterval(advancePhase, 3000);
  
      // Add hover effect
      const roadmapItems = document.querySelectorAll('.roadmap-item');
      roadmapItems.forEach(item => {
          item.addEventListener('mouseenter', function() {
              this.classList.add('active');
          });
          item.addEventListener('mouseleave', function() {
              if (parseInt(this.getAttribute('data-phase')) !== activePhase) {
                  this.classList.remove('active');
              }
          });
      });
  })document.addEventListener('DOMContentLoaded', function() {
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
  
    // Add hover effect to pause animation
    document.querySelectorAll('.avatar-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.marquee').style.animationPlayState = 'paused';
      });
      card.addEventListener('mouseleave', () => {
        card.querySelector('.marquee').style.animationPlayState = 'running';
      });
    });
  const video = document.getElementById('background-video');
  
  video.addEventListener('mouseenter', function() {
      video.pause(); // Pause the video on hover
  });
  
  video.addEventListener('mouseleave', function() {
      video.play(); // Resume playing when not hovered
  });
  });;