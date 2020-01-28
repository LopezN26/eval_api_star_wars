function requestPlanet(i)
{
    $.ajax({
        url:"https://swapi.co/api/planets/?search="+i,
        type : "GET",
        data:{},
        success: function (rep) {
            var liste=$("#liste");
            liste.html("");
            for (i=0;i<rep.results.length;i++)
            {
                liste.append("<div class=\"row\"><div class=\"col-sm-10\">"+rep.results[i].name+"</div></div>");
            }
        }
    });
    $("#search").val("");
}

function requestCharacter(i)
{
    $.ajax({
        url:"https://swapi.co/api/people/?search="+i,
        type : "GET",
        data:{},
        success: function (rep) {
            var liste=$("#liste");
            liste.html("");
            for (i=0;i<rep.results.length;i++)
            {
                liste.append("<div class=\"row\"><div class=\"col-sm-10\">"+rep.results[i].name+"</div></div>");
            }
        }
    });
    $("#search").val("");
}

$("#characterSearch").on("click",function () {requestCharacter($("#search").val());});
$("#planetSearch").on("click",function () {requestPlanet($("#search").val());});
