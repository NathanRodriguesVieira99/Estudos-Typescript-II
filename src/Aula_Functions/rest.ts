

function totalVendas(...vendas: number[]): void {
  const quantidadeDeVendas = vendas.length

  console.log(`Você fez ${quantidadeDeVendas} vendas hoje!`);
}

totalVendas(10, 30, 25, 15, 90, 30)


function mostraNomes(...nomes: string[]) {

  let totalNomes = nomes.length
  console.log(totalNomes);

  nomes.map(nome => {
    console.log(nome);
  })
}
mostraNomes('Max', 'Andreas', 'Iggor', 'Paulo', 'Derrick', 'Eloy')




