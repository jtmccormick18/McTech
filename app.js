const getAbout=function(){
    $('.contactForm').addClass('invisible');
    $('#homeTab').addClass('active');
    $('#contactTab').removeClass('active');
    $('#portTab').removeClass('active');
    $('.portfolioArea').addClass('invisible');
    $('.navContent').html(`<p> Hi there! I'm Josh. I'm currently enrolled in the full time coding bootcamp at The Georgia Institute of Technology. I'm a pretty laid back individual in most cases, but I have a huge appetite for success. I was feeling complacent in my job as a GIS Analyst and wanted to make a career leap. However, throughout my tenure as a GIS Analyst, I became familiar with writing queries in SQL Server. This part of the role intrigued me far more than the other duties of the job. It struck my curiosity on just how far I could expand that kind of knowledge... and well... here I am! Business aside, I'm a total sports junkie. Although I attend Georgia Tech, I love myself some Georgia Bulldogs and you can catch me in Sanford Stadium on any given Saturday. My other hobbies include binge watching The Office (greatest TV show to ever be made) and eating unruly amounts of hot wings.</p>`)
}
const getContact=function(){
    $('.navContent').empty();
    $('#homeTab').removeClass('active');
    $('#portTab').removeClass('active');
    $('#contactTab').addClass('active');
    $('.contactForm').removeClass('invisible');
    $('.portfolioArea').addClass('invisible');
}
const getPortfolio=function(){
    $('.navContet').empty();
    $('contactForm').empty();
    $('#homeTab').removeClass('active');
    $('#contactTab').removeClass('active');
    $('.contactForm').addClass('invisible');
    $('.navContent').empty();
    $('.portfolioArea').removeClass('invisible');
    $('#portTab').addClass('active');
}


$('#homeTab').on('click', getAbout);
$('#contactTab').on('click',getContact);
$('#portTab').on('click',getPortfolio);
