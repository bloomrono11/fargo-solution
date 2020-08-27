$(document).ready(function () {

    let arrowUpClass = 'fa-arrow-up', arrowDownClass = 'fa-arrow-down';


    $('#accordion-button').on('click', function () {
        let button = $(this);
        let aTag = button.parent().find('#toggleIcon');
        if (aTag !== undefined) {
            if(aTag.hasClass(arrowUpClass)=== true) {
                aTag.removeClass(arrowUpClass);
                aTag.addClass(arrowDownClass);
            } else {
                aTag.addClass(arrowUpClass);
                aTag.removeClass(arrowDownClass);
            }

        }
    });

});