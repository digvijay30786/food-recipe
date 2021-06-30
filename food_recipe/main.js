function mySearch()
{
    let va = document.getElementById('search').value;
    newsData(va);
}

async function newsData(dat) {
    
    var Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${dat}`);  
    let news = await Data.json();
    console.log(news.meals);
    renderData(news.meals); 
}

function renderData(find)
{
    var cont = document.getElementById('cont');

    cont.innerHTML = "";

    find.forEach(function (el)
    {
        var div = document.createElement('div');
        var div_cont = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.innerHTML = `<a target=_blank href=${el.strYoutube}>${el.strMeal}</a>`;
        var p = document.createElement('p');
        p.innerText = el.strInstructions;
        div_cont.append(h2, p);
        div.append( div_cont);
        cont.append(div);
        
    });
}

