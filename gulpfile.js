var gulp     = require('gulp'),
    uglify   = require('gulp-uglify'),
    rename   = require('gulp-rename'),
    jshint   = require('gulp-jshint'),
    stylish  = require('jshint-stylish'),
    fileList = './jquery.cloneEvent.js';

gulp.task('compress', function() {
    return gulp.src(fileList)
        .pipe(rename(function (dir, base, ext) {
            return base + ".min" + ext;
        }))
        .pipe(uglify({
            output: {
                comments: true
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function() {
    return gulp.src(fileList)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', ['lint', 'compress']);
