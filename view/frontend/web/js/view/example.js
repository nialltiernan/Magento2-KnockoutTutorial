define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    return Component.extend({

        initialize() {
            // console.log('initialize()');
            this._super();
            this.firstName = ko.observable("John");
            this.lastName = ko.observable("Doe");
        },

        capitalizeLastName() {
            this.lastName(this.lastName().toUpperCase());
        }
    });
});