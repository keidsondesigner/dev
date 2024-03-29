const listaDeUsuarios = [
    {id: 3, nome: 'keidson'},
    {id: 2, nome: 'karol'},
    {id: 1, nome: 'arthur'}
]

// const novasPessoas = {};
// // Neste caso mudou a ordem dos elemento copiados;
// for(const {id, nome} of listaDeUsuarios) {
//     console.log(id, nome);
//     const { id } = listaDeUsuarios;
//     novasPessoas[id] = { ...listaDeUsuarios };
// }

const novasPessoas = new Map();
// Com Map() não muda a ordem dos elementos copiados;
for(const {id, nome} of listaDeUsuarios) {
    console.log(id, nome);
    const { id } = listaDeUsuarios;
    // Para adicionar um valor no Map 
    // preciso da .set("chave", "valor"); 
    novasPessoas.set(id, { ...listaDeUsuarios });
}

console.log(novasPessoas);

// Posso iterar sobre o Map pois ele é um Array
for(const pessoa of novasPessoas) {
    console.log(pessoa)
}