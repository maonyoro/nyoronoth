var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
//var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');

// default task (just execute 'gulp')
gulp.task('default', function() {
    gulp.watch('./src/*.sass', ['sass'] );
    gulp.watch('./src/*.jade', ['jade'] );
    //gulp.watch('./src/*.coffee', ['coffee'] );
    gulp.src('./dst').pipe(
        webserver({
            host: "0.0.0.0",
            livereload: true
        })
    );
});

gulp.task('jade', function() {
    gulp.src('./src/*.jade').pipe(jade()).pipe(gulp.dest('./dst/'));
});
gulp.task('sass', function() {
    gulp.src('./src/*.sass').pipe(sass()).pipe(gulp.dest('./dst'));
});

// gulp.task('coffee', function() {
//     gulp.src('./src/*.coffee').pipe(coffee()).pipe(gulp.dest('./dst/'));
// });

