const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const rename = require('gulp-rename')
const del = require('del')
// const uglify = require('gulp-uglify')
const through2 = require('through2').obj

const distDir = './dist'
const distClientDir = distDir + '/client'
const distServerDir = distDir + '/server'
const srcDir = './src'
const srcServerDir = srcDir + '/server'

gulp.task('clean', () => {
  return del([distDir + '/**/*'])
})

gulp.task('clean-client', () => {
  return del([distClientDir + '/**/*'])
})

gulp.task('clean-server', () => {
  return del([distServerDir + '/**/*'])
})

gulp.task('css-min', () => {
  return gulp.src(distClientDir + '/bundle.css')
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distClientDir))
})

gulp.task('js-min', () => {
  return gulp.src(distClientDir + '/bundle.js')
    // .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(distClientDir))
})

gulp.task('replace', () => {
  return gulp.src(distClientDir + '/index.html')
    .pipe(through2((file, encode, cb) => {
      let html = file.contents.toString()
      html = html.replace(/src="bundle.js"/, 'src="/bundle.min.js"')
      html = html.replace(/href="bundle.css"/, 'href="/bundle.min.css"')
      file.contents = Buffer.from(html)
      cb(null, file)
    }))
    .pipe(gulp.dest(distClientDir))
})

gulp.task('locales', () => {
  return gulp.src(srcServerDir + '/locales/*.json')
    .pipe(gulp.dest(distServerDir + '/locales'))
})

gulp.task('default', ['css-min', 'js-min', 'replace'])
