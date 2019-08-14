define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({

        defaults: {
            taskList: [
                {title: 'Wake up', isDone: true},
                {title: 'Snooze alarm', isDone: false},
                {title: 'Eat breakfast', isDone: false},
                {title: 'Go to work', isDone: false}
            ]
        },

        initialize() {
            this._super();
            this.tasks = ko.observableArray([]);
            this.newTaskText = ko.observable();
            this.incompleteTasks = ko.computed(function () {
                return ko.utils.arrayFilter(this.tasks(), function (task) {
                    return !task.isDone();
                })
            }, this);
            this.loadTasks();
        },

        getNewTask(data) {
            let self = this;
            self.title = ko.observable(data.title);
            self.isDone = ko.observable(data.isDone);
            return { title: self.title, isDone: self.isDone };
        },

        addTask() {
            this.tasks.push(this.getNewTask({title: this.newTaskText()}));
            this.newTaskText('');
        },

        removeTask(task) {
            this.tasks.remove(task);
        },

        loadTasks() {
            let tasks = [];
            for (let i = 0; i < this.taskList.length; i++) {
                tasks.push(this.getNewTask(this.taskList[i]))
            }
            this.tasks(tasks);
        }
    });
});
