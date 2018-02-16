app.controller('ContactController', ['$scope', function($scope) {
    $scope.banner = 'img/contact.svg';
    $scope.data = {
        en: {
            mail: 'Your email',
            message: 'Your message',
            send: 'Send'
        },
        es: {
            mail: 'Tu correo electrónico',
            message: 'Tu mensaje',
            send: 'Enviar'
        }
    }
}]);

