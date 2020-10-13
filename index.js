$(document).ready(function (){

    var isBarOn=0;
    var compActuelle=0;

    // cache les div au chargement de la page
    $('.close').hide();
    $('.competenceAll').hide();
    $('.formationAll').hide();
    $('.experienceAll').hide();
    $('.portfolioAll').hide();
    $('.containerBarSoft').hide();

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
            bar();
        }
    });

    // click sur formation
    $(".formation").css('cursor', 'pointer');
    $(".formation").click(function (){
        if($('.formationAll').is(":hidden")) {
            hideAll(1);
            $('.formationAll').show("slow");
            bar();
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

    // click sur fleche droite changer competence
    $(".fa-arrow-circle-right").css('cursor', 'pointer');
    $(".fa-arrow-circle-right").click(function(){
        changerTitre(1);
    })

    // click sur fleche gauche changer competence
    $(".fa-arrow-circle-left").css('cursor', 'pointer');
    $(".fa-arrow-circle-left").click(function(){
        changerTitre(-1);
    })

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

    // permet de changer la compétence
    // n=1 : vers droite
    // n=-1 : vers gauche
    function changerTitre(n){
        console.log('de base: ' +compActuelle + ' ' + n);
        var competences = ['DEVELOPPEMENT', 'SOFTWARE', 'LINGUISTIQUE', 'DIVERS'];
        if(compActuelle+n == 4){
            compActuelle=0
        } else if(compActuelle+n == -1){
            compActuelle=3;
        } else {
            compActuelle+=n;
        }
        console.log('compActuelle: ' +compActuelle);
        $('.titreCompetence').fadeOut("fast", function(){
            $('.titreCompetence').text(competences[compActuelle]);
        });
        $('.titreCompetence').fadeIn("fast");
        changerParagraphe(compActuelle);
    }

    function changerParagraphe(n){
        $('.containerBar').children().hide("fast");
        if(n==0){
            $('.containerBarDev').show("fast");
        } else if(n==1){
            $('.containerBarSoft').show("fast");
        } else if(n==2){

        }else if(n==3){

        }
    }

    function bar(){
        if(isBarOn==0) {
            setTimeout(
                function () {
                    // dev
                    var bar = new ProgressBar.Line('.html', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar.animate(0.98);
                    var bar2 = new ProgressBar.Line('.css', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar2.animate(0.98);
                    var bar3 = new ProgressBar.Line('.js', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar3.animate(0.82);
                    var bar4 = new ProgressBar.Line('.php', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar4.animate(0.5);
                    var bar5 = new ProgressBar.Line('.java', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar5.animate(0.7);
                    var bar6 = new ProgressBar.Line('.c', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar6.animate(0.5);
                    var bar7 = new ProgressBar.Line('.sql', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar7.animate(0.8);
                    // software
                    var ba8 = new ProgressBar.Line('.eclipse', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar8.animate(0.8);
                    var bar9 = new ProgressBar.Line('.netbeans', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar9.animate(0.7);
                    var bar10 = new ProgressBar.Line('.vs', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar10.animate(0.5);
                    var bar11 = new ProgressBar.Line('.github', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar11.animate(0.67);
                    var bar12 = new ProgressBar.Line('.svn', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar12.animate(0.75);
                    var bar13 = new ProgressBar.Line('.office', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar13.animate(1.0);
                    var bar14 = new ProgressBar.Line('.linux', {
                        easing: 'easeInOut',
                        color: '#ff9a3c',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar14.animate(0.8);
                    isBarOn++;
                }, 1000);
        }
    }

});