const pessoas = [
    {id: 3, nome: 'Manuel'},
    {id: 2, nome: 'Julia'},
    {id: 1, nome: 'Tomas'},
];

/*const novasPessoas = {};
for(const pessoa of  pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}*/

const novasPessoas = new Map();
for(const pessoa of  pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for(const pessoa of novasPessoas){
    console.log(pessoa);
}