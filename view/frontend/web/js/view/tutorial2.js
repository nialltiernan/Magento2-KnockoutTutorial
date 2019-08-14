define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';

    return Component.extend({

        defaults: {
            availableNames: ['Niall', 'Nino', 'Patrick', 'Lennart'],
            availableMeals: [
                {mealName: "Standard (sandwich)", price: 0},
                {mealName: "Premium (lobster)", price: 34.95},
                {mealName: "Ultimate (whole zebra)", price: 290}
            ],
        },

        initialize() {
            this._super();
            this.seats = ko.observableArray([
                this.getSeatReservation('Alex', this.availableMeals[0]),
                this.getSeatReservation('Joe', this.availableMeals[1])
            ]);
            this.totalSurcharge = ko.computed(function () {
                let self = this;
                let total = 0;
                for (let i = 0; i < self.seats().length; i++)
                    total += self.seats()[i].meal().price;
                console.log(total);
                return total;
            }, this);
        },

        addSeat() {
            this.seats.push(this.getSeatReservation(this.getRandomName(), this.availableMeals[0]));
        },

        removeSeat(seat) {
            this.seats.remove(seat);
        },

        getSeatReservation(name, initialMeal) {
            let self = this;
            self.name = name;
            self.meal = ko.observable(initialMeal);
            self.formattedPrice = ko.computed(function () {
                var price = self.meal().price;
                return price ? "€" + price.toFixed(2) : "None";
            });
            return {name: self.name, meal: self.meal, formattedPrice: self.formattedPrice};
        },

        getRandomName() {
            return this.availableNames[Math.floor(Math.random() * this.availableNames.length)]
        },
    });
});
