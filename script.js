$(document).ready(function () {
    
    $('#inscrire').click(function(e) {
        $('.block-log').fadeOut(1000);
        $('.block-reg').fadeIn(1000);

    })

    $('#connecter').click(function() {
        $('.block-log').fadeIn(1000);
        $('.block-reg').fadeOut(1000);
    })
});