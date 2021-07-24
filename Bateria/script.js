document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
  let KeyElement = document.querySelector(`div[data-key="${sound}"]`)

  if(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if(KeyElement){
      KeyElement.classList.add('active');

      setTimeout(()=>{
        KeyElement.classList.remove('active');
      }, 300);
  }
}