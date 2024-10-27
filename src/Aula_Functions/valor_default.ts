

// Como deixar um valor por default ou deixar opcional

// ? faz ser opcional
// nome = 'Aluno'  faz o valor Aluno ser o valor default
function cadastro(email: string, senha: string, nome = 'Aluno', idade?: number): void {
  let data = {
    email,
    senha,
    nome,
    idade
  }
  console.log(data);
}

cadastro('teste@teste.com', '1234', 'Nathan', 19)



function cadastroLoja(nome: string, email: string, status = false): boolean {
  console.log(`Status atual da loja: ${status}`);
  return status
}

cadastroLoja('Burger K', 'bk@teste.com', true) 