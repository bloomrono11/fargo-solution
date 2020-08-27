$(document).ready(function () {

    career.initialize();
});

let career = {

    itemContentId: ['endlessOpp', 'easyProcess', 'continuedComm', 'flexibility', 'continuedEng'],

    initialize: function () {
        this.hideAllItems(1);
        this.listenOnListClick();
    },

    /**
     *
     * @param index
     */
    hideAllItems: function (index) {

        if (index === undefined || index === null) {
            index = 0;
        }
        for (let i = index; i < this.itemContentId.length; i++) {
            $('#' + this.itemContentId[i]).hide();
        }
    },
    /**
     *
     */
    listenOnListClick: function () {

        let me = this;
        let ulElement = $('ul.career-ul');
        let careerLinks = ulElement.find('li');
        for (let i = 0; i < careerLinks.length; i++) {
            $(careerLinks[i]).on('click', function (event) {

                event.preventDefault();
                me.removeActiveClassFromAllLinks(careerLinks);
                let liTag=$(this).addClass('active');

                let link = $(liTag.children('a')[0]);
                link.addClass('active');

                let targetId = link.attr('href');
                console.log(this, targetId);
                if (targetId !== undefined || targetId === '') {
                    me.hideAllItems(0);
                    $(targetId).show();
                }
            });
        }
    },
    removeActiveClassFromAllLinks: function (links) {
        for (let i = 0; i < links.length; i++) {
            let link = $(links[i]);
            link.removeClass('active');
            $(link.children('a')[0]).removeClass('active');
        }
    }
};