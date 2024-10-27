

// Type UNKNOWN (tipo desconhecido > quando você não sabe o tipo que vai receber)

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido

// valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega: any = totalPedido

console.log(entregador);




