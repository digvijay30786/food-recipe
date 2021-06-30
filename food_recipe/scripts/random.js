async function getData(url)
{
    let find = await fetch(url);
    let s = await find.json();
    return s.meals;
}

function appendData(d,sn,np)
{
    
    d.forEach((el) =>
    {
        var n = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.innerHTML = `<b>${np}</b>`;
        var n1 = document.createElement('div');
        var img = document.createElement('img');
        img.src = el.strMealThumb;
        n1.append(img);
        var n2 = document.createElement('div');
        var p = document.createElement('p');
        p.innerHTML = `<b>Area :</b> ${el.strArea}`;

        var p2 = document.createElement('p');
        p2.innerHTML = `<b>Category :</b> ${el.strCategory}`;

        var p3 = document.createElement('p');
        p3.innerHTML = `<b>Instruction : </b> ${el.strInstructions}`;

        var p4 = document.createElement('p');
        p4.innerHTML = `<b>Source : </b> <a href=${el.strYoutube} target=_blank>Watch Video...</a>`;

        n2.append(p,p2,p3,p4);
        n.append(h1,n1, n2);
        sn.append(n);
    });
}

export { getData, appendData };