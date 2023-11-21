let produto = 900
alert(`o produto custa R$${produto.toFixed(2)}`)

let cupom = prompt("Digite um cupom de deconto");

switch (cupom) {
    case "DESC1":
        let DESC1 = produto * (5 / 100)
        let produtoDESC1 = produto - DESC1
        alert(`o produto recebeu 5%(R$${DESC1})de desconto e está custando R$${produtoDESC1.toFixed(2)}`)
        break;

    case "DESC2":
        let DESC2 = produto * (10 / 100)
        let produtoDESC2 = produto - DESC2
        alert(`o produto recebeu 10%(R$${DESC2}) de desconto e está custando R$${produtoDESC2.toFixed(2)}`)
        break;

    case "DESC3":
        let DESC3 = produto * (15 / 100)
        let produtoDESC3 = produto - DESC3
        alert(`o produto recebeu 15%(R$${DESC3}) de desconto e está custando R$${produtoDESC3.toFixed(2)}`)
        break;

    case "DESC4":
        let DESC4 = produto * (20 / 100)
        let produtoDESC4 = produto - DESC4
        alert(`o produto recebeu 20%(R$${DESC4}) de desconto e está custando R$${produtoDESC4.toFixed(2)}`)
        break;

    case "DESC5":
        let DESC5 = produto * (25 / 100)
        let produtoDESC5 = produto - DESC5
        alert(`o produto recebeu 25%(R$${DESC5}) de desconto e está custando R$${produtoDESC5.toFixed(2)}`)
        break;

    default:
        alert("Nenhum desconto aplicado, cupom invalido")
}