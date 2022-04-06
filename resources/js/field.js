Nova.booting((app, store) => {
    // app.config.devtools = true;

    // app.filter('striphtml', function (value) {
    //     var div = document.createElement("div");
    //     div.innerHTML = value;
    //     var text = div.textContent || div.innerText || "";
    //     return text;
    // });

    app.component('index-nova-translatable', require('./components/IndexField'))
    app.component('detail-nova-translatable', require('./components/DetailField'))
    app.component('form-nova-translatable', require('./components/FormField'))

    app.component('index-nova-translatable-slug-field', require('./components/Slug/IndexField'))
    app.component('detail-nova-translatable-slug-field', require('./components/Slug/DetailField'))
    app.component('form-nova-translatable-slug-field', require('./components/Slug/FormField'))

    app.component('index-nova-translatable-code-field', require('./components/Code/IndexField'))
    app.component('detail-nova-translatable-code-field', require('./components/Code/DetailField'))
    app.component('form-nova-translatable-code-field', require('./components/Code/FormField'))

    app.component('index-nova-translatable-grapes-field', require('./components/Grapes/IndexField'))
    app.component('detail-nova-translatable-grapes-field', require('./components/Grapes/DetailField'))
    app.component('form-nova-translatable-grapes-field', require('./components/Grapes/FormField'))
})
