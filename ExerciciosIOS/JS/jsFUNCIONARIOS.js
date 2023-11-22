let funcionarios = [
    {
        nome: 'Cleber',
        salario: 1200,
    },
    {
        nome: 'João',
        salario: 1500,
    },
    {
        nome: 'Pedro',
        salario: 1700,
    },
    {
        nome: 'Luciana',
        salario: 5500,
    },
    {
        nome: 'Wally',
        salario: 4800,
    },
];

funcionarios.forEach((nomeFuncionarios) => {
    return (console.log(` o funcionario ${nomeFuncionarios.nome} tem o salario de ${nomeFuncionarios.salario}`))
});

let dissidio = funcionarios.map(nomeFuncionarios => ({
    nome: nomeFuncionarios.nome,
    salario: nomeFuncionarios.salario * 1.05,
}))


dissidio.forEach(nomeFuncionarios => {
    console.log(`Salario dos funcionarios após reajuste de 5%: ${nomeFuncionarios.nome}: R$${nomeFuncionarios.salario}`);
});

let acima500 = dissidio.filter(nomeFuncionarios =>nomeFuncionarios.salario > 5000 );
console.log(`Funcionarios acima de R$5.000,00:`);
console.log(acima500);

let wally = acima500.find(nomeFuncionarios => nomeFuncionarios.nome === "Wally");
console.log(wally);