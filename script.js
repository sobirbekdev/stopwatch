const playBtn =document.getElementsByClassName("play")[0];
const lapBtn =document.getElementsByClassName("lap")[0];
const resBtn =document.getElementsByClassName("rest")[0];
const clerBtn =document.getElementsByClassName("lap__clear__btn")[0];
const second =document.getElementsByClassName("sec")[0];
const elMinute =document.getElementsByClassName("minute")[0];
const sentiSecond =document.getElementsByClassName("msec")[0];
const elLaps =document.getElementsByClassName("laps")[0];
const elText =document.getElementsByClassName("text")[0];
const bg =document.getElementsByClassName("outer__circle")[0];

let isPlay = false
let secCounter = 0;
let min;
let sec ;
let sentiSec;
let sentiCounter =0;
let minCounter =0;
let lapItem =0;
let isReset  =false;


const toggleBtn = () => {
    lapBtn.classList.remove("hidden");
    resBtn.classList.remove("hidden");
}




const play = ()=> {
    if(!isPlay && !isReset){
        playBtn.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min =  setInterval(()=>{
            elMinute.innerHTML = `&nbsp;${++minCounter}:`;
        },60*1000);
        sec = setInterval(() =>{
            if(secCounter ===60){
                secCounter =0;
            }
            second.innerHTML = `&nbsp;${++secCounter}:`;
        },1000);
        sentiSec =  setInterval(()=>{
            if(sentiCounter ===100){
                sentiCounter =0;
            }
            sentiSecond.innerHTML = `${++sentiCounter}:`;
        },10);
        isPlay = true;
        isReset = true;
    }else{
        playBtn.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec); 
        clearInterval(sentiSec);
        isPlay = false;
        isReset=false;
        bg.classList.remove("animation-bg");
    }
    toggleBtn();
    
}





const reset =() =>{
    isReset =true;
    play();
    // lapBtn = classList.add("hidden");
    // resBtn = classList.add("hidden");
    second.innerHTML = `&nbsp;0 :`;
    sentiSecond.innerHTML = `&nbsp;0 :`;
    elMinute.innerHTML = `0 :`;
}



const lap =() =>{
    const li = document.createElement("li");
    const nambr = document.createElement("span");
    const timeStap = document.createElement("span");

    li.setAttribute("class","lap__item")
    nambr.setAttribute("class","nummber")
    timeStap.setAttribute("class","time__stap")

nambr.innerText = `#${++lapItem}`;
    timeStap.innerHTML =`${minCounter}:${secCounter}:${sentiCounter}`;

    li.append(nambr,timeStap);
    elLaps.append(li);

    clerBtn.classList.remove("hidden");
}

const clerAll =()=>{
    elLaps.innerHTML = '';
    elLaps.append(clerBtn);

    clerBtn.classList.add("hidden");
    lapItem =0;
}

resBtn.addEventListener("click", reset);
playBtn.addEventListener("click", play);
lapBtn.addEventListener("click", lap);
clerBtn.addEventListener("click", clerAll);
