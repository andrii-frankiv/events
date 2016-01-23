var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var conf = {
    styles: {
        src: 'src/sass',
        dest: 'public/css'
    },

    js: {
        src: 'src/js',
        dest: 'public/js'
    }
};

gulp.task('styles', function() {
    return sass(conf.styles.src + '/*.scss', { style: 'compressed' })
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(conf.styles.dest));
});

gulp.task('js', function() {
    return gulp.src(['src/js/routes.js', 'src/js/constants.js', conf.js.src + '/*.js'])
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(conf.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(conf.styles.src + '/*.scss', ['styles']);
    gulp.watch(conf.js.src + '/*.js', ['js']);

});

gulp.task('default', ['styles', 'js', 'watch']);