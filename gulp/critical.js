var path = require('./path/path.js');

module.exports = function (done) {
    $.gulp.task('critical:build', function () {
        return $.gulp.src(path.path.build.html + '*.html')
            .pipe($.plugins.plumber())
            .pipe($.plugins.critical.stream({
                base: 'dist/',
                inline: true,
                ignore: ['@font-face','backdrop-filter','-webkit-backdrop-filter',/url\(/],
                css: [path.path.build.style + '/main.min.css'],
                dimensions: [{
                    height: 667,
                    width: 375
                }, {
                    height: 656,
                    width: 1366
                }],
                extract: true
            }))
            .pipe($.gulp.dest(path.path.build.html));
        done();
    });
};
