var NameOfPeople = []

function enviarNome()
{
var GuestName = document.getElementById("name1").value;
NameOfPeople.push(GuestName);
document.getElementById("listaDeConvidados").innerHTML = NameOfPeople;
}
function mostrarNomes()
{
var mostrar = NameOfPeople.join("<br>");
document.getElementById("ListaDeConvidados2").innerHTML = mostrar;
document.getElementById("butãoOrganizar").style.display = "block";
}
function organizarNomes()
{
NameOfPeople.sort();
document.getElementById("ListaDeConvidados3").innerHTML = NameOfPeople;
}
function pesquisarNome()
{
 var s= document.getElementById("input1").value;
 var found=0;
 var j;
 for(j=0; j<NameOfPeople.length; j++)
 {
 if(s==NameOfPeople[j])
 {
    found=found+1;
 }
 }
 document.getElementById("NúmeroDePessoasEncontradas").innerHTML="Nome encontrado "+found+" vez(es)";
 console.log("Nome encontrado "+found+" vez(es)");
}