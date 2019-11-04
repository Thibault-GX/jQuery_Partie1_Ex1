// [1] On sélectionne les balises p / <p> / paragraphes et on leur demande d'aller se cacher.
//$("p").hide();

// [2] Une autre méthode consisterait à sélectionner la classe de ce <p>, afin d'éviter de potentiels conflits avec d'autres paragraphes.
//$("#text").hide();

// [3] Et si on veut pousser un peu le vice, on peut lui demander de se cacher seulement lors d'un clic de souris. Fonctionnera aussi avec le sélecteur #text
// $("p").on("click",function(){
//   $(this).hide();
// });

// [4] Et enfin, histoire de profiter d'un rendu un peu moins "dégueulasse", on peut même se faire un petit bouton pour rendre le tout plus esthétique.
$("#button").on("click",function(){
  $("#text").hide();
});
