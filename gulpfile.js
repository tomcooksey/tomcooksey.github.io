var gulp = require('gulp'),
    watch = require('gulp-watch'),
    watchLess = require('gulp-watch-less'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
 
gulp.task('watch-less', function () {

    return watch('src/less/**/*.less', function() {
        console.log('Less Change detected');
        gulp.src('src/less/**/*.less')
            .pipe(less({plugins: [cleanCSSPlugin]}))
            .pipe(gulp.dest('./public/css'));
    });

});