$(function () {
    const hideAll = function (e) {
        $('.aboutMe').addClass('invisible');
        $('.portfolioArea').addClass('invisible');
        $('#homeTab').removeClass('text-white bg-dark');
        $('#portTab').removeClass('text-white bg-dark');
        $('#quoteIntro').removeClass('invisible');
    }
    const getAbout = function () {
        // $('#homeTab').addClass('text-white bg-dark');
        $('#portTab').removeClass('text-white bg-dark');
        $('.portfolioArea').addClass('invisible');
        $('#projectArea').addClass('invisible');
        $('.aboutMe').removeClass('invisible')
        $('#quoteIntro').addClass('invisible');

    }
    const getPortfolio = function () {
        $('#homeTab').removeClass('text-white bg-dark');
        $('.aboutMe').addClass('invisible');
        $('.portfolioArea').removeClass('invisible');
        $('#projectArea').addClass('invisible');
        $('#quoteIntro').addClass('invisible');
        // $('#portTab').addClass('text-white bg-dark');
    }


    // $('.jumbotron').on('click', hideAll);
    $('#homeTab').on('click', getAbout);
    $('#portTab').on('click', getPortfolio);
    $('#bannerPic').on('click',hideAll);
    $('.contactbutton').hover(function () {
        $(this).toggleClass('bg-dark')
    });
    $('.office').mouseover(function () {
        $('.officeTheme')[0].play();
    });
    $('.office').mouseleave(function () {
        $('.officeTheme')[0].pause();
    });
    $('.nav-item').on('click',function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    })
    $('.nav-link').hover(function () {
        $(this).toggleClass('text-primary')
    })
    $('.list-group-item').hover(function () {
        $(this).toggleClass('bg-dark text-white')
    })
    //toggle portfolio images
    $('.portDisplay').on('click', function () {
        $('#projectArea').removeClass('invisible');
        $('.portDisplay').removeClass('bg-primary');
        $('.media').addClass('invisible');
        $(`#${$(this).attr('alt')}`).toggleClass('invisible');
    });
})

