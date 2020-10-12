$(document).ready(function (){

    // cache les div au chargement de la page
    $('.close').hide();
    $('.competenceAll').hide();
    $('.formationAll').hide();
    $('.experienceAll').hide();
    $('.portfolioAll').hide();

    // calcul auto du line height
    autoLine();

    // click sur close
    $(".close").css('cursor', 'pointer');
    $('.close').click(function(){
        hideAll(2);
        $('.aboutAll').show("slow");
    })

    // click sur competence
    $(".competence").css('cursor', 'pointer');
    $(".competence").click(function (){
        if($('.competenceAll').is(":hidden")) {
            hideAll(1);
            $('.competenceAll').show("slow");
        }
    });

    // click sur formation
    $(".formation").css('cursor', 'pointer');
    $(".formation").click(function (){
        if($('.formationAll').is(":hidden")) {
            hideAll(1);
            $('.formationAll').show("slow");
        }
    });

    // click sur experience
    $(".experience").css('cursor', 'pointer');
    $(".experience").click(function (){
        if($('.experienceAll').is(":hidden")) {
            hideAll(1);
            $('.experienceAll').show("slow");
        }
    });

    // click sur portfolio
    $(".portfolio").css('cursor', 'pointer');
    $(".portfolio").click(function (){
        if($('.portfolioAll').is(":hidden")) {
            hideAll(1);
            $('.portfolioAll').show("slow");
        }
    });

    // click sur cBox
    $(".cBox").css('cursor', 'pointer');

    function autoLine(){
        $(".box").css('line-height', ($(".box").css('height')));
    }

    function hideAll(n){
        if(n==1){
            if($('.close').is(':hidden')) $('.close').show("fast");
            $('.contentLeft').children().not('.close').hide("slow");
        } else if(n==2){
            $('.contentLeft').children().hide("slow");
        }
    }

});