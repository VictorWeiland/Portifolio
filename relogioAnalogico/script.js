/*declarando variaveis*/
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

/* função para adicionar as horas, minutos e segundos */
function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

      digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
      /* declarando variavel sDeg para fazer a contagem de segundos, minutos e horas*/
      let sDeg = ((360 / 60) * second) - 90;
      let mDeg = ((360 / 60) * minute) - 90;
      let hDeg = ((360 / 12) * hour) -90;
        sElement.style.transform = `rotate(${sDeg}deg)`;
        mElement.style.transform = `rotate(${mDeg}deg)`;
        hElement.style.transform = `rotate(${hDeg}deg)`;


  }
/*função para adicionar um 0 quando for menor que 0*/
  function fixZero(time){
    
    return time < 10 ? `0${time}` : time;
  }

setInterval(updateClock, 1000);
updateClock();