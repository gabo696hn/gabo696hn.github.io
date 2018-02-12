app.controller('MainController', ['$scope', function($scope) {
  $scope.brand = 'Gabo HN';
  $scope.logo = 'img/logo.svg';
  $scope.creation = '2018';
  $scope.creator = 'Gabriel Hernández Naveda';
  $scope.sections = data['en'];
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
  
  //langModel
  $scope.changeLanguage = function (language) {
    $scope.sections = data[language];
  };
}]);
