app.controller('MainController', ['$scope', '$location', '$cookies', function($scope, $location, $cookies) {
  $scope.brand = 'Gabo HN';
  $scope.logo = 'img/logo.svg';
  $scope.creation = '2018';
  $scope.creator = 'Gabriel Hernández Naveda';
  $scope.sections = {
    en: [
      'Home',
      'Data Analysis',
      'Web Development',
      'Contact'
    ],
    es: [
      'Inicio',
      'Análisis de Datos',
      'Desarrollo Web',
      'Contacto'
    ],
    shortcuts: [
      '',
      'dataanalysis',
      'webdevelopment',
      'contact'
    ]
  };
  $scope.isNavCollapsed = true;
  $scope.collapseMenu = function() {
    $scope.isNavCollapsed = true;
  };
  
  // carousel
  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  
  //langModel
  if ($cookies.get('sessionLang') === undefined) {
    $cookies.put('sessionLang','en');
    $scope.sLang = 'en';
  } else {
    $scope.sLang = $cookies.get('sessionLang');
  }
  $scope.changeLanguage = function (language) {
    $scope.sLang = language;
    $cookies.put('sessionLang',language);
  };
  
  $scope.map = function(route){
    return $location.path() == route;
  };
}]);
