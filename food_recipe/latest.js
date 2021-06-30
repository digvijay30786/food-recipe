import navbar from "./components/navbar.js";
import { getData, appendData } from "./scripts/random.js";

document.body.innerHTML = navbar();
var ssp = document.getElementById('data');
let render = getData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772').then((res)=>{
    appendData(res,ssp,"Latest of the Day")
});

