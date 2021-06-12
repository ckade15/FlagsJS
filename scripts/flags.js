
function showChinaMap() {
    document.getElementById("china").src= "https://www.nationsonline.org/maps/China-Political-Map.jpg";
    document.getElementById("h1").innerText = "China";
}

function replaceChina() {
    document.getElementById("china").src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_the_Customs_of_the_People%27s_Republic_of_China.svg/220px-Flag_of_the_Customs_of_the_People%27s_Republic_of_China.svg.png";
    document.getElementById("h1").innerText = "Countries and Flags";
}

let china = document.getElementById("china");
china.addEventListener("mouseenter", showChinaMap);
china.addEventListener("mouseleave", replaceChina);


function showIndiaMap() {
    document.getElementById("india").src = "https://www.mapsofindia.com/maps/india/india-large-color-map.jpg";
    document.getElementById("h1").innerText = "India";
}

function replaceIndia() {
    document.getElementById("india").src = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png";
    document.getElementById("h1").innerText = "Countries and Flags";
}

let india = document.getElementById("india");
india.addEventListener("mouseenter", showIndiaMap);
india.addEventListener("mouseleave", replaceIndia);

function showSwiMap() {
    document.getElementById("switzerland").src = "https://www.nationsonline.org/maps/administrative-map-of-switzerland.jpg";
    document.getElementById("h1").innerText = "Switzerland";
}

function replaceSwi() {
    document.getElementById("switzerland").src = "https://i.pinimg.com/originals/37/25/db/3725dbfb33770ac66aa75443cd11f4ec.gif";
    document.getElementById("h1").innerText = "Countries and Flags";
}

let swi = document.getElementById("switzerland");
swi.addEventListener("mouseenter", showSwiMap);
swi.addEventListener("mouseleave", replaceSwi);

function showUSAMap() {
    document.getElementById("usa").src = "https://images-na.ssl-images-amazon.com/images/I/61Vh2vu-mtL._AC_SL1000_.jpg";
    document.getElementById("h1").innerText = "United States of America";
}

function replaceUSA() {
    document.getElementById("usa").src = "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg";
    document.getElementById("h1").innerText = "Countries and Flags";
}

let usa = document.getElementById("usa")
usa.addEventListener("mouseenter", showUSAMap);
usa.addEventListener("mouseleave", replaceUSA);