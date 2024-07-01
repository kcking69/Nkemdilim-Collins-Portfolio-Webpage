const hamburger = document.querySelector('.hamburger');
const firstLine = document.querySelector('.span-1');
const secondLine = document.querySelector('.span-2');
const thirdLine = document.querySelector('.span-3');
const links = document.querySelector('.links');
const viewMore = document.querySelector('.view-more');
const moreProject = document.querySelectorAll('.extra-projects');

let clicked = false;
let showProjects = true;

hamburger.addEventListener('click', () => {
  if (!clicked) {
    firstLine.classList.add('-rotate-45');
    firstLine.classList.add('translate-y-[22px]');
    secondLine.classList.add('invisible');
    thirdLine.classList.add('rotate-45');
    links.classList.remove('invisible');
    clicked = true;
  } else if (clicked) {
    firstLine.classList.remove('-rotate-45');
    firstLine.classList.remove('translate-y-[22px]');
    secondLine.classList.remove('invisible');
    thirdLine.classList.remove('rotate-45');
    links.classList.add('invisible');
    clicked = false;
  }
});

viewMore.addEventListener('click', () => {
  if (showProjects) {
    viewMore.innerText = 'View less';
    showProjects = false;
  } else {
    viewMore.innerText = 'View more';
    showProjects = true;
  }
  moreProject.forEach((project) => {
    project.classList.toggle('hidden');
  });
});
