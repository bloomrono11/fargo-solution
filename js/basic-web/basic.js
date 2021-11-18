$(document).ready(function () {

    let address = "623 Main Ave. E, West Fargo, ND, 58078";

    let addressElements = $('span.address-fill');

    //p> span tag address content replace
    for (let i = 0; i < addressElements.length; i++) {
        $(addressElements[i]).text(address);
    }

    //link tag content replace
    let linkTags = $('a.number-replace');
    for (let i = 0; i < linkTags.length; i++) {
        const target = 'tel:' + numberString;
        let linkTag = $(linkTags[i]);
        linkTag.attr('href', target);
        linkTag.html('<i class="fa fa-phone fa-rotate-90 mr-2"></i>'+formattedNumber);
    }
    //link tag href replace
    linkTags = $('a.link-replace');
    for (let i = 0; i < linkTags.length; i++) {
        const target = 'tel:' + numberString;
        let linkTag = $(linkTags[i]);
        linkTag.attr('href', target);
    }

});
