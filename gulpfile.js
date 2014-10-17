var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    // jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del'),
    htmlreplace = require('gulp-html-replace'),
    uncss = require('gulp-uncss'),
    runSequence = require('run-sequence');

// Sass
gulp.task('sass', function() {
  return gulp.src(['public/style/*.scss'])
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public'));
});

// Styles (combine, minify)
gulp.task('styles', function() {
  return gulp.src([ 'public/bower/normalize-css/normalize.css',
                    'public/bower/bootstrap/dist/css/bootstrap.min.css',
                    'public/main.css'])
    .pipe(concat('main.css'))
    .pipe(uncss({
        html: ['dist/index.html'],
        ignore: [/(?=chill)\w+/g, /(?=events)\w+/g, /(?=h3)\w+/g] //required since DOM is modified with js
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss({keepSpecialComments:0, processImport:false}))
    .pipe(gulp.dest('dist'));
});

// Scripts (combine, minify)
gulp.task('scripts', function() {
  return gulp.src([ 'public/bower/jquery/dist/jquery.min.js',
                    'public/bower/bootstrap/dist/js/bootstrap.min.js',
                    'public/bower/ajaxchimp/jquery.ajaxchimp.min.js',
                    'public/main.js'])
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Image optimization
gulp.task('images', function() {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'));
});

//Move index file to dist folder
gulp.task('index', function() {
  return gulp.src('public/index.html')
    .pipe(gulp.dest('dist'));
});

//Move fonts to dist
gulp.task('fonts', function() {
  return gulp.src('public/bower/bootstrap/fonts/**/*', { base: 'public/bower/bootstrap'})
    .pipe(gulp.dest('dist'));
});

//Replace / Inject min files
gulp.task('inject', function() {
  gulp.src('public/index.html')
    .pipe(htmlreplace({
        'css': 'main.min.css',
        'js': 'main.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist', 'dist/**/*'], cb)
});

gulp.task('default', ['clean'], function() {
    runSequence(['index', 'fonts', 'images'], 'sass', ['styles', 'scripts', 'inject'], function() {
        console.log('Build completed');
    });
});