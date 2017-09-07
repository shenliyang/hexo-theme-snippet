(function() {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less');


    // CSS预处理
    gulp.task('less-task', function() {
        return gulp.src('./source/css/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./source/css/'))
    });

    // 默认执行的任务
    gulp.task('default',['less-task'])

})();

