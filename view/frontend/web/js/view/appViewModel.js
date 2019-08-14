define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    return Component.extend({

        initialize() {
            this._super();
            this.firstName = ko.observable(this.firstName);
            this.lastName = ko.observable(this.lastName);
        },

        capitalizeLastName() {
            this.lastName(this.lastName().toUpperCase());
        }
    });
});