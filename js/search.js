function requestPlanet(i)
{
    $.ajax({
        url:"https://swapi.co/api/planets/?search="+i,
        type : "GET",
        data:{},
        success: function (rep) {
            var tableau=$("#tableau");
            tableau.html("");
            if (rep.results.length==0)
            {
                tableau.append("<div class=\"ligne\"><div >No Planet found</div>");
            }
            else
            {
                for (i=0;i<rep.results.length;i++)
                {
                    tableau.append("<div class=\"ligne\"><div>"+rep.results[i].name+"</div></div>");
                }
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
            var tableau=$("#tableau");
            tableau.html("");
            if (rep.results.length==0)
            {
                tableau.append("<div class=\"ligne\"><div class=\"col-10\">No Character found</div>");
            }
            else
            {
                for (i=0;i<rep.results.length;i++)
                {
                    tableau.append("<div class=\"ligne\"><div class=\"col-10\">"+rep.results[i].name+"</div></div>");
                }
            }
        }
    });
    $("#search").val("");
}

$("#characterSearch").on("click",function () {requestCharacter($("#search").val());});
$("#planetSearch").on("click",function () {requestPlanet($("#search").val());});
