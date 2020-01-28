//création variable i pour compter les pages
i=1;
//fonction de requete liste 10 personnages
function requestList(i)
{
    $.ajax({
        url:"https://swapi.co/api/planets/?page="+i,
        type : "GET",
        data:{},
        success: function (rep) {
            var tableau=$("#tableau");
            tableau.html("");
            for (i=0;i<10;i++)
            {
                let url=rep.results[i].url;
                //console.log(url);
                /*tableau.append("<div class=\"row\"><div class=\"col-sm-12\" onclick=\"requestDetails("+rep.results[i].url+")>"+rep.results[i].name+"</div></div>");*/
                tableau.append("<div class=\"row\"><div class=\"col-sm-10\">"+rep.results[i].name+"</div><button type='button' onclick=\"requestDetails('"+url+"')\" class='btn btn-dark' data-toggle='modal' data-target='#modal'>Détails</button></div>");
            }
        }
    });
}
//function pour afficher les détails d'un personnage
function requestDetails(link)
{
    $.ajax({
        url:link,
        type : "GET",
        data:{},
        success: function (rep) {
            console.log(rep);
            $("#name").html("<input type='text' value='"+rep.name+"'/>");
            $("#rotation_period").html("<input type='text' value='"+rep.rotation_period+"'/>");
            $("#orbital_period").html("<input type='text' value='"+rep.orbital_period+"'/>");
            $("#diameter").html("<input type='text' value='"+rep.diameter+"'/>");
            $("#residents").html("");
            if (rep.residents.length>0)
            {
                for (i=0;i<rep.residents.length;i++)
                {
                    requestResident(rep.residents[i]);
                }
            }





        }
    });
}


function requestResident(link) {
    $.ajax({
        url: link,
        type: "GET",
        data: {},
        success: function (rep) {
            console.log(rep);
            $("#residents").append("<input type='text' value='" + rep.name + "'/>")
        }
    });
}
// fonction des boutons
function previous()
{
    if (i>1)
    {
        i--;
        requestList(i);
    }
}
function next()
{
    if (i<9)
    {
        i++;
        requestList(i);
    }
}
//création des événements boutons
$("#previous").on("click",function () {previous();});
$("#next").on("click",function () {next();});


//pour afficher a l'arrivée sur la page
requestList(i);

