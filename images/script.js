script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const scrollingTexts = document.querySelectorAll('.scrolling-text');
    
    scrollingTexts.forEach(text => {
        const textContent = text.querySelector('span');
        const textWidth = textContent.offsetWidth;
        const containerWidth = text.offsetWidth;
        
        if (textWidth > containerWidth) {
            // If text is wider than container, create the scrolling effect
            textContent.style.animationDuration = `${textWidth / 50}s`; // Adjust speed here
        } else {
            // If text fits in container, center it
            text.style.justifyContent = 'center';
            textContent.style.animation = 'none';
        }
    });
})document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('faq-modal');
    const btn = document.getElementById('learn-more-btn');
    const span = document.getElementsByClassName('close')[0];
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Open modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // FAQ toggle functionality
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');

            // Close all other answers
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked question
            question.classList.toggle('active');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});<script>
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('faq-modal');
    const btn = document.getElementById('learn-more-btn');
    const span = document.getElementsByClassName('close')[0];
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Open modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // FAQ toggle functionality
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');

            // Close all other answers
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked question
            question.classList.toggle('active');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
</script>