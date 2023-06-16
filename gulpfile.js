const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


gulp.task('prefix', function () {
  return gulp.src('./style.css') 
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'], 
      cascade: false
    }))
    .pipe(gulp.dest('./')); 
});

gulp.task('styles', function(){
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

 
gulp.task('watch', function(){
    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/**/*', gulp.series(['styles', 'prefix']));
    gulp.watch(["*.html", "./js/*.js"]).on('change', browserSync.reload);
});
