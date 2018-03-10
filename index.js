(function() {
    "use strict";

    require('./sass/style.scss');

    window.$ = window.jQuery = require('jquery');
    var angular = require('angular');

    // angular init
    angular.module("app.core", [
        "app.services",
        "app.directives"
    ]);
    angular.module("app.services", []);
    angular.module("app.directives", ["app.services"]);
})();