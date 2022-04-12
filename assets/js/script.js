
var profileEl = document.getElementById('profile-hide')
var aboutMeEl = document.getElementById('about-hide');
var projectEl = document.getElementById('project-hide');
var contactEl = document.getElementById('contact-me')

var homeLink = document.getElementById('home-link')
var contactLink = document.getElementById('contact-me-link');
var aboutLink = document.getElementById('about-me-link');
var projectLink = document.getElementById('projects-link');

var initScreen = function() {
    aboutMeEl.style.display = 'none';
    projectEl.style.display = 'none';
    contactEl.style.display = 'none';
    return;
}

var aboutScreen = function() {
    aboutMeEl.style.display = 'block';
    projectEl.style.display = 'none';
    contactEl.style.display = 'none';
}

var projectScreen = function() {
     aboutMeEl.style.display = 'none';
     projectEl.style.display = 'block';
     contactEl.style.display = 'none';
}

var contactScreen = function () {
    aboutMeEl.style.display = 'none';
    projectEl.style.display = 'none';
    contactEl.style.display = 'block';
}

contactLink.addEventListener('click', contactScreen);
aboutLink.addEventListener('click', aboutScreen);
projectLink.addEventListener('click', projectScreen);
homeLink.addEventListener('click', initScreen);

initScreen();
