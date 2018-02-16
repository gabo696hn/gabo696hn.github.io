app.directive('subsection', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/subsection.html'
    };
  });