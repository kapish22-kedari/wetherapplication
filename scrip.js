const apikey = "c88d0ddd5865e03b555ace0bda4133a8";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const butn = document.querySelector(".search button");
const imgs = document.querySelector(".img");


async function wether(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


    // if(input.value = " "){
    //     alert("Enter city ");
    // }

    
    if( data.wether[0].main = "Clear"){
        imgs.src = "clear.jpg";
    }

    // else if(data.wether[0].main == "Clouds"){
    //     imgs.src = "clear.jpg";
    // }

    // else if(data.wether[0].main == "Drizzle"){
    //     imgs.src = "images";
    // }
}

butn.addEventListener("click", ()=> {
    wether(input.value);
    input.value="";



    // if(input.value = " "){
    //     alert("Enter city ");
    // }

});

