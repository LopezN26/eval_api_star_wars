//création variable i pour compter les pages
i=1;
//fonction de requete liste 10 personnages
function requestList(i)
{
    $.ajax({
        url:"https://swapi.co/api/people/?page="+i,
        type : "GET",
        data:{},
        success: function (rep) {
            var tableau=$("#tableau");
            tableau.html("");
            for (i=0;i<10;i++)
            {
                let url=rep.results[i].url;

                tableau.append("<div class=\"ligne\"><div>"+rep.results[i].name+"</div><button type='button' onclick=\"requestDetails('"+url+"')\" class='btn btn-dark' data-toggle='modal' data-target='#modal'>Details</button></div>");
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
            $("#name").html("<input type='text' value='"+rep.name+"'/>")
            $("#height").html("<input type='text' value='"+rep.height+"'/>")
            $("#mass").html("<input type='text' value='"+rep.mass+"'/>")
            $("#gender").html("<input type='text' value='"+rep.gender+"'/>")
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

