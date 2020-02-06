var cmsPath = 'W:/domains/localhost/';
module.exports = {
    path: {
        build: { // Build files
            html: 'dist/',
            style: 'dist/css',
            img: 'dist/images',
            imgFavicons: 'dist/images/favicons',
            js: 'dist/js',
            fonts: 'dist/fonts',
            zip: 'zip',
            //Replace in cms template
            cms_style: cmsPath + '/css',
            // img: cmsPath + '/images',
            // js: cmsPath + '/js',
            // fonts: cmsPath + '/fonts',
            //imgFavicons: cmsPath + '/images/favicons'
        },
        src: { // Source files
            pug: 'src/*.pug',
            style: 'src/base/styles.sass',
            img: 'src/images/**/*.+(png|jpg|jpeg|gif)',
            imgComp: 'src/components/**/*.+(png|jpg|jpeg|gif)',
            pngIcons: 'src/images/icons/png/*.png',
            svgIcons: 'src/images/icons/svg/*.svg',
            js: 'src/**/*.js',
            fonts: 'src/fonts/*',
            favicon_lg: 'src/images/favicon-sm.png',
            favicon_sm: 'src/images/favicon-lg.png'
        },
        watch: { // Watch files
            json: 'src/base/data/*.json',
            pug: 'src/**/*.pug',
            style: 'src/**/*'
        },
        clean: {
            all: './dist'
        }
    }
};
