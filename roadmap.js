// Roadmap Page JavaScript

// Hamburger Menu Functionality
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize checkboxes based on saved progress
    initializeCheckboxes();
    
    // Add event listeners to checkboxes
    setupCheckboxListeners();
    
    // Update week progress displays
    updateWeekProgressDisplays();
    
    // Initialize hamburger menu
    initHamburgerMenu();
});

function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('.day-checkbox input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        const day = parseInt(checkbox.getAttribute('data-day'));
        const isCompleted = window.progressManager.isDayCompleted(day);
        
        checkbox.checked = isCompleted;
        
        // Update card appearance
        const card = checkbox.closest('.day-card');
        if (isCompleted) {
            card.classList.add('completed');
        }
    });
}

function setupCheckboxListeners() {
    const checkboxes = document.querySelectorAll('.day-checkbox input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const day = parseInt(e.target.getAttribute('data-day'));
            const card = e.target.closest('.day-card');
            
            if (e.target.checked) {
                window.progressManager.completeDay(day);
                card.classList.add('completed');
            } else {
                window.progressManager.uncompleteDay(day);
                card.classList.remove('completed');
            }
            
            // Update week progress displays
            updateWeekProgressDisplays();
        });
    });
}

function updateWeekProgressDisplays() {
    for (let week = 1; week <= 4; week++) {
        const progress = window.progressManager.getWeekProgress(week);
        const textEl = document.getElementById(`week${week}-progress-text`);
        
        if (textEl) {
            textEl.textContent = `${progress.completed}/${progress.total} 完了`;
        }
    }
}

// Smooth scroll to week sections
document.querySelectorAll('a[href^="#week"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Made with Bob
