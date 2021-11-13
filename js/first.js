var DateOfToday = document.getElementById("DateOfToday");
var tDay = document.getElementById("tDay")
var loc = document.getElementById("loc")
var maxTemp = document.getElementById("maxTemp")
var firstImg = document.getElementById("firstImg")
var secondImg = document.getElementById("secondImg")
var thirdImg = document.getElementById("thirdImg")
var stats = document.getElementById("status")
var rainn = document.getElementById("rain")
var windd = document.getElementById("windd")
var windDirection = document.getElementById("windDirection")


var tDay1 = document.getElementById("tDay1")
var maxTemp1 = document.getElementById("maxTemp1")
var minTemp1 = document.getElementById("minTemp1")
var stats1 = document.getElementById("status1")



var tDay2 = document.getElementById("tDay2")
var maxTemp2 = document.getElementById("maxTemp2")
var minTemp2 = document.getElementById("minTemp2")
var stats2 = document.getElementById("status2")


function foo(){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=c8a897c503614766b39220025211209&q=cairo&days=3&aqi=no&alerts=no`)
    .then(response =>{ 

        return response.json()
    }).then(data =>{
        
        var today = data.forecast.forecastday[0].date
        var location = data.location.name
        var maxT = data.forecast.forecastday[0].day.maxtemp_c
        var stat = data.forecast.forecastday[0].day.condition.text
        var rain = data.forecast.forecastday[0].day.daily_chance_of_rain
        var wind = data.forecast.forecastday[0].day.maxwind_kph
        var windDirec = data.forecast.forecastday[0].hour[0].wind_dir
       displayToday(today,location,maxT,stat,rain,wind,windDirec)


       var today1 = data.forecast.forecastday[1].date
       var maxT1 = data.forecast.forecastday[1].day.maxtemp_c
       var minT1 = data.forecast.forecastday[1].day.mintemp_c
       var stat1 = data.forecast.forecastday[1].day.condition.text
       displayTomorrow(today1,maxT1,minT1,stat1)

       var today2 = data.forecast.forecastday[2].date
       var maxT2 = data.forecast.forecastday[2].day.maxtemp_c
       var minT2 = data.forecast.forecastday[2].day.mintemp_c
       var stat2 = data.forecast.forecastday[2].day.condition.text
       displayAfterTomorrow(today2,maxT2,minT2,stat2)


    })
    

}


function  getLocation(LocationName){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=c8a897c503614766b39220025211209&q=${LocationName}&days=3&aqi=no&alerts=no`)
    .then(response =>{ 

        return response.json()
    }).then(data =>{
        
        var today = data.forecast.forecastday[0].date
        var location = data.location.name
        var maxT = data.forecast.forecastday[0].day.maxtemp_c
        var stat = data.forecast.forecastday[0].day.condition.text
        var rain = data.forecast.forecastday[0].day.daily_chance_of_rain
        var wind = data.forecast.forecastday[0].day.maxwind_kph
        var windDirec = data.forecast.forecastday[0].hour[0].wind_dir
       displayToday(today,location,maxT,stat,rain,wind,windDirec)

       if(stat == "Sunny"){
        firstImg.src = "images/114.png"
    }
    else if(stat == "Partly cloudy"){
        firstImg.src = "images/116.png"
    }else if(stat == "Patchy rain possible"){
        firstImg.src = "images/176.png"
    }else if(stat == "Heavy rain"){
        firstImg.src = "images/308.png"
    }else if(stat == "Clear"){
        firstImg.src = "images/113.png"
    }else if(stat == "Moderate rain"){
        firstImg.src = "images/353.png"
    }else if(stat == "Mist"){
        firstImg.src = "images/143.png"
    }else{
        firstImg.src = "images/116.png"
    }


       var today1 = data.forecast.forecastday[1].date
       var maxT1 = data.forecast.forecastday[1].day.maxtemp_c
       var minT1 = data.forecast.forecastday[1].day.mintemp_c
       var stat1 = data.forecast.forecastday[1].day.condition.text
       displayTomorrow(today1,maxT1,minT1,stat1)

       if(stat1 == "Sunny"){
        firstImg.src = "images/114.png"
    }
    else if(stat1 == "Partly cloudy"){
        secondImg.src = "images/116.png"
    }else if(stat1 == "Patchy rain possible"){
        secondImg.src = "images/176.png"
    }else if(stat1 == "Heavy rain"){
        secondImg.src = "images/308.png"
    }else if(stat1 == "Clear"){
        secondImg.src = "images/113.png"
    }else if(stat1 == "Moderate rain"){
        secondImg.src = "images/353.png"
    }else if(stat1 == "Mist"){
        secondImg.src = "images/143.png"
    }else{
        secondImg.src = "images/116.png"
    }

       var today2 = data.forecast.forecastday[2].date
       var maxT2 = data.forecast.forecastday[2].day.maxtemp_c
       var minT2 = data.forecast.forecastday[2].day.mintemp_c
       var stat2 = data.forecast.forecastday[2].day.condition.text
       displayAfterTomorrow(today2,maxT2,minT2,stat2)

       if(stat2 == "Sunny"){
        firstImg.src = "images/114.png"
    }
    else if(stat2 == "Partly cloudy"){
        thirdImg.src = "images/116.png"
    }else if(stat2 == "Patchy rain possible"){
        thirdImg.src = "images/176.png"
    }else if(stat2 == "Heavy rain"){
        thirdImg.src = "images/308.png"
    }else if(stat2 == "Clear"){
        thirdImg.src = "images/113.png"
    }else if(stat2 == "Moderate rain"){
        thirdImg.src = "images/353.png"
    }else if(stat2 == "Mist"){
        thirdImg.src = "images/143.png"
    }else{
        thirdImg.src = "images/116.png"
    }


    })
    

    
    
}

function displayToday(date ,location,maxTem,statu,rain,wind,windDirec){
    var currentDay = moment(`${date}` ,`YYYY/MM/DD`).format(`dddd`)
    tDay.innerHTML = currentDay;

    // string newDate = moment(currentDate, currentFormatString).format(newFormatString)
    var newDate = moment(`${date}` ,`YYYY/MM/DD`).format(`D MMMM`)
    DateOfToday.innerHTML = newDate

    loc.innerHTML = location

    maxTemp.innerHTML = maxTem+`<sup>o</sup>C`

    stats.innerHTML = statu

    rainn.innerHTML = rain+`%`;

    windd.innerHTML = wind+`%`

    windDirection.innerHTML = windDirec


    if(statu == "Sunny"){
        firstImg.src = "images/114.png"
    }
    else if(statu == "Partly cloudy"){
        firstImg.src = "images/116.png"
    }else if(statu == "Patchy rain possible"){
        firstImg.src = "images/176.png"
    }else if(statu == "Heavy rain"){
        firstImg.src = "images/308.png"
    }else if(statu == "Clear"){
        firstImg.src = "images/113.png"
    }else if(statu == "Moderate rain"){
        firstImg.src = "images/353.png"
    }else if(stats == "Mist"){
        firstImg.src = "images/143.png"
    }else{
        firstImg.src = "images/116.png"
    }
}

function displayTomorrow(today1,maxT1,minT1,stat1){
    var newDate1 = moment(`${today1}` ,`YYYY/MM/DD`).format(`dddd`)
    tDay1.innerHTML = newDate1

    maxTemp1.innerHTML = maxT1+`<sup>o</sup>C`

    minTemp1.innerHTML = minT1+`<sup>o</sup>C`

    stats1.innerHTML = stat1

    if(stat1 == "Sunny"){
        secondImg.src = "images/114.png"
    }
    else if(stat1 == "Partly cloudy"){
        secondImg.src = "images/116.png"
    }else if(stat1 == "Patchy rain possible"){
        secondImg.src = "images/176.png"
    }else if(stat1 == "Heavy rain"){
        secondImg.src = "images/308.png"
    }else if(stat1 == "Clear"){
        secondImg.src = "images/113.png"
    }else if(stat1 == "Moderate rain"){
        secondImg.src = "images/353.png"
    }else if(stat1 == "Mist"){
        secondImg.src = "images/143.png"
    }else{
        secondImg.src = "images/116.png"
    }






}

function displayAfterTomorrow(today2,maxT2,minT2,stat2){ 
    var newDate2 = moment(`${today2}` ,`YYYY/MM/DD`).format(`dddd`)
    tDay2.innerHTML = newDate2

    maxTemp2.innerHTML = maxT2+`<sup>o</sup>C`

    minTemp2.innerHTML = minT2+`<sup>o</sup>C`

    stats2.innerHTML = stat2

    if(stat2 == "Sunny"){
        thirdImg.src = "images/114.png"
    }
    else if(stat2 == "Partly cloudy"){
        thirdImg.src = "images/116.png"
    }else if(stat2 == "Patchy rain possible"){
        thirdImg.src = "images/176.png"
    }else if(stat2 == "Heavy rain"){
        thirdImg.src = "images/308.png"
    }else if(stat2 == "Clear"){
        thirdImg.src = "images/113.png"
    }else if(stat2 == "Moderate rain"){
        thirdImg.src = "images/353.png"
    }else if(stat2 == "Mist"){
        thirdImg.src = "images/143.png"
    }else{
        thirdImg.src = "images/116.png"
    }
}