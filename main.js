const catPicture = document.getElementsByClassName('cat-picture');
const counterHTML = document.getElementById('counter');
let localCount = 0;

function catClicked() {
    localCount++;
    counterHTML.innerHTML = ("Cat was clicked " + localCount + ' times!');
};
catPicture[0].addEventListener('click', catClicked); 