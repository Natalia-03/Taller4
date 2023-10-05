function Cocktails (done)  {

const results = fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

results
        .then (Response => Response.json())
        .then (data=> {

            done (data)

        });
}

getCocktails( data => {

    data.results.forEach( cocktail => {

       const article = document.createRange().createContextualFragment(/*html*/'<article> <div class = "image-container"> <img src ="${drinks.strDrinkThumb}" alt = "cocktail"> </div> <h2>${drinks.strDrinkThumb}</h2> </article>');

        const main = document.querySelector("main");

        main.append(article)
        
    });



});
