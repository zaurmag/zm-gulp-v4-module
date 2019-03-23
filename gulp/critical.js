var path = require('./path/path.js');

module.exports = function (done) {
    $.gulp.task('critical:build', function () {
        return $.gulp.src(path.path.build.html + '*.html')
            .pipe($.plugins.plumber())
            .pipe($.plugins.critical.stream({
                base: 'dist/',
                inline: true,
                css: [path.path.build.style + '/styles.min.css'],
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

        // $.plugins.critical.generate({
        //     inline: true,
        //     base: 'dist/',
        //     src: 'index.html',
        //     dest: 'index.html',
        //     minify: true,
        //     dimensions: [{
        //         height: 812,
        //         width: 375
        //     }, {
        //         height: 800,
        //         width: 1280
        //     }]
        // });

        // var pages = ['index', 'privacy', 'thank-you'];
        //
        // for (var i = 0; i < pages.length; i++) {
        //     critical.generate({
        //         inline: true,
        //         base: 'dist/',
        //         src: pages[i] + '.html',
        //         dest: pages[i] + '.html',
        //         minify: true,
        //         dimensions: [{
        //             height: 812,
        //             width: 375
        //         }, {
        //             height: 800,
        //             width: 1280
        //         }]
        //     });
        // }
        done();
    });
};