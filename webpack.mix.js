let mix = require('laravel-mix');
let path = require('path');

mix.alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
});

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js').vue();

mix.sass('resources/sass/field.scss', 'css');

mix.copy('resources/Editor/editor-styles.css', 'dist/css')
