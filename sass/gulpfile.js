var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
/*const gulpDeployFtp = require('gulp-deploy-ftp');*/


gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(autoprefixer({
             browsers: ['last 99 versions'],
             cascade: false
         }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('deploy',function(){
    gulp.src('path/to/file')
  .pipe(gulpDeployFtp({
    remotePath: '/tmp',
    host: 'localhost',
    port: 21,
    user: 'foo',
    pass: 'bar'
  })
  .pipe(gulp.dest('dest')));
});
// Static Server + watching scss/html files
gulp.task('run', function(){

  browserSync.init({
         proxy: "http://site-2.ru"
    });

    gulp.watch('./sass/*.scss', ['sass']);
    
   gulp.watch(["js/*.js",'css/*.css','*.html']).on('change', browserSync.reload);
});