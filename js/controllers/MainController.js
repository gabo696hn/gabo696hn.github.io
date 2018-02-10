app.controller('MainController', ['$scope', function($scope) {
  $scope.brand = 'Gabo HN';
  $scope.logo = 'img/logo.svg';
  $scope.creation = '2018';
  $scope.creator = 'Gabriel Hernández Naveda';
  $scope.sections = sections;
  $scope.currentSection = 0;
  $scope.currentSubsection = 0;
  $scope.changeSection = function(index) {
    $scope.currentSection = index;
    $scope.currentSubsection = 0;
    $scope.isNavCollapsed = true;
  };
  $scope.changeSubsection = function(index) {
    $scope.currentSubsection = index;
  };
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
  
  // carousel
  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

}]);
