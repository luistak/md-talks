gama = [];

gama.initialize = function () {
    gama.setup();
    gama.scrollListener();
};

gama.setup = function () {
    // Firebase setup
    try {
        var app = firebase.app();
        var features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log(`Firebase SDK carregado com sucesso!  Recursos: ${features.join(', ')}`);
    } catch (e) {
        console.error(e);
    }
}

gama.scrollListener = function () {
    var anchorSelector = '[href^="#"]';
    $(document).on('click', anchorSelector, function (e) {
        e.preventDefault();

        var header =  $('header');
        var selector = $(this).attr('href');
        var element = selector == '#' ? header : $(selector);
        var height = selector == '#' ? 0 : element.offset().top + header.outerHeight();

        window.scroll({
            top: height , 
            behavior: 'smooth' 
        });
    })
}

// Activates when dom is loaded
$(function () {
    gama.initialize();
});
