let alunos =[
    {   
       nome : "Kaique",
       sobrenome : "Lima",
       idade : 19,
       endereco : "Rua Uva, 32",
       notas : [10, 10, 10, 9 ],
       corPele : "branco",
       bolsa : "não",
       enem : "não",
   },
   {
       nome : "Jessica",
       sobrenome : "Pereira",
       idade : 18,
       endereco : "Rua Maça, 10",
       notas : [9, 10, 6, 9 ],
       corPele : "branco",
       bolsa : "não",
       enem : "não",
   },
   {
       nome : "Messi",
       sobrenome : "Barrilas",
       idade : 19,
       endereco : "Rua Uva, 19",
       notas : [10, 8, 10, 9 ],
       corPele : "branco",
       bolsa : "não",
       enem : "não",
   }
   ];
   
   for (let i of alunos ){
       let somaNotas = 0;
     
       for (let n of i.notas) {
        somaNotas += n;
       }
     
       let media= somaNotas / 4;
     
       if (media >= 7) {
         console.log(
           `Aluno(a) ${i.nome} ${i.sobrenome}, que reside em ${i.endereco}, com a média ${media}, foi aprovado`
         );
       } else {
         console.log(
            `Aluno(a) ${i.nome} ${i.sobrenome}, que reside em ${i.endereco}, com a média ${media}, foi reprovado`
         );
       }
     }
   
   