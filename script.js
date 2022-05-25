console.log('hello from js');

//saving all the querySelectors here
const aboutMeBtn = document.querySelector('#about-me');

const aboutMeSection = document.querySelector('.about-me');

const abtMeCloseBtn = document.querySelector('.close-md-abtme');
//add event listener
//creating event listeners for each of the navs
aboutMeBtn.addEventListener('click', function () {
	aboutMeSection.classList.add('modal-show');
});

abtMeCloseBtn.addEventListener('click', function () {
	aboutMeSection.classList.remove('modal-show');
});
