(function () {
  'use strict';

  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = [];

  function MainController () {
    var vm = this;
    var pokemon = {
      image_uri:  "",
      about:      "pokemon battle simulation game",
      name:       "Pokemon Battle",
      tech_used:  ["Html 5", "Css 3", "Javascript"]
    };
    var hat = {
      image_uri:  "",
      about:      "Real time location of food trucks nearby",
      name:       "Hungry as Truck",
      tech_used:  ["Node.js", "Express", "Mongo"]
    };
    var openGym = {
      image_uri:  "",
      about:      "user generated info for basketball courts nearby",
      name:       "Open Gym",
      tech_used:  ["Html 5", "Css 3", "Javascript"]
    };
    var top5 = {
      image_uri:  "",
      about:      "lists of top 5 food in all category",
      name:       "Top 5",
      tech_used:  ["Ruby on Rails", "Postgresql", "Javascript"]
    };
    vm.projects = [pokemon, top5, hat, openGym];
    vm.message = "Hello World!";
    vm.project = pokemon;
    vm.selectProject = function (i) {
      event.preventDefault();
      vm.project = vm.projects[i];
    }
  }

})();
