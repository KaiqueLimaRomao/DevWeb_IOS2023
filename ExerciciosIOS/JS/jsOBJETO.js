let alunos = [{
    Nome :"Kaique",
    sobrenome : "Lima",
    periodo : "Noturno",
    notas :[5, 9, 6, 8],
    endereco : "Rua Maracuja",
    N: 10,
    nacionalidade: "Brasileiro",
    CordePele: "Branco",
},
{
    Nome : "Arthur",
    sobrenome : "Moreno",
    periodo : "Matino",
    notas :[10, 9, 6, 4],
    endereco : "Rua Manga",
    N : 9,
    nacionalidade : "Brasileiro",
    CordePele : "Branco"
},
{
    Nome : "Lua",
    sobrenome : "Romão",
    periodo : "Tarde",
    notas : [4, 2, 1, 7],
    endereco : "Rua Melancia",
    N : 8,
    nacionalidade : "Brasileira",
    CordePele : "Branca"
},];

const Soma1 = alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2] + alunos[0].notas[3] ;
const Soma2 = alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2] + alunos[1].notas[3] ;
const Soma3 = alunos[2].notas[0] + alunos[2].notas[1] + alunos[2].notas[2] + alunos[2].notas[3] ;

const Media1 = Soma1 / 4 ;
const Media2 = Soma2 / 4 ;
const Media3 = Soma3 / 4 ;

if (Media1 >= 7) {
    console.log(`O aluno ${alunos[0].Nome} ${alunos[0].sobrenome} com as notas ${alunos[0].notas} que reside na ${alunos[0].endereco} Nº ${alunos[0].N} teve a média ${Media1}, portantao foi aprovado);

} else 


