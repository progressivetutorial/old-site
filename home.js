const track=document.querySelector('.carousel-track');
const imgs=Array.from(track.children);
let current=0;

function update(){
  imgs.forEach((img,i)=>{img.classList.toggle('active',i===current);});
  const shift= -current*(imgs[0].getBoundingClientRect().width + 10);
  track.style.transform=`translateX(${shift}px)`;
}

document.querySelector('.carousel-btn.left').onclick=()=>{
  current=(current-1+imgs.length)%imgs.length;update();
};
document.querySelector('.carousel-btn.right').onclick=()=>{
  current=(current+1)%imgs.length;update();
};

window.addEventListener('load',update);
