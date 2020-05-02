var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var tem = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=60047,us&units=imperial&';
  var myIDString = 'appid=c4e426b20c5421d8e967822b282662b0'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  tem = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    text("we have weather", 20, 20) ;

    text("the temperature is " + (weather.main.temp)  + " degrees Fahrenheit", 20, 50);
    text("the humidity is " + (weather.main.humidity) + " percent", 20, 80);
    text("the windspeed will be " + (weather.wind.speed) + " miles per hour", 20, 110);

    fill ('red');
    var tmp = 0;
    tmp = map(tem, 0, 100, 2, height -10);
    rect(width-50,height-20, 30, -tmp);

    break;

}
}
