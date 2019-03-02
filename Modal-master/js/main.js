$(document).ready(function() {
    $('#klik').on('click', function() {
        $('#ajdi1').removeClass('overlay').addClass('zatamnjena');
        $('#ajdi2').removeClass('modal2').addClass('modal1');
    })
    $('#zatvori').on('click', function() {
        $('#ajdi1').removeClass('zatamnjena').addClass('overlay');
        $('#ajdi2').removeClass('modal1').addClass('modal2');
    })
})