$(document).ready(function (){

    // cache les div au chargement de la page
    $('.close').hide();
    $('.competenceAll').hide();
    $('.formationAll').hide();
    $('.experienceAll').hide();
    $('.portfolioAll').hide();

    // calcul auto du line height
    autoLine();

    // click sur accueil
    $(".close").css('cursor', 'pointer');
    $('.close').click(function(){
        $('.close').hide();
        hideAll();
        $('.aboutAll').show("slow");
    })

    // click sur competence
    $(".competence").css('cursor', 'pointer');
    $(".competence").click(function (){
        if($('.competenceAll').is(":hidden")) {
            hideAll();
            $('.close').show("fast");
            $('.competenceAll').show("slow");
        }
    });

    // click sur formation
    $(".formation").css('cursor', 'pointer');
    $(".formation").click(function (){
        if($('.formationAll').is(":hidden")) {
            hideAll();
            $('.close').show("fast");
            $('.formationAll').show("slow");
        }
    });

    // click sur experience
    $(".experience").css('cursor', 'pointer');
    $(".experience").click(function (){
        if($('.experienceAll').is(":hidden")) {
            hideAll();
            $('.close').show("fast");
            $('.experienceAll').show("slow");
        }
    });

    // click sur portfolio
    $(".portfolio").css('cursor', 'pointer');
    $(".portfolio").click(function (){
        if($('.portfolioAll').is(":hidden")) {
            hideAll();
            $('.close').show("fast");
            $('.portfolioAll').show("slow");
        }
    });

    function autoLine(){
        $(".box").css('line-height', ($(".box").css('height')));
    }

    function hideAll(){
        $('.contentLeft').children().hide("slow");
    }

});