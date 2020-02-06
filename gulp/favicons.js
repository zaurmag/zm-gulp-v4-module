var path = require('./path/path.js');

module.exports = function (done) {
    $.gulp.task('favicons', function() {
        return $.gulp.src(path.path.src.favicon)
            .pipe($.plugins.plumber())
            .pipe($.plugins.favicons({
                html: 'favicons.html',
                pipeHTML: true,
                path: './images/favicons/',
                replace: true,
                icons: {
                    appleIcon: true,
                    favicons: false,
                    online: false,
                    appleStartup: false,
                    android: true,
                    firefox: true,
                    yandex: true,
                    windows: true,
                    coast: true
                }
            }))
            .pipe($.gulp.dest(path.path.build.imgFavicons));
        done();
    });

    $.gulp.task('favicons:logo', function() {
        return $.gulp.src(path.path.src.faviconLogo)
            .pipe($.plugins.plumber())
            .pipe($.plugins.favicons({
                html: 'favicons-logo.html',
                pipeHTML: true,
                path: './images/favicons/',
                replace: true,
                icons: {
                    appleIcon: false,
                    favicons: true,
                    online: false,
                    appleStartup: false,
                    android: false,
                    firefox: false,
                    yandex: false,
                    windows: false,
                    coast: false
                }
            }))
            .pipe($.gulp.dest(path.path.build.imgFavicons));
        done();
    });
};
