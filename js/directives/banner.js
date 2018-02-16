app.directive('banner', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      }, 
      templateUrl: 'js/directives/banner.html'
    };
  });