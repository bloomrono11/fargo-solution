$(document).ready(function () {

    blog.initialize();

});


let blog = {

    rowClass: 'row',
    colBlogTextClass: 'col-sm-12 col-md-12',
    colBlogImageClass: 'col-sm-12 col-md-12',
    blogCount: 5,
    blogImageLocations: [
        'img/blog/FSI_Blogs-6.png', //Note replaced 1 with 6 for our blog
        'img/blog/FSI_Blogs-3.png',
        'img/blog/FSI_Blogs-2.png',
        'img/blog/FSI_Blogs-5.png',
        'img/blog/FSI_Blogs-4.png'
    ],
    imageClass: 'img-thumbnail img-responsive transition',
    blogWrapperTemplate: '<div class="blog text-left">',
    blogQuestionWrapperHtml: '<div class="blog-question-wrapper">',
    blogLinks: ['../blog/be-one-step-ahead-in-hiring.html',
    '../blog/5-skills-needed-move-staffing-recruiting-industry.html',
    '../blog/changes-regulations-facing-financial-services-industry.html',
    '../blog/eureka-fostering-innovation-company-culture.html',
    '../blog/homework-evaluate-potential-employer.html'],

    blogTitles: ['Be One Step Ahead in Hiring',
        '5 Skills Needed to Move Up in the Staffing & Recruiting Industry',
        'Changes in Regulations Facing the Financial Services Industry',
        'Eureka! Fostering Innovation in Your Company Culture',
        'Do Your Homework: How to Evaluate a Potential Employer'],

    blogBody: ['In today’s hiring environment, you need to have every advantage that you can get. With unemployment sitting at historic lows, competition for talent is at extreme. Hiring managers must act aggressively before someone else will snatches talent away.  Sorting through applications, screening applicants, and waiting to hear back from department heads takes valuable time away from recruiters. Recruiting technology …',
        'Moving up or getting promoted in any industry requires a good work ethic and being a team player. In the world of recruiters, the stakes are a little higher. In a field that can be at times be completely frustrating, or on the flip side, unbelievably rewarding, learning to keep a straight arrow approach is …',
        'In the financial industry, regulations are created to protect investors and markets while promoting stability. Changes to these regulations can be disruptive as financial institutions need to take the extra time to adjust to the new rules. The 2008 financial crisis shook the world, and strict regulations were rolled out as a result. Today looks vastly different to back then. A new robust market is upon …',
        'Innovation is one of the top buzz words in business today. For many companies, innovation is the key to their ongoing success, but for others, it is a challenge to a build culture around innovation.  If you’re looking to stay on the cutting edge of your industry, you need to empower your staff to think outside the box. So …',
        'Hunting for a job can be tiring, even for the most experienced candidates. Often, because interviews can be stressful, candidates forget to learn about the employer. How can you fully commit to a job when you don’t know anything about the company? Take the time to evaluate the company you are interviewing with. Some of it requires some …'],

    blogEnd: ['<a href="../blog/be-one-step-ahead-in-hiring.html" class="more">[Continue Reading ...]</a>',
        '<a href="../blog/5-skills-needed-move-staffing-recruiting-industry.html" class="more">[Continue Reading ...]</a>',
        '<a href="../blog/changes-regulations-facing-financial-services-industry.html" class="more">[Continue Reading ...]</a>',
        '<a href="../blog/eureka-fostering-innovation-company-culture.html" class="more">[Continue Reading ...]</a>',
        '<a href="../blog/homework-evaluate-potential-employer.html" class="more">[Continue Reading ...]</a>'],

    blogLinkClass: 'blog-link',
    blogTitleClass: 'blog-title',
    blogBodyClass: 'blog-body',
    blogEndClass: 'blog-end',
    dividerClass: 'hr-dark',
    blogTime: ['May 1, 2019', 'April 23, 2019', 'April 10, 2019', 'April 3, 2019', 'March 27, 2019'],
    blogCategoryTags: ['Industry Trends, Recruiting Strategies, Recruitment', 'Recruiting Strategies, Recruitment',
        'Industry Trends', 'Diversity, Recruiting Strategies', 'Job Interview, Job Search'],

    blogQuestions: [
        'Be One Step Ahead in Hiring',
        '5 Skills Needed to Move Up in the Staffing & Recruiting Industry',
        'Changes in Regulations Facing the Financial Services Industry',
        'Eureka! Fostering Innovation in Your Company Culture',
        'Do Your Homework: How to Evaluate a Potential Employer',
        'Power BI',
        'Tableau',
        'Data Analyst',
        'Data Analyst Daily Activities',
        'Business System Analyst',
        'Mid Range Laptops for IT Consultants'
    ],
    blogQuestionLinks:['/blog/be-one-step-ahead-in-hiring.html',
        '/blog/5-skills-needed-move-staffing-recruiting-industry.html',
        '/blog/changes-regulations-facing-financial-services-industry.html',
        '/blog/eureka-fostering-innovation-company-culture.html',
        '/blog/homework-evaluate-potential-employer.html',
        '/blog/power-bi.html',
        '/blog/tableau.html',
        '/blog/why-be-data-analyst.html',
        '/blog/day-to-day-activities-data-analyst.html',
        '/blog/why-choose-business-system-analyst.html',
        '/blog/mid-range-laptops.html'
    ],
    blogCategoryTypes: [
        'Company News',
        'Diversity',
        'Industry Trends',
        'Job Interview',
        'Job Search',
        'Recruiting Strategies',
        'Recruitment',
        'Recruitment Process Outsourcing',
        'Resumes',
        'Workplace Culture'
    ],

    //IMP there will always be 2 categories only
    blogQuestionCategories: ['Useful Posts', 'Categories'],
    blogQHeadingClass: 'blog-q-heading',
    blogQClass: 'blog-q',
    blogCClass: 'blog-c',

    initialize: function () {
        let html;

        html = this.getBlogLeftSection();

        let blogContainer = $('#blogContainer');
        if (blogContainer !== undefined && blogContainer.length > 0) {
            blogContainer.append(html);
        }

        html = this.getBlogRightSection();

        let blogQuestionContainer = $('#blogQuestionContainer');
        if (blogQuestionContainer !== undefined && blogQuestionContainer.length > 0) {
            blogQuestionContainer.append(html);
        }

    },

    getBlogRightSection: function () {
        let html = ' ';
        html += this.createBlogQuestions();
        return html;
    },

    /**
     * This method is to create the questions on the right
     * @returns {string}
     */
    createBlogQuestions: function () {
        let html = '';

        html += this.blogQuestionWrapperHtml;
        //Note create the blog questions all the way till the 2nd last index
        html += '<div class="' + this.blogQHeadingClass + '">';
        html += this.blogQuestionCategories[0];
        html += this.closeDivTag();

        for (let i = 0; i < (this.blogQuestions.length); i++) {
            html += this.createBlogQuestion(i);
        }
        html += this.closeDivTag();
        html += this.blogQuestionWrapperHtml;

        //Note create the blog category and the category type questions
        html += '<div class="' + this.blogQHeadingClass + '">';
        html += this.blogQuestionCategories[1];
        html += this.closeDivTag();
        html += this.createBlogCategoryQuestions();

        this.closeDivTag();
        return html;
    },

    /**
     * This method creates the template html as a string for each blog question on the right section
     * @param index {number} The array index to be used to link to the blog clicked
     * @returns {string}
     */
    createBlogQuestion: function (index) {

        let html = '', href ='#!';
        try{
            href= this.blogQuestionLinks[index];
        } catch (error) {
            console.warn('Failed to sent blog page');
        }
        // console.log(href);
        html += '<div class="' + this.blogQClass + '">';
        html += this.createALinkTagStart('recent-post', href);
        html += this.blogQuestions[index];
        html += this.closeATag();
        html += this.closeDivTag();
        return html;
    },

    /**
     * This method creates the template html as a string for each blog category type on the right section
     * @returns {string}
     */
    createBlogCategoryQuestions: function () {

        let html = '', href = '#!';
        for (let i = 0; i < (this.blogCategoryTypes.length); i++) {
            html += '<div class="' + this.blogCClass + '">';
            html += this.createALinkTagStart('category-links', href);
            html += this.blogCategoryTypes[i];
            html += this.closeATag();
            html += this.closeDivTag();
        }
        return html;
    },

    /**
     * This method is to fetch the blog left section with all blogs and return a string value of the html element
     * @returns {string} HTML element
     */
    getBlogLeftSection: function () {

        let html = ' ';
        html += this.createBlogRow();
        return html;
    },

    /**
     * This method creates all the rows and cols along with all the blog elements in a specific order and returns
     * the html result in string form
     * @returns {string} HTML element
     */
    createBlogRow: function () {
        let html = '';
        //Note below is to create a the blogs and swap on every iteration
        for (let i = 0; i < this.blogCount; i++) {
            // html += this.createGridStart(this.rowClass);

            html += this.createBlogItemHeader(i);
            html += this.createBlogImage(i);
            html += this.createBlogText(i);

            // html += this.createGridClose();
            html += this.createDivider();
        }
        return html;

    },

    /**
     * This method is to customize the FSI blog titles to the top
     * @param index {number} the index number of the blog elements in the array given in this object
     * @returns {string} HTML element
     */
    createBlogItemHeader: function (index) {

        let html = '';

        html += this.createGridStart(this.rowClass);
        html += this.createGridStart(this.colBlogTextClass);
        html += this.blogWrapperTemplate;
        html += this.createBlogTitle(index);
        html += this.createBlogTitleEnd(index);

        html += this.closeDivTag();
        //Note close col
        html += this.createGridClose();
        //Note close row
        html += this.createGridClose();

        return html;
    },

    /**
     * This method creates a zoom effect image with the img loc and returns a html element of the blog image in string form
     * @param index {number} the index number of the blog elements in the array given in this object
     * @returns {string} HTML element
     */
    createBlogImage: function (index) {
        let html = '';

        html += this.createGridStart(this.rowClass);

        let overlayZoomHtml = '<div class="view overlay zoom">\n';
        let imageHtml = '<img src="' + this.blogImageLocations[index] + '" class="' + this.imageClass + '">\n';

        html += this.createGridStart(this.colBlogImageClass) + '\n';

        html += overlayZoomHtml;
        html += imageHtml;

        //Note close the overlay zoom div class
        html += this.closeDivTag();
        //Note close col
        html += this.createGridClose();
        //Note close row
        html += this.createGridClose();
        return html;
    },

    /**
     * This method is to create a single blog whole
     * @param index {number} the index number of the blog elements in the array given in this object
     * @returns {string} html element
     */
    createBlogText: function (index) {

        let html = '';

        html += this.createGridStart(this.rowClass);

        html += this.createGridStart(this.colBlogTextClass);
        html += this.blogWrapperTemplate;
        html += this.createBlogBody(index);
        html += this.createBlogEnd(index);

        html += this.closeDivTag();
        //Note close col
        html += this.createGridClose();
        //Note close row
        html += this.createGridClose();

        return html;
    },

    /**
     * This method is to create the blog title element html for a single entire blog
     * @param index {number} the index number of the blog title in the array given
     * @returns {string} html element
     */
    createBlogTitle: function (index) {
        let html = '', href = this.blogLinks[index];

        html += '<div class="' + this.blogTitleClass + '">';
        html += this.createALinkTagStart('blog-title-link', href);

        html += this.blogTitles[index];

        html += this.closeATag();
        html += this.closeDivTag();

        return html;

    },
    /**
     * This method is to get the the custom footnote for the title header
     * @param index {number} the index number of the blog elements in the array given in this object
     * @returns {string} HTML element
     */
    createBlogTitleEnd: function (index) {
        let html = ' <div class="container-fluid px-0 pb-2 blog-title-footnote">\n <!-- Note heading -->\n';
        html += '<div class="d-flex flex-row grey-text">\n' +
            '<a title="Post by Fargo Solutions" rel="author"><i class="fas fa-user-alt"></i> Fargo Solutions</a>\n' +
            '<div><i class="fas fa-calendar-alt"></i>' + this.blogTime[index] + ' </div>\n' +
            '<a title="Categories"><i class="fas fa-tags"></i>' + this.blogCategoryTags[index] + ' </a>\n' +
            '</div>\n</div>\n';
        return html;
    },

    /**
     * This method is to create the blog body element html for a single entire blog
     * @param index {number} the index number of the blog body in the array given
     * @returns {string} html element
     */
    createBlogBody: function (index) {
        let html = '';

        html += '<div class="' + this.blogBodyClass + '">';

        html += this.blogBody[index];

        html += this.closeDivTag();

        return html;

    },
    /**
     * This method is to create the blog end element html for a single entire blog
     * @param index {number} the index number of the blog end in the array given
     * @returns {string} html element
     */
    createBlogEnd: function (index) {
        let html = '';

        html += '<div class="' + this.blogEndClass + '">';
        html += this.blogEnd[index];
        html += this.closeDivTag();

        return html;

    },

    createALinkTagStart: function (cssClass, href) {
        return '<a href="' + href + '" class="' + cssClass + '">';
    },

    createDivider: function () {
        return '<!-- Note light divider to separate the two rows of each blog-->\n' +
            '<hr class="' + this.dividerClass + '">\n\n';
    },

    closeATag: function () {
        return '</a>\n';
    },
    createGridStart: function (cssClass) {
        return '<!-- Note Grid start -->\n <div class="' + cssClass + '">';
    },
    createGridClose: function () {
        return '</div>\n<!-- Note Grid start -->\n';
    },
    closeDivTag: function () {
        return '</div>\n';
    },
};