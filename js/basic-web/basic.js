$(document).ready(function () {

    let address = "623 Main Ave. E, West Fargo, ND, 58078";

    let addressElements = $('span.address-fill');

    //p> span tag address content replace
    for (let i = 0; addressElements !== undefined && i < addressElements.length; i++) {
        $(addressElements[i]).text(address);
    }

    //link tag content replace
    let linkTags = $('a.number-replace');
    for (let i = 0; i < linkTags.length; i++) {
        const target = 'tel:' + numberString;
        let linkTag = $(linkTags[i]);
        linkTag.attr('href', target);
        let spanElement = linkTag.find('span:first');
        let html = '<i class="fa fa-phone fa-rotate-90 mr-2"></i>';
        if (spanElement !== undefined && spanElement.length > 0) {
            html += spanElement.html() + "  ";
        }
        html += formattedNumber;
        linkTag.html(html);
    }
    //link tag href replace
    linkTags = $('a.link-replace');
    for (let i = 0; i < linkTags.length; i++) {
        const target = 'tel:' + numberString;
        let linkTag = $(linkTags[i]);
        linkTag.attr('href', target);
    }

    //add travel script late
    let travelFrameContainer = $('#travelIFrameContainer');
    if(travelFrameContainer!== undefined) {
        travelFrameContainer.html('<iframe class="w-100 border-0 position-relative" id="travelIFrame" loading="lazy"' +
            ' src="https://www.travelpayouts.com/widgets/444787d409cef89cd87f886bad23ab52.html?v=2178">\n' +
            '        </iframe>');
    }

});
