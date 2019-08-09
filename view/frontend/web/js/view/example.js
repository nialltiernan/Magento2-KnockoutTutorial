define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    return Component.extend({

        initialize: function () {
            // console.log('initialize()');
            this._super();
            this.firstName = ko.observable("John");
            this.lastName = ko.observable("Doe");
        },

        capitalizeLastName: function () {
            this.lastName(this.lastName().toUpperCase());
        }
    });
});