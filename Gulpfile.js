var gulp =  require('gulp');
var sass = require('gulp-ruby-sass');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');



gulp.task('jackstrap', function() {
  return gulp.src('public/jackstrap/sass/jackstrap.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest('public/stylesheets/'))
})


gulp.task('sass', function() {
  return gulp.src('public/sass/main.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest('public/stylesheets/'))
})


gulp.task('watch', function(){
  gulp.watch('public/**/*.scss',['sass']);
  gulp.watch('public/jackstrap/sass/**/*.scss',['jackstrap']);
})


gulp.task('nodemon', function(){
  nodemon({
    script: 'app.js'
  })
})


gulp.task('default',['watch', 'nodemon'], function(){
  console.log('werking');
})
