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
![CSS of png sprites](https://github.com/manifetko/ennage/raw/master/src/images/png_src/css/Screenshot_1.png)  <br/>
![CSS of png sprites](https://github.com/manifetko/ennage/raw/master/src/images/png_src/css/Screenshot_2.png)  <br/> 
all sourсe images in ./src/images/png_src/*.png
# Scripts
### Main scripts
./src/js/main  <br/> 
libraries or scripts that are used on each page
### Page scripts
./src/js/pages  <br/> 
scripts that are used on pages
### Utils
./src/js/utils.js  <br/> 
export functions
# Pug
### Frequently used blocks
./src/pug/includes  <br/> 
frequently used blocks code for the main pages
### Pages
./src/pug/pages  <br/> 
сode for each page
# Styles
### Frequently used blocks
./src/scss/imports  <br/> 
frequently used block styles without utils for the main page styles
### Page styles
./src/scss/pages  <br/> 
there can be code for a separate page and main.css and also code imported from ./src/css/imports <br/> 
need to import vars.scss and mixins.scss
### Utils
./src/scss/utils  <br/> 
separation from the main code of fonts and libraries, as well as useful tools for writing code

    
    