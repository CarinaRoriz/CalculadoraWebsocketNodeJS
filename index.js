const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const calculadora = require('./math');

//API HTTP
const app = express();
const port = 3000;

const logMiddleware = function (req, res, next) {
  console.log("API recebeu uma requisição");

  next();
};

app.use(express.static("./site"));
app.use(logMiddleware);

app.listen(port, () =>
  console.log(`Aplicação rodando no endereço: http://localhost:${port}`)
);

//WebSocket
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("Operação recebida: ", message);
    try{
      let regex = /^(([-+]? ?\d+)( ?[-+*\/])? ?([-+]? ?\d+))$/
      var array = message.match(regex);

      if(array == null){
        ws.send("Operação inválida!");
        return;
      }
      
      var a = parseInt(array[2]);
      var b = parseInt(array[4]);
      var operador = (array[3]).trim();

      if(isNaN(a) || isNaN(b)){
        ws.send("Os valores informados são inválidos");
        return;
      }

      resultado = calcular(a, b, operador);

      ws.send("Resultado: " + resultado.toString());

    } catch(e){
      ws.send("Erro: " + e);
    }

  });
});

//Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor websocket conectado na porta:", server.address().port);
});


const calcular = function(a, b, operador){
    var resultado;

    if(operador == "+"){
        resultado = calculadora.soma(a,b);
    }
    else if(operador == "-"){
        resultado = calculadora.subtracao(a,b);
    }
    else if(operador == "*"){
        resultado = calculadora.multiplicacao(a,b);
    }
    else if(operador == "/"){
        resultado = calculadora.divisao(a,b);
    }
    else{
        resultado = "Operador não inválido!";
    }

    return resultado;
}