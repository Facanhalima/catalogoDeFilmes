const xhttp = new XMLHttpRequest()

const faixaEtaria = classificacao =>{

    JSON.stringify(classificacao)

    switch(classificacao){

        case 16: return `<p class="classificacao maior16">${classificacao}</p>`;

        case 18: return `<p class="classificacao maior18">${classificacao}</p>`;
        break;

        default: return `<p class="classificacao livre">Livre</p>`

    }

}

const nota = rating =>{

    JSON.stringify(rating)

    console.log(rating)
    
    const tamanho = rating.length;
    let armazena = new String()
    let converte = new Number()
    
    for(i = 0; i<tamanho; i++){
        
        armazena = rating[i].rating
        converte += parseInt(armazena)
        console.log(converte)
        
    }

    converte = (converte / tamanho)

    switch(armazena){

        case 1: return ` <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>`;

        case 2: return ` <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>`;
    
        case 3: return ` <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>`;
                         
                         
        case 4: return ` <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela"></span>`;
                         
        default: 
        console.log(rating);
        return ` <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>
                         <span class="glyphicon glyphicon-star estrela amarelo"></span>`;
                        

    }

}

const montarCatalogo = (filme) => 
    `

    <article class="boxes">

        <div class="cantoDireito">

            <img src="${filme.figura}" alt="#" class="imagemFilme">
            <div class="cartaz ">

                <h3 class="titulo">${filme.titulo}</h3>
                <p class="generos">${filme.generos}</p>
                <p class="elenco">${filme.elenco}</p>

            </div>

            <aside class="cartaz-classificacao">

                ${faixaEtaria(filme.classificacao)}
                ${nota(filme.opinioes)}

            </aside>

        </div>

        <div class="cartaz-resumo">

            <p>${filme.resumo}</p>

        </div>
        
        <footer class="cartaz-titulos-similares">
            <p>Titulos Similares:</p>
            ${filme.titulosSemelhantes}
        
        </footer>

    </article>

    `

const carregarCatalogo = (catalogoLista, seletorCatalogo) =>{

    const divCatalogo = document.querySelector(seletorCatalogo)

    catalogoLista.forEach(filme => {
        
        divCatalogo.innerHTML += montarCatalogo(filme)

    });

}

xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

        carregarCatalogo(JSON.parse(this.responseText),".catalogo")

    }


}

xhttp.open("GET", "https://rafaelescalfoni.github.io/desenv_web/filmes.json")

xhttp.send()