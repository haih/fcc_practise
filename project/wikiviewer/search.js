var app = angular.module('wikiViewer', []);


app.factory('SearchApi',function($http){
    var obj = {};
    var searchURL = 'http://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extracts&exsentences=1&exlimit=max&exintro&explaintext=1&format=json&callback=JSON_CALLBACK&gsrsearch=';
    obj.getResult = function() {
    return $http.jsonp(searchURL);
  };
    
})

app.controller('MainCtrl', function() {
    var vm = this;
    vm.title = "anything";
});