var gulp = require('gulp');
var sass = require('gulp-sass');
//var jade = require('gulp-jade');
//var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');


// ここ
gulp.task('default', function() {
    gulp.watch('./*.sass', ['sass'] );
    //gulp.watch('./src/*.jade', ['jade'] );
    //gulp.watch('./src/*.coffee', ['coffee'] );
    gulp.src('.').pipe(
        webserver({
            livereload: true
        })
    );
});

// サブルーチン

// gulp.task('jade', function() {
//     gulp.src('./src/*.jade').pipe(jade()).pipe(gulp.dest('./dst/'));
// });
// 
// gulp.task('coffee', function() {
//     gulp.src('./src/*.coffee').pipe(coffee()).pipe(gulp.dest('./dst/'));
// });

gulp.task('sass', function() {
    gulp.src('./*.sass').pipe(sass()).pipe(gulp.dest('./'));
});

