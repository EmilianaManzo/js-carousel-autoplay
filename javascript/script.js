// elementi importati
const imageBox = document.querySelector('.image-box');
const thumb = document.querySelector('.thumbnails');
const iconUp = document.querySelector('.btn-up');
const iconDown = document.querySelector('.btn-down');


// variabili
const imgArr = [
  'assets/img/01.webp' ,
  'assets/img/02.webp' ,
  'assets/img/03.webp' ,
  'assets/img/04.webp' ,
  'assets/img/05.webp' 
];



// contatore immagini
let counterImg = 0;


// ciclo for per inserire le immagini nell' html

for (let i= 0; i< imgArr.length ; i++){
  console.log(i);
  const image = imgArr[i];
  const imgthumb = imgArr[i];
  

  imageBox.innerHTML += `<img src=" ${image} " class="imgb hide" >`;
  thumb.innerHTML += `<img src=" ${imgthumb}" alt="" class="imgm layer">`;

}


// // prendo tutti gli elementi che sono tag img 
const imgcollection = document.getElementsByClassName('imgb');

const imgMini = document.getElementsByClassName('imgm');


imgcollection[counterImg].classList.remove('hide');
imgMini[counterImg].classList.add('active');




// Inizio bottoni con addEventListener

iconDown.addEventListener('click', function(){
  imgcollection[counterImg].classList.add('hide');
  imgMini[counterImg].classList.remove('active');
  counterImg++;

  if (counterImg > imgArr.length-1){
    counterImg = 0;
  }

  imgcollection[counterImg].classList.remove('hide');
  imgMini[counterImg].classList.add('active');

});


iconUp.addEventListener('click', function(){
  imgcollection[counterImg].classList.add('hide');
  imgMini[counterImg].classList.remove('active');

  counterImg--;
  
  if (counterImg < 0){
    counterImg = imgArr.length-1;
  }
  
  imgcollection[counterImg].classList.remove('hide');
  imgMini[counterImg].classList.add('active');

  
});



// TIMING FUNCTION 

let giroCount = 0;

const girotondo = () => {
  imgcollection[giroCount].classList.add('hide');
  imgMini[giroCount].classList.remove('active');

  giroCount++;
  
  
  if (giroCount > imgArr.length-1){
    giroCount = 0;
  }

  
  imgcollection[giroCount].classList.remove('hide');
  imgMini[giroCount].classList.add('active');

}

const giroloop = setInterval (girotondo, 3000);
