$(document).ready(function (){

    /*
    ==========
    VARIABLES
    ==========
     */
    var isBarDevOn=0;
    var isBarSoftOn=0;
    var isBarLingOn=0;
    var isBarDiversOn=0
    var isBarDevOnFR=0;
    var isBarSoftOnFR=0;
    var isBarLingOnFR=0;
    var isBarDiversOnFR=0
    var isLangOn=0;
    var compActuelle=0;
    var srcUSA = 'images/icoUSA.png';
    var srcFRA = 'images/icoFRA.png';

    /*
    ==========
    PAGE GENERALE
    ==========
     */

    // cache les div au chargement de la page
    $('.close').hide();
    $('.competenceAll').hide();
    $('.formationAll').hide();
    $('.experienceAll').hide();
    $('.portfolioAll').hide();
    $('.containerBarSoft').hide();
    $('.containerBarLing').hide();
    $('.containerBarDivers').hide();
    $('.flagUSA').hide();
    $('.flagFRA').hide();
    $('.containerBaseFR').hide();
    $('.competenceAllFR').hide();
    $('.containerBarSoftFR').hide();
    $('.containerBarLingFR').hide();
    $('.containerBarDiversFR').hide();

    // calcul auto du line height
    autoLine();

    // click sur close
    $(".close").css('cursor', 'pointer');
    $('.close').click(function(){
        hideAll(2);
        $('.aboutAll').show("slow");
    });

    /*
    ==========
    ACCUEIL ALL
    ==========
     */

    // click sur icone translate
    $('.flag').css('cursor', 'pointer');
    $('.flag').click(function(){
        if(isLangOn==0) {
            $('.flagUSA').show("slow");
            $('.flagFRA').show("slow");
            isLangOn++;
        } else {
            $('.flagUSA').hide("slow");
            $('.flagFRA').hide("slow");
            isLangOn=0;
        }
    });

    $('.flagUSA').css('cursor', 'pointer');
    $('.flagUSA').click(function(){
        $('.containerBaseFR').hide("fast");
        $('.containerBase').show("fast");
        $('.flagUSA').hide("slow");
        $('.flagFRA').hide("slow");
        isLangOn=0;
    });

    $('.flagFRA').css('cursor', 'pointer');
    $('.flagFRA').click(function(){
        $('.containerBase').hide("fast");
        $('.containerBaseFR').show("fast");
        $('.flagUSA').hide("slow");
        $('.flagFRA').hide("slow");
        isLangOn=0;
    });

    /*
    ==========
    COMPETENCES ALL
    ==========
     */

    // click sur competence EN
    $(".competence").css('cursor', 'pointer');
    $(".competence").click(function (){
        if($('.competenceAll').is(":hidden")) {
            hideAll(1);
            $('.competenceAll').show("slow");
            changerParagraphe(compActuelle);
        }
    });

    // click sur competence FR
    $(".competenceFR").css('cursor', 'pointer');
    $(".competenceFR").click(function (){
        if($('.competenceAllFR').is(":hidden")) {
            hideAll(1);
            $('.competenceAllFR').show("slow");
            changerParagrapheFR(compActuelle);
        }
    });

    // click sur fleche droite changer competence EN
    $(".ArrowCircleRightEN").css('cursor', 'pointer');
    $(".ArrowCircleRightEN").click(function(){
        changerTitre(1);
    })

    // click sur fleche droite changer competence FR
    $(".ArrowCircleRightFR").css('cursor', 'pointer');
    $(".ArrowCircleRightFR").click(function(){
        changerTitreFR(1);
    })

    // click sur fleche gauche changer competence EN
    $(".ArrowCircleLeftEN").css('cursor', 'pointer');
    $(".ArrowCircleLeftEN").click(function(){
        changerTitre(-1);
        changerTitreFR(-1);
    })

    // click sur fleche gauche changer competence FR
    $(".ArrowCircleLeftFR").css('cursor', 'pointer');
    $(".ArrowCircleLeftFR").click(function(){
        changerTitre(-1);
        changerTitreFR(-1);
    })

    /*
    ==========
    EXPERIENCES ALL
    ==========
     */

    // click sur experience
    $(".experience").css('cursor', 'pointer');
    $(".experience").click(function (){
        if($('.experienceAll').is(":hidden")) {
            hideAll(1);
            $('.experienceAll').show("slow");
        }
    });

    // cache toutes les descriptions
    $('.experienceBox').each(function(){$(this).children().last().hide();})

    // click sur l'experience
    $('.experienceBox').css('cursor', 'pointer');
    $('.experienceBox').click(function(){
        if($(this).children().last().is(':hidden')){
            $(this).children().last().show("slow");
            $(this).find('.suspension').hide("fast");
        } else {
            $(this).children().last().hide("slow");
            $(this).find('.suspension').show("fast");
        }
    })

    /*
    ==========
    PORTFOLIO ALL
    ==========
     */

    // click sur formation
    $(".formation").css('cursor', 'pointer');
    $(".formation").click(function (){
        if($('.formationAll').is(":hidden")) {
            hideAll(1);
            $('.formationAll').show("slow");
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

    /*
    ==========
    LISTE DES FONCTIONS
    ==========
     */

    // auto calcul de la hauteur
    function autoLine(){
        $(".box").css('line-height', ($(".box").css('height')));
    }

    // permet de clear la partie gauche
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
        var competences = ['DEVELOPEMENT', 'SOFTWARE', 'LINGUISTICS', 'OTHERS'];
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

    // permet de changer la compétence
    // n=1 : vers droite
    // n=-1 : vers gauche
    function changerTitreFR(n){
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
        $('.titreCompetenceFR').fadeOut("fast", function(){
            $('.titreCompetenceFR').text(competences[compActuelle]);
        });
        $('.titreCompetenceFR').fadeIn("fast");
        changerParagrapheFR(compActuelle);
    }

    function changerParagraphe(n){
        $('.containerBar').children().hide("fast");
        if(n==0){
            barDev();
            $('.containerBarDev').show("fast");
        } else if(n==1){
            barSoft();
            $('.containerBarSoft').show("fast");
        } else if(n==2){
            barLing();
            $('.containerBarLing').show("fast");
        }else if(n==3){
            barDivers();
            $('.containerBarDivers').show("fast");
        }
    }

    function changerParagrapheFR(n){
        $('.containerBarFR').children().hide("fast");
        if(n==0){
            barDevFR();
            $('.containerBarDevFR').show("fast");
        } else if(n==1){
            barSoftFR();
            $('.containerBarSoftFR').show("fast");
        } else if(n==2){
            barLingFR();
            $('.containerBarLingFR').show("fast");
        }else if(n==3){
            barDiversFR();
            $('.containerBarDiversFR').show("fast");
        }
    }

    function barDev(){
        if(isBarDevOn==0) {
            setTimeout(
                function () {
                    // dev
                    var bar = new ProgressBar.Line('.html', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar.animate(0.98);
                    var bar2 = new ProgressBar.Line('.css', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar2.animate(0.98);
                    var bar3 = new ProgressBar.Line('.js', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar3.animate(0.82);
                    var bar4 = new ProgressBar.Line('.php', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar4.animate(0.5);
                    var bar5 = new ProgressBar.Line('.java', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar5.animate(0.7);
                    var bar6 = new ProgressBar.Line('.c', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar6.animate(0.5);
                    var bar7 = new ProgressBar.Line('.sql', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar7.animate(0.8);
                    isBarDevOn++;
                }, 300);
        }
    }

    function barDevFR(){
        if(isBarDevOnFR==0) {
            setTimeout(
                function () {
                    // dev
                    var barFR = new ProgressBar.Line('.htmlFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR.animate(0.98);
                    var barFR2 = new ProgressBar.Line('.cssFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR2.animate(0.98);
                    var barFR3 = new ProgressBar.Line('.jsFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR3.animate(0.82);
                    var barFR4 = new ProgressBar.Line('.phpFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR4.animate(0.5);
                    var barFR5 = new ProgressBar.Line('.javaFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR5.animate(0.7);
                    var barFR6 = new ProgressBar.Line('.cFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR6.animate(0.5);
                    var barFR7 = new ProgressBar.Line('.sqlFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR7.animate(0.8);
                    isBarDevOnFR++;
                }, 300);
        }
    }

    function barSoft(){
        if(isBarSoftOn==0) {
            setTimeout(
                function () {
                    // software
                    var bar8 = new ProgressBar.Line('.eclipse', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar8.animate(0.8);
                    var bar9 = new ProgressBar.Line('.netbeans', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar9.animate(0.7);
                    var bar10 = new ProgressBar.Line('.vs', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar10.animate(0.5);
                    var bar11 = new ProgressBar.Line('.github', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar11.animate(0.67);
                    var bar12 = new ProgressBar.Line('.svn', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar12.animate(0.75);
                    var bar13 = new ProgressBar.Line('.office', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar13.animate(1.0);
                    var bar14 = new ProgressBar.Line('.linux', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar14.animate(0.8);
                    isBarSoftOn++;
                }, 300);
        }
    }

    function barSoftFR(){
        if(isBarSoftOnFR==0) {
            setTimeout(
                function () {
                    // software
                    var barFR8 = new ProgressBar.Line('.eclipseFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR8.animate(0.8);
                    var barFR9 = new ProgressBar.Line('.netbeansFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR9.animate(0.7);
                    var barFR10 = new ProgressBar.Line('.vsFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR10.animate(0.5);
                    var barFR11 = new ProgressBar.Line('.githubFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR11.animate(0.67);
                    var barFR12 = new ProgressBar.Line('.svnFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR12.animate(0.75);
                    var barFR13 = new ProgressBar.Line('.officeFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR13.animate(1.0);
                    var barFR14 = new ProgressBar.Line('.linuxFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR14.animate(0.8);
                    isBarSoftOnFR++;
                }, 300);
        }
    }

    function barLing(){
        if(isBarLingOn==0) {
            setTimeout(
                function () {
                    // software
                    var bar15 = new ProgressBar.Line('.anglais', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar15.animate(0.88);
                    var bar16 = new ProgressBar.Line('.allemand', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar16.animate(0.5);
                    var bar17 = new ProgressBar.Line('.chinois', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar17.animate(0.2);
                    isBarLingOn++;
                }, 300);
        }
    }

    function barLingFR(){
        if(isBarLingOnFR==0) {
            setTimeout(
                function () {
                    // software
                    var barFR15 = new ProgressBar.Line('.anglaisFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR15.animate(0.88);
                    var barFR16 = new ProgressBar.Line('.allemandFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR16.animate(0.5);
                    var barFR17 = new ProgressBar.Line('.chinoisFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR17.animate(0.2);
                    isBarLingOnFR++;
                }, 300);
        }
    }

    function barDivers(){
        if(isBarDiversOn==0) {
            setTimeout(
                function () {
                    // software
                    var bar18 = new ProgressBar.Line('.hotline', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar18.animate(0.97);
                    var bar19 = new ProgressBar.Line('.gdeprojet', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar19.animate(0.7);
                    var bar20 = new ProgressBar.Line('.voltaire', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    bar20.animate(0.75);
                    isBarDiversOn++;
                }, 300);
        }
    }

    function barDiversFR(){
        if(isBarDiversOnFR==0) {
            setTimeout(
                function () {
                    // software
                    var barFR18 = new ProgressBar.Line('.hotlineFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR18.animate(0.97);
                    var barFR19 = new ProgressBar.Line('.gdeprojetFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR19.animate(0.7);
                    var barFR20 = new ProgressBar.Line('.voltaireFR', {
                        easing: 'easeInOut',
                        color: '#CB9662',
                        strokeWidth: 1.5,
                        trailColor: '#155263',
                        duration: 2300,
                        easing: 'easeIn',
                        svgStyle: {display: 'inline-block'}
                    });
                    barFR20.animate(0.75);
                    isBarDiversOnFR++;
                }, 300);
        }
    }

});