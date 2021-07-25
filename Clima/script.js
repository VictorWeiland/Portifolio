document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault(); /*Impede que o formulario seja enviado*/

      let input = document.querySelector('#searchInput').value;

      if(input !== ''){
          clearInfo();
          showWarning('Carregando...');
      
        /*Montando a Api*/
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=3cf23f271dcb4937070ff74682a6bb07&units=metric&lang=pt_br`;
        /*Aguardando mostrar resultado*/
        let results = await fetch (url);
        let json = await results.json();

        /*coletandoInformaçõesDaAPI*/
        if(json.cod === 200){
            showInfo({
              name:json.name,
              country: json.sys.country,
              temp: json.main.temp,
              tempIcons: json.weather[0].icon,
              windSpeed: json.wind.speed,
              windAngle: json.wind.deg
            });
        }else {
          clearInfo();
          showWarning('Não encontramos esta localização.');
        }
      }else{
          clearInfo();
        }
      
});

/*mostrandoResultadoAPi*/
function showInfo(json){
    showWarning('');
            /*mostrandoResultadoCidadePais*/
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;

        /*mostrandoResultadoTemperatura*/
    document.querySelector('.tempInfo').innerHTML =`${json.temp} <sup>ºC</sup>`;

        /*mostrandoResultadoVento*/
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

        /* mostrandoIcons */
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcons}@2x.png`);

      /* motrandoDireçãoVento */
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

     /*mostrandoResultadoAPi*/
     document.querySelector('.resultado').style.display = 'block';
  }

function clearInfo(){
  showWarning('');
  document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg){
  document.querySelector('.aviso').innerHTML = msg;
}