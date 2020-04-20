var $ = require('jquery');
var moment = require('moment-timezone');


$('#userInput').keypress((event) => {
    if (event.keyCode === 13) {
    
    var input = $('#userInput').val()
    var apiKey = "6661fac6dc36b0bbbfbd0eb0a56d7d59"
    var url = 'https://api.openweathermap.org/data/2.5/weather?'

    $.get(url + 'zip=' + input + '&units=imperial&us&appid=' + apiKey, (response) => {
        
        ($('#name').html(response.name));
        ($('#temp')).html("The Temperature is: " + Math.floor(response.main.temp) + "&#8457;");
        ($('#weather').html("Your Current Weather is: " + response.weather[0].main));

        var lat = (response.coord.lat);
        var lon = (response.coord.lon);
        var url2 = 'https://api.openweathermap.org/data/2.5/onecall?'

        $.get(url2 + 'lat=' + lat + '&lon=' + lon + '&appid=' + apiKey, (response) => {

            var time = (moment().tz(response.timezone).format('hh:mm z'));
            ($('#timeZone').html(time));
           
        })

    });
};

});


    // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    // .then(data => data.JSON()) 
    //     console.log(data)

    // .then(data => {
    //     console.log(data.timeZone);
    // })
    // .catch()

    // });









