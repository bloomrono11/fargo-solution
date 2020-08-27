$(document).ready(function () {
    category.initialize();
});

let category = {
    blogCategoryTypes:[
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

    blogQuestionWrapperHtml:'<div class="blog-question-wrapper">',

    //IMP there will always be 2 categories only
    blogQuestionCategories: ['Relevant Posts', 'Categories'],
    blogQHeadingClass: 'blog-q-heading',
    blogCClass: 'blog-c',

    initialize:function () {
        let html = this.getBlogRightSection();

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

        //Note create the blog category and the category type questions
        html += '<div class="' + this.blogQHeadingClass + '">';
        html += this.blogQuestionCategories[1];
        html += this.closeDivTag();
        html+=this.createBlogCategoryQuestions();

        this.closeDivTag();
        return html;
    },
    /**
     * This method creates the template html as a string for each blog category type on the right section
     * @returns {string}
     */
    createBlogCategoryQuestions:function(){

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
    createALinkTagStart: function (cssClass, href) {
        return '<a href="' + href + '" class="' + cssClass + '">';
    },
    closeATag: function () {
        return '</a>\n';
    },
    closeDivTag: function () {
        return '</div>\n';
    },

};