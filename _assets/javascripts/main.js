var WAFFLE_ADDRESS = '/preview/data/waffles/basic-indicators.csv';
var CODEPEN_WAFFLE_ADDRESS = 'https://dl.dropboxusercontent.com/u/4933279/csv/basic-indicators.csv';

function viewOnCodepen(TITLE, JS, HTML, CSS) {

    var BASE_URL = "http://static.gapminderdev.org/vizabi/" + VIZABI_VERSION + "/dist/";

    var HTML = HTML || "<div id='placeholder'></div>";

    var CSS = CSS || "body{font-family:Arial,sans-serif;text-align:center;background:#ffffff}h1{color:#ccc}#placeholder{position:relative;display:block;margin:0 auto;width:600px;height:400px;border:1px solid #ccc}";

    var data = {
        title: "VIZABI EXAMPLE - " + TITLE,
        html: HTML,
        css: CSS,
        js: JS,
        js_external: "https://cdnjs.cloudflare.com/ajax/libs/d3/4.5.0/d3.min.js;" + BASE_URL + "vizabi.js",
        css_external: BASE_URL + "vizabi.css"
    };

    var JSONstring = JSON.stringify(data).replace(/"/g, "&​quot;").replace(/'/g, "&apos;");

    var form = document.createElement('FORM');
    form.name = 'CodepenForm';
    form.id = 'CodepenForm';
    form.method = 'POST';
    form.action = 'http://codepen.io/pen/define';
    form.target = '_blank';

    field = document.createElement('INPUT');
    field.type = 'HIDDEN';
    field.name = 'data';
    field.value = JSONstring;
    form.appendChild(field);
    document.body.appendChild(form);
    form.submit();
    document.getElementById("CodepenForm").remove();

}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {

    var body = document.body;
    var menuBtn = document.getElementById('mobile-menu-btn');

    body.addEventListener('click', function (evt) {
        if (hasClass(evt.target, 'mobile-menu-btn')) {
            return false;
        }
        if (hasClass(body, 'menu-open')) {
            removeClass(body, 'menu-open');
        }
    });

    menuBtn.addEventListener('click', function () {
        addClass(body, 'menu-open');
    });

});
