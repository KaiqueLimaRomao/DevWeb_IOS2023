window.alert("Sejam bem-vindos");

// Alterando titulo
document.title = "Dom 1";

// Criando H1 
let TH1 = document.createElement ('h1');
// Adicionando conteudo no H1
TH1.innerHTML = "Vasco";

// Criano P (paragrafo)
let PP = document.createElement ('p');
// Adicionando conteudo no P
PP.innerHTML = "Vasco não cai";

// Criando Section
let addSection = document.createElement ('Section');

// Inserindo o H1 na SECTION
addSection.appendChild(TH1)

// Inserindo o p na SECTION
addSection.appendChild(PP)

// Inserindo a Section no HTML
document.body.appendChild(addSection);

let H1A = document.createElement('h1');
H1A.innerHTML = "CORINTHIANS";

let PPA = document.createElement ('p');
PPA.innerHTML = "Corinthians é o maior";

let addArticle = document.createElement ('article');

addArticle.appendChild(H1A);
addArticle.appendChild(PPA);

document.body.appendChild(addArticle);
