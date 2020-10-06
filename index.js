$(document).ready(function (){

    // cache les div au chargement de la page
    $('.competenceAll').hide();

    // click sur competence
    $(".competence").css('cursor', 'pointer');
    $(".competence").click(function (){
        $('.contentLeft').children().hide("slow");
        $('.competenceAll').show("slow");
    });

    // click sur formation
    $(".formation").css('cursor', 'pointer');
    $(".formation").click(function (){
        $('.contentLeft').children().hide("slow");
        $('.aboutAll').show("slow");
    });

    // calcul auto du line height
    $(".box").css('line-height', ($(".box").css('height')))
});