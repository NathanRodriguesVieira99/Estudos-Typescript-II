

function login(username: string): boolean | string {
  let message = `Bem vindo ${username}`

  console.log(message);

  return username;
}
const usernameLogin = login('Nathan')
console.log(usernameLogin);


let n1: number = 10
let n2: number = 25

function soma(valor1: number, valor2: number): string {
  let soma = valor1 + valor2
  if (soma > 20) {
    return 'Soma maior que 20'
  } else {
    return 'Menor que 20'
  }
}
console.log(soma(n1, n2));



