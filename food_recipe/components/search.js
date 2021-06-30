function search()
{
    return `<div class="search">
    <input type="text" placeholder="Enter news keywords" id="search">
    <button onclick="mySearch()">Search</button>
</div>
<div class="head" id="head"></div>
<div class="container" id="cont"></div>`;
}

export default search;