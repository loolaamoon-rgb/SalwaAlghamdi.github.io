// Navigation Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const criteriaCards = document.querySelectorAll('.criteria-card');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            criteriaCards.forEach(card => {
                if (category === 'all') {
                    card.classList.remove('hidden');
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === category) {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    } else {
                        card.classList.add('hidden');
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Smooth scroll for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to add evidence (for future use)
function addEvidence(criteriaId, title, date, imagePath) {
    const evidenceList = document.getElementById('evidence-' + criteriaId);
    const emptyState = evidenceList.querySelector('.empty-state');
    
    if (emptyState) {
        emptyState.remove();
    }
    
    const evidenceItem = document.createElement('div');
    evidenceItem.className = 'evidence-item';
    
    let imageHtml = '';
    if (imagePath) {
        imageHtml = `<img src="${imagePath}" alt="${title}">`;
    }
    
    evidenceItem.innerHTML = `
        ${imageHtml}
        <div class="evidence-info">
            <div class="evidence-title">${title}</div>
            <div class="evidence-date">${date}</div>
        </div>
    `;
    
    evidenceList.appendChild(evidenceItem);
}

// Example: How to add evidence programmatically
// addEvidence(1, 'شهادة حضور دورة تدريبية', '1446/05/15', 'images/evidence/cert1.jpg');
