(function () {
  'use strict';

  angular
    .module('app')
    .controller("MainController", MainController);

  MainController.$inject = [];

  function MainController () {
    var vm = this;
    var pokemon = {
      image_uri:  "https://i.imgur.com/Y6Nie6i.png",
      about:      "pokemon battle simulation game: a simple game where you get to choose a pokemon and choose attack like the original gameboy game.",
      name:       "Pokemon Battle",
      tech_used:  ["Html 5", "Css 3", "Javascript"],
      link:       "https://banando.github.io/pokemon",
      color:      "#629D03"
    };
    var hat = {
      image_uri:  "https://i.imgur.com/69Q3mUH.png",
      about:      "Real time location of food trucks nearby",
      name:       "Hungry as Truck",
      tech_used:  ["Node.js", "Express", "Mongo"],
      link:       "https://quiet-savannah-8403.herokuapp.com/",
      color:      "#C0392B"
    };
    var openGym = {
      image_uri:  "https://i.imgur.com/RCYfPlu.png",
      about:      "user generated info for basketball courts nearby",
      name:       "Open Gym",
      tech_used:  ["Html 5", "Css 3", "Javascript"],
      link:       "https://protected-dusk-8947.herokuapp.com",
      color:      "#C2904C"
    };
    var top5 = {
      image_uri:  "https://i.imgur.com/tbccbhQ.png",
      about:      "lists of top 5 food in all category",
      name:       "Top 5",
      tech_used:  ["Ruby on Rails", "Postgresql", "Javascript"],
      link:       "https://calm-scrubland-2209.herokuapp.com",
      color:      "#595959"
    };
    vm.projects = [pokemon, top5, hat, openGym];
    vm.project = pokemon;

    vm.selectProject = function (i) {
      event.preventDefault();
      vm.project = vm.projects[i];
    }
  }

})();
