var showList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]


function initlayout(data, online) {
  var logoImg = data.logo;
  var name = data.display_name;
  var disc = data.status;

  var logo = "<div class='row col-sm-2'>" + "<img class=logo src=" + logoImg + "></div>";
  var title = "<div class='row col-sm-2'>" + "<a  href='https://www.twitch.tv/" + data.name + "' target='view_frame'>" + name + "</a></div>";
  var onlineDiscription = "<div class='row col-sm-8' id='disc'>" + "<span>" + disc + "</span></div>";
  var offlineDiscription = "<div class='row col-sm-8' id='disc'>" + "<span>offline</span></div>";
  if (online) {
    $('#display').append("<div class='row'>" + logo + title + onlineDiscription);
  } else {
    $('#display').append("<div class='row'>" + logo + title + offlineDiscription);
  }
}

$(document).ready(function() {
  var resultList;
  showList.forEach(function(item) {
   
   $.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?callback=?', function(data) {
    var online = false;
    if (data.stream !== null) {
      online = true;
    } else {
      online = false;
    }
    $.getJSON('https://api.twitch.tv/kraken/channels/' + item + '?callback=?', function(data) {
      initlayout(data, online);
    });
  });
 });
  
  $('#online').click(function(){
    $('#display').empty();
    showList.forEach(function(item) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?callback=?', function(data) {
        var online = false;
        if (data.stream !== null) {
          online = true;
        } else {
          online = false;
        }
        if(online){
         $.getJSON('https://api.twitch.tv/kraken/channels/' + item + '?callback=?', function(data) {
          initlayout(data, true);
        });
       }
     });
    });
  })

  $('#offline').click(function(){
    $('#display').empty();
    showList.forEach(function(item) {
      $.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?callback=?', function(data) {
        var online = false;
        if (data.stream !== null) {
          online = true;
        } else {
          online = false;
        }
        if(!online){
         $.getJSON('https://api.twitch.tv/kraken/channels/' + item + '?callback=?', function(data) {
          initlayout(data, online);
        });
       }
     });
    });
  })

});
