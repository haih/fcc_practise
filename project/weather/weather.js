var app = angular.module('Weather', []);

app.factory('WeatherApi', function($http) {
  var obj = {};
  
  obj.getLoc = function() {
    return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  };
  obj.getCurrent = function(city) {
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var appid = "&APPID=061f24cf3cde2f60644a8240302983f2"
    var cb = "&callback=JSON_CALLBACK";
    
    return $http.jsonp(api + city + units+ appid + cb);
  };
  return obj
});

app.controller('MainCtrl', function(WeatherApi) {
  var vm = this;
  vm.Data = {};
  vm.Data.unit ='C';
  vm.Data.sysChange = false;
  WeatherApi.getLoc().success(function(data) {
    var city = data.city + ',' + data.country;
    vm.Data.city = data.city;
    vm.Data.country = data.country;
    WeatherApi.getCurrent(city).success(function(data) {
      CurrentWeather(data)
    });
  });

  function CurrentWeather(data) {
    vm.Data.temp = Math.round(data.main.temp);
    vm.Data.Cel = Math.round(data.main.temp);
    vm.Data.des = data.weather[0].main;
    vm.Data.Fah = Math.round( (vm.Data.temp * 9)/5 + 32 );
    return IconGen(vm.Data.des);
  }

  function IconGen(weather) {
    var weather = weather.toLowerCase()
    switch (weather) {
      case 'dizzle':
        addIcon(weather)
        break;
      case 'clouds':
        addIcon(weather)
        break;
      case 'rain':
        addIcon(weather)
        break;
      case 'snow':
        addIcon(weather)
        break;
      case 'clear':
        addIcon(weather)
        break;
      case 'thunderstom':
        addIcon(weather)
        break;
      default:
    $('div.clouds').removeClass('hide');
    }
  }

  function addIcon(weather) {
    $('div.' + weather).removeClass('hide');
  }
  
  vm.Data.sys= function(){
   if(vm.Data.sysChange){
     vm.Data.unit ='C';
     vm.Data.temp = vm.Data.Cel;
     return vm.Data.sysChange = false;
     }
    vm.Data.unit ='F';
    vm.Data.temp = vm.Data.Fah;
    return vm.Data.sysChange = true;
  } 
  
});