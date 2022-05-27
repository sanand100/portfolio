console.log('hello from js');

//saving all the querySelectors here
const homePage = document.querySelector('.header-nav-container');

const aboutMeBtn = document.querySelector('#about-me');
const aboutMeSection = document.querySelector('.about-me-container');
const abtMeCloseBtn = document.querySelector('.close-md-abtme');

const contactMeBtn = document.querySelector('#contact-me');
const contactMeSection = document.querySelector('.contact-me-container');
const contactMeCloseBtn = document.querySelector('.close-md-contactme');

const projectsBtn = document.querySelector('#my-projects');
const projectSection = document.querySelector('.projects-container ');
const projectsCloseBtn = document.querySelector('.close-md-projects');

const workexBtn = document.querySelector('#work-exp');
const workexSection = document.querySelector('.workex-container ');
const workexCloseBtn = document.querySelector('.close-md-workex');

//add event listener
//creating event listeners for each of the navs
aboutMeBtn.addEventListener('click', function () {
	aboutMeSection.classList.add('modal-show');
	homePage.classList.add('modal');
});
abtMeCloseBtn.addEventListener('click', function () {
	aboutMeSection.classList.remove('modal-show');
	homePage.classList.remove('modal');
});

contactMeBtn.addEventListener('click', function () {
	contactMeSection.classList.add('modal-show');
	homePage.classList.add('modal');
});
contactMeCloseBtn.addEventListener('click', function () {
	contactMeSection.classList.remove('modal-show');
	homePage.classList.remove('modal');
});

projectsBtn.addEventListener('click', function () {
	projectSection.classList.add('modal-show');
	homePage.classList.add('modal');
});
projectsCloseBtn.addEventListener('click', function () {
	projectSection.classList.remove('modal-show');
	homePage.classList.remove('modal');
});

workexBtn.addEventListener('click', function () {
	workexSection.classList.add('modal-show');
	homePage.classList.add('modal');
});
workexCloseBtn.addEventListener('click', function () {
	workexSection.classList.remove('modal-show');
	homePage.classList.remove('modal');
});
