var terms_is_visible = false;

$(document).ready(function () {

    $('.terms_link').click(function (event) {

        event.preventDefault();

        if (terms_is_visible) {
            $(this).html('[Show &darr;]');

            $('.terms_text').slideUp(3000);
            terms_is_visible = false;
        } else {
            $(this).html('[Hide &uarr;]');
            $('.terms_text').slideDown(3000);
            terms_is_visible = true;
        }

    });
}); 