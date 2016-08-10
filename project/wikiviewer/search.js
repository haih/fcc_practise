$(function() {
    $("#search").keyup(function(e){
        var q = $("#search").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append("<p>Results for <b>" + q + "</b></p>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
          });
        });
    });
});

function RandomWindow(){
    var randomUrl = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(randomUrl);
    return ;
}

