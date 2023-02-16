let city;


if ('geolocation' in navigator) {
  navigator.geolocation.watchPosition((position)=>{
    //authoriser la geoloc dans preferences system Mac os sinon walou
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);

    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude +'&lat='+position.coords.latitude +'&appid=APIKEYHERE&units=metric';
    console.log(url);

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        let result = request.response;
        console.log(result);
        let temp =result.main.temp;
        let city = result.name;
        console.log(city, temp);
        document.querySelector('#temperature_label').textContent = temp
        document.querySelector('#ville').textContent = city
        }
      }
      else{
        alert("An error has occured, please come back later.");
      }
    }

  }, error, options);
}
else {
  city = "madrid";
  getTemperature(city);
}

var options = {
  enableHighaccuracy: true
}

function error() {
  city = "Paris";
  getTemperature(city);
}

function getTemperature(city) {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0fc7APIKEYHERE7e995ec&units=metric'

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        let result = request.response;
        console.log(result);
        let temp =result.main.temp;
        let city = result.name;
        console.log(city, temp);
        document.querySelector('#temperature_label').textContent = temp
        document.querySelector('#ville').textContent = city
        }
      }
      else{
        alert("An error has occured, please come back later.");
      }
    }
  }


  //get a new city
  let btn = document.getElementById('changer')
  btn.addEventListener('click', () => {
  console.log('click detected');
  let choosenCity = prompt("Type another city here :)")
  console.log(choosenCity);
  getTemperature(choosenCity);
  // document.getElementById("changer").innerHTML = "Hello World";
})


// let updatedValue = setInterval(getPrice, 5000)
// console.log(updatedValue);


// console.log(getLocation());
// let updatedValue = setInterval(getPrice, 5000)
// console.log(updatedValue);
