const myBtnSiv = document.getElementById('target_1');

myBtnSiv.addEventListener('click', function () {
    document.getElementById('about_game').scrollIntoView()
});




var devDots = document.getElementById('dots');
var devMoreText = document.getElementById('more');
var devBtn = document.getElementById('develop_button');


function more() {
if(devDots.style.display === 'none' ){
    devDots.style.display = 'inline';
    devBtn.innerHTML = "Read more";
    devMoreText.style.display = 'none';
    
}
    else{
         devDots.style.display = 'none';
         devBtn.innerHTML = "Undo";
        devMoreText.style.display = 'inline';
    }
}



function hekk() {
    document.getElementById('hider').hidden = true;
    document.getElementById('hidden2').hidden = false;
    
}

function hek() {setTimeout(gg, 3500);}

function gg() {
    document.getElementById('hidden').hidden = false;
    document.getElementById('hidden2').hidden = true;
    document.getElementById('button1').hidden = true;
}    




const $button = document.querySelector('.header__btn');
const $form = document.querySelector('.development');
       
// При клике на кнопку
$button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  $form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});