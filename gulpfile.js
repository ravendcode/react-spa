const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const through2 = require('through2').obj

const distDir = 'public'

gulp.task('css-min', () => {
  return gulp.src(distDir + '/styles.css')
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distDir))
})

gulp.task('js-min', () => {
  return gulp.src(distDir + '/scripts.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distDir))
})

gulp.task('replace', () => {
  return gulp.src(distDir + '/index.html')
    .pipe(through2((file, encode, cb) => {
      let html = file.contents.toString()
      html = html.replace(/src="scripts.js"/, 'src="scripts.min.js"')
      html = html.replace(/href="styles.css"/, 'href="styles.min.css"')
      file.contents = Buffer.from(html)
      cb(null, file)
    }))
    .pipe(gulp.dest(distDir))
})

gulp.task('default', ['css-min', 'js-min', 'replace'])
