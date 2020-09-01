$(document).ready(function () {

    header.initialize();

});
let header = {

    dividerClass: 'hr-light m-0',
    navBarId: 'fsiNavBar',
    navBarTabsId: 'fsiNavBarTabs',
    navbarClass: 'navbar navbar-expand-lg navbar-orange scrolling-navbar fixed-top',
    logoLocation: '/img/logo/logo.png',

    initialize: function () {

        let html;

        let header = $('#header');

        if (header !== undefined && header.length > 0) {
            // header.prepend(html);

            html = this.getNavBarHeader();
            header.prepend(html);

            html = this.getSideNavBar();
            header.prepend(html);

            // console.log(html);
            // SideNav Initialization
            let sideNav = $("#sideNavBtnCollapse").sideNav('hide');
            let sideNavScrollbar = document.querySelector('.custom-scrollbar');
            let ps = new PerfectScrollbar(sideNavScrollbar);

            this.listenOnSideNavBarCollapseButton();
            // SideNav Scrollbar Initialization
        }

        this.listenNavBarTabActive();
    },

    /**
     * This method is to create the navbar
     * @returns {string}
     */
    getNavBarHeader: function () {
        let id = 'fsiNavCollapse';
        let navbarClass = this.navbarClass;

        //Note add navbar side nav collapse button
        let html = this.getNavBarLeftForSideNav();

        let header =
            '    <!-- Note main header, Navbar-->\n' +
            '    <nav class="' + navbarClass + '" id="' + this.navBarId + '">\n' +
            // html+
            '        <!-- Note Additional container -->\n' +
            '        <div class="container-fluid custom-nav-margin p-0">\n';

        //Note add navbar side nav collapse button
        header += this.getNavBarLeftForSideNav();

        //Note add nav brand
        header += this.getNavBarBrand();

        //Note add the nab bar collapsible button
        header += this.getNavBarCollapsibleButton(id) + '\n';

        //Note add the nav links to the inner navbar then to the main navbar
        header += this.getNavBar(id);

        //Note close any additional containers and navbar finally
        header += '        </div>\n' +
            '        <!-- Note Close Additional container -->\n' +
            '    </nav>\n' +
            '    <!--/.Navbar-->';
        return header;
    },

    getNavBarLeftForSideNav: function () {
        let html = '<!-- SideNav slide-out button -->\n';
        html += '      <div class="side-nav-btn-position">\n';
        html += '        <a href="#" data-activates="slide-out" class="button-collapse" id="sideNavBtnCollapse"><i class="fas fa-2x fa-bars black-text"></i></a>\n';
        html += '      </div>\n';

        // html+=  '      <!-- Breadcrumb-->\n' +
        //     '      <div class="breadcrumb-dn mr-auto">\n' +
        //     '        <p>Material Design for Bootstrap</p>\n' +
        //     '      </div>';

        return html;
    },

    getNavBarBrand: function () {

        //Note add the comments for the tags
        let html = '            <!-- Note Navbar brand -->\n' +
            '            <!-- IMP added w-20-per for logo spacing for now-->\n';

        let cssClass = 'navbar-brand w-20 pt-0 text-center', href = '#';
        html += this.createNavLinkATag(cssClass, href);

        //Note Content to be switched with logo
        html += '' +
            '<img src="' + this.logoLocation + '" class="img-brand-custom">\n' +
            // '<div><p>Fargo Solutions</p></div>' +
            '</a>\n';
        return html;
    },

    /**
     * This method is the get the collapsible button of navbar
     * @param id
     * @returns {string}
     */
    getNavBarCollapsibleButton: function (id) {
        return '  <!-- Note navbar Collapse button -->\n' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#' + id + '"\n' +
            '        aria-controls="' + id + '" aria-expanded="false" aria-label="Toggle navigation">\n' +
            '        <span class="navbar-toggler-icon"></span>\n</button>\n';
    },

    /**
     * This method is to get the navbar
     * @param id
     * @returns {string}
     */
    getNavBar: function (id) {
        let html = '\n<!-- Note start collapsible navbar -->\n' +
            '<div class="collapse navbar-collapse" id="' + id + '">\n' +
            '   <!-- Links -->\n' +
            '   <ul class="navbar-nav mr-auto" id="' + this.navBarTabsId + '">\n';
        html += this.getNavLinks();
        html += '\n</ul>\n <!-- Note end nav content -->\n';

        html += this.createNavSocialLinks();

        html += '</div>\n<!-- Note end Collapsible content -->\n';

        return html;
    },
    /**
     * This method is for getting a list of the navlinks that we require
     *
     * @returns {string}
     */
    getNavLinks: function () {
        let html = '';
        html += ' <li class="custom-nav-item">\n' +
            '                        <!--Dropdown primary-->\n' +
            '                        <div class="dropdown">\n' +
            '                            <!--Trigger-->\n' +
            '                            <a class="nav-link dropdown-toggle" id="dropdownHomeId" data-toggle="dropdown">Home</a>\n' +
            '                            <!--Menu-->\n' +
            '                            <div class="dropdown-menu dropdown-primary smooth-scroll" id="dropdownHomeNavId">\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#intro"> Top</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#introContent"> Information</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#clientRetention"> Client Feedback</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#resources">Resources</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#aboutIndustry"> About</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#subscription"> Subscription</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/index.html#footer"> End</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </li>\n';

        //Note service dropdown
        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <!--<a class="nav-link" href="#examples">Examples</a>-->\n' +
            '                        <!--Dropdown primary-->\n' +
            '                        <div class="dropdown">\n' +
            '                            <!--Trigger-->\n' +
            '                            <a class="nav-link dropdown-toggle" id="serviceDropDownToggleId"\n' +
            '                               data-toggle="dropdown">Service</a>\n' +
            '                            <!--Menu-->\n' +
            '                            <div class="dropdown-menu dropdown-primary smooth-scroll" id="serviceDropDownNavId">\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#technologyContainer"> IT Consulting</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#accountingContainer"> Financial</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#engineeringContainer"> Engineering</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#scienceContainer"> Science</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#healthCareContainer"> HealthCare</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#professionalContainer"> Management/Admin</a>\n' +

            // '                                <a class="dropdown-item mdb-dropdownLink-1" href="services.html#technologyContainer"> Direct Placements</a>\n' +
            // '                                <a class="dropdown-item mdb-dropdownLink-1" href="services.html#technologyContainer"> Software Development</a>\n' +
            // '                                <a class="dropdown-item mdb-dropdownLink-1" href="services.html#technologyContainer"> Project Management</a>\n' +
            // '                                <a class="dropdown-item mdb-dropdownLink-1" href="services.html#technologyContainer">Online Corporate Training </a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#websiteDevelopmentContainer"> Website Development</a>\n' +
            '                                <a class="dropdown-item mdb-dropdownLink-1" href="/services.html#educationContainer"> Educational Counselling</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </li>\n';

        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/advertiser.html">Advertiser</a>\n' +
            '                    </li>\n';
        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/publisher.html">Publisher</a>\n' +
            '                    </li>\n';
        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/careers.html">Career</a>\n' +
            '                    </li>\n';

        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/blog.html">Blog</a>\n' +
            '                    </li>\n';

        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/about.html">About Us</a>\n' +
            '                    </li>\n';

        html +=
            '                    <li class="custom-nav-item">\n' +
            '                        <a class="nav-link" href="/contact.html">Contact</a>\n' +
            '                    </li>';
        return html;
    },

    createNavSocialLinks: function () {
        let html = '';
        html += '<!-- Note Social Icon nav links -->\n' +
            '                <ul class="navbar-nav nav-flex-icons">\n' +
            '                    <li class="nav-item">\n' +
            '                        <a class="social-nav-link fb-ic"><i class="fab fa-facebook-f p-2"></i></a>\n' +
            '                    </li>\n' +
            '                    <li class="nav-item">\n' +
            '                        <a class="social-nav-link tw-ic"><i class="fab fa-twitter p-2"></i></a>\n' +
            '                    </li>\n' +
            '                    <li class="nav-item ">\n' +
            '                        <a class="social-nav-link ins-ic"><i class="fab fa-instagram p-2"></i></a>\n' +
            '                    </li>\n' +
            '                </ul>';
        return html;
    },

    createNavLinkATag: function (cssClass, href) {

        return '<a class="' + cssClass + '" href="' + href + '">';
    },

    /**
     * This method is to create mega side nav bar on top of navbar
     * Todo the social links are to be linked to their social sites for FSI once the accounts are created on the
     * todo-- social sites for FSI
     * @returns {string}
     */
    getSideNavBar: function () {
        let html = ' <!-- Sidebar navigation -->\n' +
            '    <div id="slide-out" class="side-nav sn-bg-4 fixed">\n' +
            '      <ul class="custom-scrollbar">\n' +
            '        <!-- Logo -->\n' +
            '        <li>\n' +
            '          <div class="logo-wrapper waves-light">\n' +
            '               <a href="#" class="sidenav-logo flex-center"><span>F</span><span>S</span><span>I</span></a>' +
            // '            <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" class="img-fluid flex-center"></a>\n' +
            '          </div>\n' +
            '        </li>\n' +
            '        <!--/. Logo -->\n';

        html +=
            '        <!--Social-->\n' +
            '        <li>\n' +
            '          <ul class="social">\n' +
            '            <li><a  class="icons-sm fb-ic"><i class="fab fa-facebook-f p-2"> </i></a></li>\n' +
            '            <li><a  class="icons-sm ins-ic"><i class="fab fa-instagram p-2"> </i></a></li>\n' +
            '            <li><a  class="icons-sm tw-ic"><i class="fab fa-twitter p-2"> </i></a></li>\n' +
            '          </ul>\n' +
            '        </li>\n' +
            '        <!--/Social-->\n';

        html +=
            '        <!-- Side navigation links -->\n' +
            '        <li>\n' +
            '          <ul class="collapsible collapsible-accordion">\n' +
            '            <li><a class="collapsible-header waves-effect arrow-r" id="careerCollapseBtn"><i class="fas fa-chevron-right"></i> Employment\n' +
            '               <i class="fas fa-angle-down rotate-icon"></i></a>\n' +
            '              <div class="collapsible-body">\n' +
            '                <ul>\n' +
            '                  <li><a href="/employment.html#fulltime" class="waves-effect">Fulltime</a></li>\n' +
            '                  <li><a href="/employment.html#direct" class="waves-effect">Direct Hire</a></li>\n' +
            '                  <li><a href="/employment.html#contractToHire" class="waves-effect">Contract to Hire</a></li>\n' +
            '                  <li><a href="/employment.html#contract" class="waves-effect">Contract</a></li>\n' +
            '                  <li><a href="/employment.html#partTime" class="waves-effect">Part Time</a></li>\n' +
            '                </ul>\n' +
            '              </div>\n' +
            '            </li>\n' +
            '          </ul>\n' +
            '        </li>\n' +
            '        <!--/. Side navigation links -->\n';

        html +=
            '        <!-- Side navigation links -->\n' +
            '        <li>' +
            '        <ul class="collapsible collapsible-accordion">\n' +
            '           <li>\n' +
            '               <a href="/health.html" class="collapsible-header waves-effect bg-transparent"><i class="fas fa-user-nurse"></i> Covid\n' +
            '               </a>\n' +
            '           </li>\n' +
            '         </ul>' +
            '         </li>\n' +
            '         <!--/. Side navigation links -->\n';

        html +=
            '        <!-- Side navigation links -->\n' +
            '        <li>' +
            '        <ul class="collapsible collapsible-accordion">\n' +
            '           <li>\n' +
            '               <a class="collapsible-header waves-effect bg-transparent"><i class="fas fa-briefcase"></i> Job Search\n' +
            '               </a>\n' +
            '           </li>\n' +
            '         </ul>' +
            '         </li>\n' +
            '         <!--/. Side navigation links -->\n';

        html +=
            '</ul>\n' +
            '      <div class="sidenav-bg rgba-blue-light"></div>\n' +
            '    </div>\n' +
            '    <!--/. Sidebar navigation -->';
        return html;
    },

    listenOnSideNavBarCollapseButton: function () {
        $('#careerCollapseBtn').on('click', function () {
            let liEl = $(this).parent('li');
            // let linkElement = $(this).find('a.collapsible-header');
            let divEl = $(liEl).find('div.collapsible-body');

            if ($(liEl).hasClass('active')) {
                $(liEl).removeClass('active');
                $(this).removeClass('active');
                $(divEl).css('display', 'none');
            } else {
                $(liEl).addClass('active');
                $(this).addClass('active');
                $(divEl).css('display', 'block');
            }
        });
    },

    /**
     * This method is to switch the active navbar on page change via url #{content}
     */
    listenNavBarTabActive: function () {
        let navItems = $('#' + this.navBarTabsId).children('.custom-nav-item');
        // console.log(navItems);
        let loc = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        if (loc.indexOf('#') > 1) {
            loc = loc.substr(0, loc.indexOf('#'));
        }

        loc = loc.replace('.html', '');
        let cssClassToAdd = '';

        $.each(navItems, function (index, item) {
            let navList = $(item).children('a');

            if (navList.length < 1) {
                navList = $(item).find('.dropdown > a.nav-link');
                cssClassToAdd = 'navbar-dropdown-active';
            } else {
                cssClassToAdd = 'active';
            }

            $(item).removeClass('active');
            $(item).removeClass('navbar-dropdown-active');

            let navText = $(navList).text().toLowerCase().trim();

            if (loc.trim() !== '' && (loc.indexOf(navText) >= 0 || navText.indexOf(loc) >= 0)) {
                $(item).addClass(cssClassToAdd);

            } else if (loc.trim() !== '' && navText === 'home'
                && loc.toLowerCase().trim() === 'index') {
                $(item).addClass(cssClassToAdd);

            } else if (loc.trim() === '' && navText === 'home') {
                $(item).addClass(cssClassToAdd);
            }
        });
    }
};