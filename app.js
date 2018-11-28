$(function () {
    const hideAll = function (e) {
        $('.aboutMe').addClass('invisible');
        $('.portfolioArea').addClass('invisible');
        $('#homeTab').removeClass('text-white bg-dark');
        $('#portTab').removeClass('text-white bg-dark');
    }
    const getAbout = function () {
        $('#homeTab').addClass('text-white bg-dark');
        $('#portTab').removeClass('text-white bg-dark');
        $('.portfolioArea').addClass('invisible');
        $('#projectArea').addClass('invisible');
        $('.aboutMe').removeClass('invisible')
    }
    const getPortfolio = function () {
        $('#homeTab').removeClass('text-white bg-dark');
        $('.aboutMe').addClass('invisible');
        $('.portfolioArea').removeClass('invisible');
        $('#projectArea').addClass('invisible');
        $('#portTab').addClass('text-white bg-dark');
    }


    // $('.jumbotron').on('click', hideAll);
    $('#homeTab').on('click', getAbout);
    $('#portTab').on('click', getPortfolio);
    $('.contactbutton').hover(function () {
        $(this).toggleClass('bg-dark')
    });
    $('.office').mouseover(function () {
        $('.officeTheme')[0].play();
    });
    $('.office').mouseleave(function () {
        $('.officeTheme')[0].pause();
    });
    $('.nav-link').hover(function () {
        $(this).toggleClass('text-danger')
    })
    $('.list-group-item').hover(function () {
        $(this).toggleClass('bg-dark text-white')
    })
    $('.list-group-item').on('click', function (e) {
        e.preventDefault();
        $('#projectArea').removeClass('invisible');
        $('.list-group-item').removeClass('bg-danger')
        $(this).addClass('bg-danger');
        $('.media').addClass('invisible')
        $(`#${$(this).data('val')}`).toggleClass('invisible');
    });
})

