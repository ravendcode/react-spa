const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

const distDir = 'public'

gulp.task('css-min', function () {
  return gulp.src(distDir + '/styles.css')
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distDir))
})

gulp.task('js-min', function () {
  return gulp.src(distDir + '/scripts.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distDir))
})

gulp.task('default', ['css-min', 'js-min'])
