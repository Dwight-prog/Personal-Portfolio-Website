$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // emailjs to mail contact form data
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        
        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        emailjs.init("pv63ynNbGpLgtJIAV"); 

        emailjs.sendForm('service_hz2lykb', 'template_m564mh8', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Message Sent Successfully! I'll get back to you soon.");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Failed to send message. Please email me directly at olitadrian44@gmail.com");
            });
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Adrian Olit";
        }
        else {
            document.title =  "Portfolio";
        }
    });


// typed js effect starts
var typed = new Typed(".typing-text", {
  strings: [
    "a BSIT 2nd Year Student",
    "learning everyday",
    "passionate about learning technology",
    "building skills in web development",
    "exploring IT fundamentals"
  ],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});
// typed js effect ends

// tilt js effect starts
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// tilt js effect ends

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// GitHub API Function
async function fetchGitHubRepos() {
    const username = 'Dwight-prog'; // Your GitHub username
    const container = document.getElementById('githubProjectsContainer');
    const reposList = document.getElementById('githubReposList');
    
    // Show container and loading state
    container.style.display = 'block';
    reposList.innerHTML = '<div class="loading-spinner"><i class="fas fa-circle-notch"></i> Loading GitHub projects...</div>';
    
    try {
        // Fetch repos from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        if (repos.length === 0) {
            reposList.innerHTML = '<div class="error-message">No repositories found. Add some projects to your GitHub!</div>';
            return;
        }
        
        // Generate HTML for each repo
        let html = '';
        repos.forEach(repo => {
            const updated = new Date(repo.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            html += `
                <div class="github-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description provided'}</p>
                    <div class="github-stats">
                        <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                        <span><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <span class="github-language">
                            <i class="fas fa-circle" style="color: ${getLanguageColor(repo.language)}; font-size: 1rem;"></i>
                            ${repo.language || 'N/A'}
                        </span>
                        <span style="color: #aaa; font-size: 1.2rem;">
                            <i class="far fa-calendar-alt"></i> ${updated}
                        </span>
                    </div>
                    <a href="${repo.html_url}" target="_blank" class="github-link">
                        <i class="fab fa-github"></i> View Repository
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            `;
        });
        
        reposList.innerHTML = html;
        
        // Smooth scroll to the GitHub section
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        reposList.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-triangle"></i> Failed to load GitHub projects. Please try again later.</div>';
    }
}

// Helper function to get language colors
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'PHP': '#4F5D95',
        'Java': '#b07219',
        'Python': '#3572A5',
        'TypeScript': '#2b7489',
        'Ruby': '#701516',
        'C++': '#f34b7d',
        'C#': '#178600'
    };
    return colors[language] || '#00e5ff';
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchGithubProjects');
    if (fetchButton) {
        fetchButton.addEventListener('click', fetchGitHubRepos);
    }
});

// Initialize OpenStreetMap with Leaflet
function initMap() {
    // Paracale, Camarines Norte coordinates
    const myLocation = [14.2833, 122.7833];
    
    // Create map
    const map = L.map('portfolioMap').setView(myLocation, 15);
    
    // Add OpenStreetMap tiles (completely free!)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add custom marker
    const marker = L.marker(myLocation, {
        icon: L.divIcon({
            className: 'custom-marker',
            html: '<i class="fas fa-map-marker-alt" style="font-size: 2.5rem; color: #00e5ff; filter: drop-shadow(0 0 10px #00e5ff);"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        })
    }).addTo(map);
    
    // Add popup
    marker.bindPopup(`
        <div style="text-align: center; font-family: 'Poppins'">
            <strong style="color: #1fd5e9ff">Adrian Olit</strong><br>
            <span style="color: #000">Paracale, Camarines Norte</span><br>
            <i class="fas fa-code" style="color: #ffae00"></i> BSIT Student
        </div>
    `).openPopup();
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', initMap);

// Feedback System using LocalStorage
function submitFeedback() {
    const name = document.getElementById('feedbackName').value.trim();
    const message = document.getElementById('feedbackMessage').value.trim();
    
    if (!name || !message) {
        alert('Please enter both name and feedback.');
        return;
    }
    
    const feedback = {
        id: Date.now(),
        name: name,
        message: message,
        date: new Date().toLocaleString()
    };
    
    // Get existing feedback from localStorage
    let feedbacks = JSON.parse(localStorage.getItem('portfolio_feedback')) || [];
    
    // Add new feedback
    feedbacks.push(feedback);
    
    // Keep only latest 10 (optional)
    if (feedbacks.length > 10) {
        feedbacks = feedbacks.slice(-10);
    }
    
    // Save back to localStorage
    localStorage.setItem('portfolio_feedback', JSON.stringify(feedbacks));
    
    // Clear form
    document.getElementById('feedbackName').value = '';
    document.getElementById('feedbackMessage').value = '';
    
    // Refresh display
    displayFeedback();
    
    // Show success message
    alert('Thank you for your feedback!');
}

// Feedback System using LocalStorage
function displayFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    const feedbackCount = document.getElementById('feedbackCount');
    
    const feedbacks = JSON.parse(localStorage.getItem('portfolio_feedback')) || [];
    
    // Update count
    feedbackCount.textContent = feedbacks.length;
    
    if (feedbacks.length === 0) {
        feedbackList.innerHTML = '<div class="no-feedback">No feedback yet. Be the first!</div>';
        return;
    }
    
    // Sort by newest first
    feedbacks.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    feedbacks.forEach(item => {
        html += `
            <div class="feedback-item">
                <div class="feedback-item-header">
                    <span class="feedback-item-name"><i class="fas fa-user-circle"></i> ${item.name}</span>
                    <span class="feedback-item-date">${item.date}</span>
                </div>
                <div class="feedback-item-message">${item.message}</div>
            </div>
        `;
    });
    
    feedbackList.innerHTML = html;
}

// Load feedback on page load
document.addEventListener('DOMContentLoaded', displayFeedback);

