define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';
    return Component.extend({


        availableNames: ['Niall', 'Nino', 'Patrick', 'Lennart'],
        availableMeals: [
            { mealName: "Standard (sandwich)", price: 0 },
            { mealName: "Premium (lobster)", price: 34.95 },
            { mealName: "Ultimate (whole zebra)", price: 290 }
        ],

        initialize() {
            this._super();
            this.seats = ko.observableArray([
                    this.getSeatReservation('Alex', this.availableMeals[0]),
                    this.getSeatReservation('Joe', this.availableMeals[1])
            ]);
        },

        addSeat() {
            this.seats.push(this.getSeatReservation(this.getRandomName(), this.availableMeals[0]));
        },

        getSeatReservation(name, initialMeal) {
            return { name: name, meal:ko.observable(initialMeal) };
        },

        getRandomName() {
            return this.availableNames[Math.floor(Math.random()*this.availableNames.length)]
        },

        getBillingAgreements() {
            return ['abc', 'def'];
        },

    });
});