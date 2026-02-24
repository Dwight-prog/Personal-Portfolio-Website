Adrian Olit - Personal Portfolio Website

Project Overview
This is a personal portfolio website showcasing my skills, projects, educational background, and professional experience as a BSIT student at Camarines Norte State College. The site features multiple sections (Home, About, Skills, Projects, Education, Experience, Contact, Feedback) and integrates three external APIs to provide dynamic functionality and enhance user experience.
The website is built with HTML, CSS, and JavaScript, featuring a responsive design, glass morphism UI effects, smooth animations, and interactive elements.

🚀 APIs Used
1. EmailJS API (Contact Form)
Purpose: Handles form submissions from the Contact section. When a user fills out the contact form, EmailJS sends the data directly to my email address, allowing me to receive messages without a backend server.
Service ID: ############
Template ID: ###############
Public Key: ##############
Integration: Form data is collected and sent via emailjs.sendForm(). The user receives a success or error message based on the API response. EmailJS also sends an auto-reply to the user confirming receipt.

2. GitHub REST API (Projects)
Purpose: Dynamically displays my latest public repositories on demand via the "View All Projects on GitHub" button. This shows visitors my open-source work and coding activity.
Endpoint: https://api.github.com/users/Dwight-prog/repos?sort=updated&per_page=12
Integration: When the user clicks the GitHub button, the API is called. Repository data (name, description, stars, forks, language, last updated) is rendered into cards, each linking to the corresponding GitHub repo. A loading spinner provides visual feedback during the fetch.

3. OpenStreetMap + Leaflet.js (Location Map)
Purpose: Displays an interactive map showing my location in Paracale, Camarines Norte. This adds a visual element to the contact section and demonstrates geolocation/mapping integration.
Integration: Leaflet.js library is used with OpenStreetMap tiles (completely free, no API key required). A custom marker with a popup shows my name and location. The map is styled to match the portfolio's color scheme.

💾 Transaction Features
The primary transactions on this website are:
1. Contact Form Submission
Client-side validation ensures all required fields (name, email, message) are filled
Data is sent to EmailJS API
User receives success/failure alert
Email is delivered to olitadrian44@gmail.com


2. Feedback Submission
User enters name and feedback message
Data is validated and saved to browser's LocalStorage
Feedback count badge updates automatically
Recent feedback list refreshes to show new entry
All feedback persists even after page refresh

