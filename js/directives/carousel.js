app.directive('carousel', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/carousel.html'
    };
  });