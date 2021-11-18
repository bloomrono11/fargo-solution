const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
//const fs = require('fs');

const cssAddonsPath = './css/modules/';

// CSS Tasks
gulp.task('css-compile', function () {
    return gulp.src(['scss/*.scss'])
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('./dist/css/'));

});

// CSS Tasks
gulp.task('css-compile-modules', function () {
    return gulp.src(['scss/**/modules/**/*.scss',
        'node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss',
        'node_modules/@fortawesome/fontawesome-free/scss/solid.scss',
        'node_modules/@fortawesome/fontawesome-free/scss/brands.scss',
        'node_modules/@fortawesome/fontawesome-free/scss/regular.scss'])
        .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(rename({dirname: cssAddonsPath}))
        .pipe(gulp.dest('./dist/'));
});

// CSS minify
gulp.task('css-minify', function () {
    return gulp.src(['./dist/css/*.css', '!./dist/css/*.min.css', '!./dist/css/bootstrap.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));

});

gulp.task('css-minify-modules', function () {
    return gulp.src(['./dist/css/modules/*.css', '!./dist/css/modules/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/modules'));
});

// JavaScript Tasks
gulp.task('js-build', () => {

    const plugins = getJSModules();

    // gulp.start('js-lite-build');
    // gulp.start('js-minify');

    return gulp.src([plugins.modules]) //fsi.modules
        .pipe(concat('mdb.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gulp.task('js-minify-fsi'));


});

// Gulp task to minify FSI JavaScript files
gulp.task('js-minify-fsi', () => {
    return gulp.src(['./js/fsi/*.js'])
        // Minify the file
        .pipe(minify({
            ext: {
                // src:'.js',
                min: '.min.js'
            },
            noSource: true,
        }))
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify P4C JavaScript files
gulp.task('js-minify-p4c', () => {
    return gulp.src(['./js/p4c/*.js'])
        // Minify the file
        .pipe(minify({
            ext: {
                // src:'.js',
                min: '.min.js'
            },
            noSource: true,
        }))
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify Basic ad related web JavaScript files
gulp.task('js-minify-basic-web', () => {
    return gulp.src(['./js/basic-web/*.js'])
        // Minify the file
        .pipe(minify({
            ext: {
                // src:'.js',
                min: '.min.js'
            },
            noSource: true,
        }))
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify HTML files
gulp.task('html-minify', function () {
    return gulp.src(['./html/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js-minify', () => {
    return gulp.src(['./js/lib/mdb.js', 'node_modules/smooth-scroll/dist/smooth-scroll.polyfills.js'])
        .pipe(minify({
            ext: {
                // src:'.js',
                min: '.min.js'
            },
            noSource: true,
        }))
        .pipe(gulp.dest('./dist/js'));
});

// Image Compression
gulp.task('img-compression', function () {
    return gulp.src(['./img/**'])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/img'));
});

// Live Server
gulp.task('live-server', function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            directory: true
        },
        notify: false,
        https: true
    });

    gulp.watch("**/*", {cwd: './dist/'}, browserSync.reload);
});

// Watch on everything
gulp.task('fsi', function () {

    browserSync.init({
        server: {
            baseDir: './dist',
            directory: true
        },
        notify: false
    });

    // gulp.watch("node_modules/@fortawesome/fontawesome-free/scss/*.scss", ['sass']);
    gulp.watch("scss/**/*.scss", gulp.series('css-compile', (done) => {
        browserSync.reload();
        done();
    }));

    gulp.watch(["dist/css/*.css", "!dist/css/*.min.css"], gulp.series('css-minify', (done) => {
        browserSync.reload();
        done();
    }));
    gulp.watch(["html/*.html", "html/blog/*.html"], gulp.series('html-minify', (done) => {
        browserSync.reload();
        done();
    }));
    gulp.watch("js/**/*.js", gulp.series('js-minify', (done) => {
        browserSync.reload();
        done();
    }));

    gulp.watch("js/**/*.js", gulp.series('js-minify-fsi', (done) => {
        browserSync.reload();
        done();
    }));

    gulp.watch("js/**/*.js", gulp.series('js-minify-p4c', (done) => {
        browserSync.reload();
        done();
    }));

    gulp.watch("js/**/*.js", gulp.series('js-minify-basic-web', (done) => {
        browserSync.reload();
        done();
    }));


    // gulp.watch(["dist/js/*.js", "!dist/js/*.min.js"], ['js-minify']);
    gulp.watch("**/*", {cwd: './img/'}, gulp.series('img-compression', (done) => {
        browserSync.reload();
        done();
    }));
});

function getJSModules() {
    delete require.cache[require.resolve('./js/modules.js')];
    return require('./js/modules');
}
