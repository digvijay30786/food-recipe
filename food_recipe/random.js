import navbar from "./components/navbar.js";
import { getData, appendData } from "./scripts/random.js";
document.body.innerHTML = navbar();

var ssp = document.getElementById('data');
let render = getData('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
    appendData(res,ssp,"Random Recipe Food")
});

