const fadeincand = document.querySelectorAll('.fadein');

window.addEventListener('scroll', function (){

  for(let i = 0; i < fadeincand.length; i++){
    var topY = fadeincand[i].offsetTop;
    if(window.scrollY + document.documentElement.clientHeight -200 > topY){

     fadeincand[i].classList.add('show');
   }

  }
});

const slides_concat = document.querySelectorAll('.slides-concat')[0];
const prev_button = document.querySelectorAll('.prev_button')[0];
const next_button = document.querySelectorAll('.next_button')[0];
const dots = document.querySelectorAll('.dot');
const n_slides = document.querySelectorAll('.content').length;

let count = 0;

dots[0].classList.add('black');
// ↓関数を定義
function pressed_prev() {
  slides_concat.classList.remove(`slide${count+1}`);
  dots[count].classList.remove('black');
  --count;
  if (count < 0) {
    count = n_slides-1
  };
  slides_concat.classList.add(`slide${count+1}`);
  dots[count].classList.add('black');
}
function pressed_next() {
  slides_concat.classList.remove(`slide${count+1}`);
  dots[count].classList.remove('black');
  count++;
  console.log(count);
  count = count % n_slides;
  slides_concat.classList.add(`slide${count+1}`);
  dots[count].classList.add('black');
}
prev_button.addEventListener('click', pressed_prev);
next_button.addEventListener('click', pressed_next);
