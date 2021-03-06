$(document).ready(function () {

    footer.initialize();

    <!--Note activate smooth scroll-->

    let smoothScroll = new SmoothScroll(['p>a', '.dropdown-item', '.copyright-link'], {
        speed: 1200,
        speedAsDuration: false
    });

});

let footer = {

    footerClass: 'page-footer unique-color-dark pt-3',
    footerCopyRightClass: 'footer-copyright text-left',
    footerLinksClass: 'container-fluid mt-5 mb-4 text-center text-md-left footer-links',
    footerId: 'footer',
    footerLinksId: 'footerLinks',
    footerDividerClass: 'hr-bold orange p-0 m-0',
    copyRightText: '© 2018 Copyright: Fargo Solutions',
    copyRightLink: '#',
    copyRightLinks: ['about.html', 'contact.html'],
    copyRightTabs: ['About', 'Contact'],
    companyName: 'Fargo Solutions',
    address: ['623 Main Ave STE 102B,', ' West Fargo, ND 58102, USA'],
    email: 'contact@fargosolutions.net',
    phone: '+1 (952) 223 1332',
    altPhone: '+1 (952) 223 1332',
    socialLinks: 'Connect With Us',
    scrollClass:'scrollbar',
    scrollClassColor:'scrollbar-lady-lips',
    initialize: function () {

        let footer = $('#' + this.footerId);

        // console.log(footer !== undefined);

        if (footer !== undefined) {
            footer.addClass(this.footerClass);

            let html = this.getFooterLinks() + this.getFooterDivider() + this.getFooterCopyright();

            footer.append(html);
        }
        this.applyScrollClassToBody();
        // console.log(html);
    },
    getFooterLinks: function () {
        let html = '';
        html += '<!--Footer Links-->\n' +
            '    <div class="' + this.footerLinksClass + '" id="' + this.footerLinksId + '">\n' +
            '\n' +
            '        <!--Footer links row grid-->\n' +
            '        <div class="row mt-3">\n' +
            '\n' +
            this.createFirstColumn() +
            '\n' +
            this.createThirdColumn() +
            '\n' +
            this.createFourthColumn() +
            '\n' +
            this.createFifthColumn() +
            '\n' +
            '        </div>\n' +
            '        <!-- /.Footer links row grid-->\n' +
            '    </div>\n' +
            '    <!--/.Footer Links-->';
        return html;
    },
    createFirstColumn: function () {
        let html = '';
        html += '<!--First column-->\n' +
            '            <div class="col-md-3 mb-4">\n' +
            '                <h6 class="text-uppercase font-weight-bold">\n' +
            '                    <strong>Fargo Solutions</strong>\n' +
            '                </h6>\n' +
            '                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">\n' +
            '                <p>Fargo Solutions is a high-value partner of choice for many of the world’s most respected brands, as\n' +
            '                    they leverage our deep domain experience, market knowledge, industry networks and talent\n' +
            '                    expertise.</p>\n' +
            '            </div>\n' +
            '            <!--/.First column-->';
        return html;
    },

    createThirdColumn: function () {
        let html = '';
        html += '<!--Third column: Service-->\n' +
            '            <div class="col-md-3 mx-auto mb-4">\n' +
            '                <h6 class="text-uppercase font-weight-bold">\n' +
            '                    <strong>Services</strong>\n' +
            '                </h6>\n' +
            '                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">\n' +
            '                <p><a href="/services.html#technologyContainer"> IT Consulting</a></p>\n' +
            '                <p><a href="/services.html#accountingContainer"> Direct Placements</a></p>\n' +
            '                <p><a href="/services.html#engineeringContainer"> Software Development </a></p>\n' +
            '                <p><a href="/services.html#scienceContainer"> Project Management</a></p>\n' +
            '                <p><a href="/services.html#healthCareContainer"> Online Corporate Training</a></p>\n' +
            '                <p><a href="/services.html#professionalContainer"> Website Development</a></p>\n' +
            '                <p><a href="/services.html#educationContainer"> Education Counselling</a></p>\n' +
            '            </div>\n' +
            '            <!--/.Third column-->\n';
        return html;
    },
    createFourthColumn: function () {
        let html = '';
        html += '<!--Fourth column: Useful Links-->\n' +
            '            <div class="col-md-3 mb-4">\n' +
            '                <h6 class="text-uppercase font-weight-bold">\n' +
            '                    <strong>Useful links</strong>\n' +
            '                </h6>\n' +
            '                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">\n' +
            '\n' +
            '                <p><a href="#!">Software Solutions</a></p>\n' +
            '                <p><a href="#!">Data Solutions</a></p>\n' +
            '                <p><a href="#!">ERP/CRM Solutions</a></p>\n' +
            '                <p><a href="#!">Mobile Platform Solutions</a></p>\n' +
            '                <p><a href="#!">Infrastructure Solutions</a></p>\n' +
            '                <p><a href="#!"> Networking Solutions</a></p>\n' +
            '                <p><a href="#!"> Microsoft Applications</a></p>\n' +
            '                <p><a href="#!"> E-Learning & Training</a></p>\n' +
            '                <p><a href="#!"> Vocational Training</a></p>\n' +
            '            </div>\n' +
            '            <!--/.Fourth column-->';
        return html;
    },
    createFifthColumn: function () {
        let html = '            <!--Company address and contact details-->\n';
        html += '            <!--Fifth column-->\n' +
            '            <div class="col-md-3">\n' +
            '                <h6 class="text-uppercase font-weight-bold">\n' +
            '                    <strong>Contact</strong>\n' +
            '                </h6>\n' +
            '                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">\n' +
            '                <div class="custom-font">\n' +
            '                    <p><i class="fa fa-home mr-2"></i>' + this.address[0] +
            '                        <br>' +
            '                        <span style="padding-left: 7%">' + this.address[1] + '</span></p>\n' +
            '                    <p><a href="mailto:bloomrono11@gmail.com?Subject=Contact%20Us" class="home-contact-link" target="_top">\n' +
            '                        <i class="fa fa-envelope mr-2"></i>' + this.email + '</a></p>\n' +
            '                    <p><a href="tel:' + this.phone + '" class="home-contact-link">\n' +
            '                        <i class="fa fa-phone mr-2"></i> ' + this.phone + '</a></p>\n' +
            '                    <p><a href="tel:' + this.altPhone + '" class="home-contact-link">\n' +
            '                        <i class="fa fa-print mr-2"></i>' + this.altPhone + '</a></p>\n' +
            '                </div>\n' +
            '\n' +
            '                <hr class="hr-bold bg-transparent">\n' +
            '                <h6 class="text-uppercase font-weight-bold">\n' +
            '                    <strong>' + this.socialLinks + '</strong>\n' +
            '                </h6>\n' +
            '                <hr class="deep-purple accent-2 mb-2 mt-0 d-inline-block mx-auto" style="width: 60px;">\n' +
            '\n' +
            '                <!--Grid row-->\n' +
            '                <div class="row pl-1">\n' +
            '                    <!--Grid column-->\n' +
            '                    <div class="col-md-12 footer-social-icons">\n' +
            '                        <!--Facebook-->\n' +
            '                        <a class="fb-ic ml-0 mr-2">\n' +
            '                            <i class="fab fa-facebook-f p-2"> </i>\n' +
            '                        </a>\n' +
            '                        <!--Twitter-->\n' +
            '                        <a class="tw-ic">\n' +
            '                            <i class="fab fa-twitter p-2"> </i>\n' +
            '                        </a>\n' +
            // '                        <!--Google +-->\n' +
            // '                        <a class="gplus-ic mr-2">\n' +
            // '                            <i class="fab fa-google-plus-g p-2"> </i>\n' +
            // '                        </a>\n' +
            '                        <!--Linkedin-->\n' +
            '                        <a class="li-ic mr-2">\n' +
            '                            <i class="fab fa-linkedin-in p-2"> </i>\n' +
            '                        </a>\n' +
            '                        <!--Instagram-->\n' +
            '                        <a class="ins-ic mr-2">\n' +
            '                            <i class="fab fa-instagram p-2 white-text"> </i>\n' +
            '                        </a>\n' +
            '                    </div>\n' +
            '                    <!--Grid column-->\n' +
            '                </div>\n' +
            '                <!--Grid row-->\n' +
            '\n' +
            '            </div>\n' +
            '            <!--/.Fourth column-->\n';
        return html;
    },
    getFooterDivider: function () {

        let html = '<div class="container">\n';
        html += '<!--Divider-->\n' +
            '<hr class="' + this.footerDividerClass + '"></div>\n\n';

        return html;
    },
    getFooterCopyright: function () {
        let html = '';
        let copyrightTabsHtml = this.createCopyRightTabs();
        html += '<!-- Copyright -->\n' +
            '    <div class="' + this.footerCopyRightClass + '">\n' +
            '        <div class="container d-flex flex-row custom-font">\n' +
            '            <div class="d-inline-flex pt-2">\n' +
            '                <a href="' + this.copyRightLink + '" class="copyright-link">' + this.copyRightText + '</a>\n' +
            '            </div>\n' +
            '            <div class="d-inline-flex ml-auto">\n' +
            copyrightTabsHtml +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <!-- Copyright -->';
        return html;
    },

    createCopyRightTabs: function () {
        let me = this;
        let html = '';
        $.each(this.copyRightTabs, function (index, item) {
            html += me.createFooterALinkTag('nav-link', me.copyRightLinks[index]) + item + '</a>\n';
        });
        return html;
    },

    createFooterALinkTag: function (css, href) {
        return '<a class="' + css + '" href="' + href + '">';
    },

    /**
     * This method is to apply the scroll bar styles to each html page at load time
     */
    applyScrollClassToBody:function () {
        let body = $(document.body);
        if(body.hasClass(this.scrollClass)===false){
            body.addClass(this.scrollClass).addClass(this.scrollClassColor);
        }

    }

};