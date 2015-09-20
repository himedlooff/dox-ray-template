var autoprefixer =  require('gulp-autoprefixer');
var doxray =        require('doxray');
var gulp =          require('gulp');
var less =          require('gulp-less');
var path =          require('path');
var watch =         require('gulp-watch');

gulp.task('default', ['doxray']);

gulp.task('build', ['less'], function() {
    return gulp.src(['src/*', '!src/styles'])
    .pipe(gulp.dest('template'));
});

gulp.task('docs', ['build', 'doxray'], function() {
    return gulp.src('template/*')
    .pipe(gulp.dest('docs'));
});

gulp.task('less', function() {
    return gulp.src('src/styles/doxray-template.less')
    .pipe(less())
    .on('error', function (err) { console.log(err.message); })
    // .pipe(autoprefixer({
    //  browsers: ['last 2 versions'],
    //  cascade: false
    // }))
    .pipe(gulp.dest('src'));
});

gulp.task('doxray', function() {
    doxray([
            'src/styles/doxray-template.less',
            'src/styles/doxray-variables.less',
            'src/styles/doxray-title.less',
            'src/styles/doxray-docs.less'
        ], {
        jsFile: 'docs/doxray-parsed-data.js',
        logging: true
    });
});

gulp.task('watch', function() {
    gulp.watch([
        'src/index.html',
        'src/doxray-template.js',
        'src/styles/*.less'
    ], ['docs']);
});
