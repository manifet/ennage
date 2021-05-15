#  Webpack config
./build
### webpack.base.conf.js
base config for export in prod/dev
### webpack.dev.conf.js
dev config for development mode (supports souremaps and webpack-dev-server)
### webpack.build.conf.js
build config for production mode
### Start
    npm init
    npm install
    npm run dev/build
# Images
### Png sprites
!(https://github.com/manifetko/ennage/raw/master/src/images/png_src/css/Screenshot_1.png "CSS of png sprites")
!(https://github.com/manifetko/ennage/raw/master/src/images/png_src/css/Screenshot_2.png "CSS of png sprites")
all sourсe images in ./src/images/png_src/*.png
# Pug
### Frequently used blocks
./src/pug/includes
frequently used blocks code for the main pages
### Pages
./src/pug/pages
сode for each page
# Styles
### Frequently used blocks
./src/scss/imports
frequently used block styles without utils for the main page styles
### Page styles
./src/scss/pages
there can be both code for a separate page, for frequently used blocks from ./src/scss/imports and also main.scss for all pages.
need to import vars.scss and mixing.scss
### Utils
./src/scss/utils
separation from the main code of fonts and libraries, as well as useful tools for writing code

    
    