const app =document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateoutput = document.querySelector(".date");
const timeoutput = document.querySelector(".time");
const conditionoutput= document.querySelector(".condition");
const nameoutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudoutput = document.querySelector(".cloud");
const humidityoutput= document.querySelector(".humidity");
const windoutput= document.querySelector(".wind");
const form = document.getElementById('locationinput');
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

let cityinput = "jaipur";

cities.forEach((city)=>{
    city.addEventListener('click',(e)=>{
        cityinput = e.target.innerHTML;

        fetchWeatherData();
        app.getElementsByClassName.opacity = "";
    });
})

form.addEventListener('submit',(e) =>{

    if(search.value.length == 0){
        alert("Please type in a city name");
    }
    else{
        cityinput = search.value;

        fetchWeatherData();
        app.style.opacity ="";
        //prevent the deafult behaviour of the form
        e.preventDefault();
    }
});



function fetchWeatherData()
{
    fetch(`http://api.weatherapi.com/v1/current.json?key=35b55f21f780488eba7190314221407&q=${cityinput}`)
    .then(response => response.json())
    .then(data =>{console.log(data);
     
     dateoutput.innerHTML=data.location.localtime.substr(0,10);
     timeoutput.innerHTML=data.location.localtime.substr(11);
     nameoutput.innerHTML= data.location.name;
     temp.innerHTML = data.current.temp_c + "&#176;";
     conditionoutput.innerHTML = data.current.condition.text;
     cloudoutput.innerHTML = data.current.cloud +"%";
     humidityoutput.innerHTML = data.current.humidity +"%";
     windoutput.innerHTML = data.current.wind_kph +"km/h";
    
  
    })
}
        

//         const date = date.location.localtime;
//         const y= parseInt(date.substr(0,4));
//         const m= parseInt(date.substr(5,2));
//         const d= parseInt(date.substr(8,2));
//         const time = date.substr(11);



//         const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
//         icon.src = "./icons/" +iconId;

        

//         let timeofDay = "day";
//         const code = data.current.condition.code;

//         if(!data.current.is_day){
//             timeofDay="night";
//         }

//         if(code == 1000){

//             app.style.backgroundImage ='url(./images/${timeofDay}/clear.jpg)';

//             btn.style.background = "#e5ba92";
//             if(timeofDay == "night"){
//                 btn.style.background = "#181e27";
//             }
//         }
//         else if (
//             code == 1003 ||
//             code == 1006 ||
//             code == 1009 ||
//             code == 1030 ||
//             code == 1069 ||
//             code == 1087 ||
//             code == 1135 ||
//             code == 1273 ||
//             code == 1276 ||
//             code == 1279 ||
//             code == 1282 
//         ){
//             app.style.backgroundImage = 'url(./images/${timeofDay}/cloudy.jpg)';
//             btn.style.background = "#fa6d1b";
//             if(timeofDay == "night"){
//                 btn.style.background ="#181e27";
//             }
//         }
//             else if (
//                 code == 1063 ||
//                 code == 1069 ||
//                 code == 1072 ||
//                 code == 1150 ||
//                 code == 1153 ||
//                 code == 1180 ||
//                 code == 1183 ||
//                 code == 1186 ||
//                 code == 1189 ||
//                 code == 1192 ||
//                 code == 1195 ||
//                 code == 1204 ||
//                 code == 1207 ||
//                 code == 1240 ||
//                 code == 1243 ||
//                 code == 1246 ||
//                 code == 1249 ||
//                 code == 1252
//             ){
//                 app.style.backgroundImage ='url(./images/${timeofDay}/rainy.jpg';
//                 btn.style.background = '#647d75';
//                 if(timeofDay =="night"){
//                     btn.style.background = "#325c80";
//                 }
//             }
       
//         else{
//             app.style.backgroundImage ='url(./images/${timeofDay}/snowy.jpg)';
//             btn.style.background ="#4d72aa";
//             if(timeofDay =="night"){
//                 btn.style.background ="#1b1b1b";
//             }
//         }
//         app.style.opacity="1";
//         }
//     )
// .catch(() =>{

// })
// }