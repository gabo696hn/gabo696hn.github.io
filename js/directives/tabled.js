app.directive('tabled', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/tabled.html'
    };
  });