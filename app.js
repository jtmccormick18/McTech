
const hideAll = function (e) {
    $('.aboutMe').addClass('invisible');
    $('.contactForm').addClass('invisible');
    $('.portfolioArea').addClass('invisible');
    $('#homeTab').removeClass('text-white bg-dark');
    $('#contactTab').removeClass('text-white bg-dark');
    $('#portTab').removeClass('text-white bg-dark');
}
const getAbout = function () {
    $('.contactForm').addClass('invisible');
    $('#homeTab').addClass('text-white bg-dark');
    $('#contactTab').removeClass('text-white bg-dark');
    $('#portTab').removeClass('text-white bg-dark');
    $('.portfolioArea').addClass('invisible');
    $('.aboutMe').removeClass('invisible')
}
const getContact = function () {
    $('.aboutMe').addClass('invisible');
    $('#homeTab').removeClass('text-white bg-dark');
    $('#portTab').removeClass('text-white bg-dark');
    $('#contactTab').addClass('text-white bg-dark');
    $('.contactForm').removeClass('invisible');
    $('.portfolioArea').addClass('invisible');
}
const getPortfolio = function () {
    $('.navContet').empty();
    $('contactForm').empty();
    $('#homeTab').removeClass('text-white bg-dark');
    $('#contactTab').removeClass('text-white bg-dark');
    $('.contactForm').addClass('invisible');
    $('.aboutMe').addClass('invisible');
    $('.portfolioArea').removeClass('invisible');
    $('#portTab').addClass('text-white bg-dark');
}
const renderProjects = function (arg) {
    $('#projectArea').empty();
    if ($(arg).val() === "Stock Market App") {
        $('#stock').toggleClass('invisible')
    }
}

// $('.jumbotron').on('click', hideAll);
$('#homeTab').on('click', getAbout);
$('#contactTab').on('click', getContact);
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
    $('.list-group-item').removeClass('bg-danger')
    $(this).addClass('bg-danger');
    console.log($(this).data('val'));
    if ($(this).data('val') === "Stocks") {
        $('.card').addClass('invisible')
        $('#stock').toggleClass('invisible')
    } else if ($(this).data('val') === "CryptPro"){
        $('.card').addClass('invisible')
        $('#crypt').toggleClass('invisible')
    } else if ($(this).data('val') === "StarvingArtist"){
        $('.card').addClass('invisible')
        $('#starve').toggleClass('invisible')
    } else if ($(this).data('val') === "GMASS"){
        $('.card').addClass('invisible')
        $('#gmass').toggleClass('invisible')
    } else if ($(this).data('val') === "kudos"){
        $('.card').addClass('invisible')
        $('#kudos').toggleClass('invisible')
    }

})