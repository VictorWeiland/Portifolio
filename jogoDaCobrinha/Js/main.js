
/*declarando variaveis do fundo*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
/**declarando variaveis da cobra */
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
/*declarando variaveis das direções*/
let direction = "right";

/**função do fundo */
function criarBG(){
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box,16 * box);
}

/**função da cobrinha */
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
      context.fillStyle = "green";
      context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

/**função do inicio do jogo */
function iniciarJogo(){
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  /** falando as direções  */
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY+= box;

      /**retira o ultimo elemento*/
      snake.pop();

        let newHead = {
          x: snakeX,
          y: snakeY
        }

        snake.unshift(newHead);
    }


let jogo = setInterval(iniciarJogo, 100);

