const bar=document.querySelector('.progress');
const update=()=>{const d=document.documentElement.scrollHeight-innerHeight;bar.style.width=`${d>0?scrollY/d*100:0}%`};
addEventListener('scroll',update,{passive:true});update();
