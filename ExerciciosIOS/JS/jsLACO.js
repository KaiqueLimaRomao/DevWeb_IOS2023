// while
let contador = 1;
 while (contador <= 50) {
     console.log(`n = ${contador}`);
     contador++;
 }
 



//  do-while
 console.clear();
 let n1 = 10,
     texto = '';
 do {
     texto += `O número é ${n1}\n`;
     n1--;
 } while (n1 > 0);
console.log(texto);







// for
console.clear();
for (let M = 1; M < 101; M++) {
    if (M % 2 == 0 )
    console.log(`Número par = ${M}`);
}