// inicio do projeto 
const container = document.getElementById("produtos")

const produtos =
[
    {
        "id": '1',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '2',
        "flag": "productCardFlag hide",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
    },

    {
        "id": '3',
        "flag": "productCardFlag hide",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '4',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '5',
        "flag": "productCardFlag hide",
        "flagText": " ",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '6',
        "flag": "productCardFlag",
        "flagText": "Promoção",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": "R$ 14,25"
    },
    
    {
        "id": '7',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
    },

    {
        "id": '8',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '9',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '10',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },

    {
        "id": '11',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    },
    
    {
        "id": '12',
        "flag": "productCardFlag",
        "flagText": "Mais vendido",
        "Image": "productCardImage",
        "src": "./assets/image/bag-orange.webp",
        "alt": "Product One",
        "info": "productInfo",
        "desc": "Sou um produto",
        "preco": "R$ 15,00",
        "precoSpan": " "
    }

]

for (let i = 0; i < produtos.length; i++) {
    const {id, flag, flagText, Image, src, alt, info, desc, preco, precoSpan} = produtos[i];

    const meuProduto = document.createElement('div');
    meuProduto.classList.add("productCard");
    meuProduto.innerHTML =  `
        <div class="${flag}">
            <span>${flagText}</span>
        </div>
        <div class="productCardImage">
            <img src="./assets/image/bag-orange.webp" alt="Product One" />
        </div>
        <div class="productInfo">
            <h2>Sou um produto</h2>
            <hr />
            <span>${preco}</span>
            <span>${precoSpan}</span>
        </div>
    `

    container.appendChild(meuProduto);

}