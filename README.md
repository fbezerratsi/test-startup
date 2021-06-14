## test-startup

# Diretrizes

- Baixe o projeto;
- Instale as dependências: (npm i);
- Entre na pasta do test e execute-o para verificar se está funcionando: (npm start);

# Sistema simples calculadora

1. Crie uma rota '/sum' (method POST) que envie dois números (number1 e number2) e retorne o resultado da soma;
2. Crie uma rota '/subtraction' (method POST) que envie dois números (number1 e number2) e retorne o resultado da subtração;
3. Crie uma rota '/multiplication' (method POST) que envie dois números (number1 e number2) e retorne o resultado da multiplicação;
4. Crie uma rota '/division' (method POST) que envie dois números (number1 e number2) e retorne o resultado da divisão. Obs.: Envie uma mensagem de erro caso o denominador seja 0 (zero).
    Ex.: { "code": 500, "message": "O denominador não pode, não existe a divisão por nada, por 0" }

# Programas usados

- Postman: para enviar a requisição e receber a resposta;
- Visual Studio Code: Codificar.