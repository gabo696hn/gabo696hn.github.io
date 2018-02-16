app.controller('WDController', ['$scope', function($scope) {
    $scope.banner = 'img/wd.svg';
    $scope.section = {
        en: {
            title: 'Web Development',
            subsections: [
                {
                    title: 'Front end',
                    paragraphs: [
                        'This very page is running entirely on the front end, meaning that is running entirely on your device. It was made using tools like AngularJS, UI Bootstrap and Bootstrap; along with plain HTML, CSS and JavaScript.'
                    ]
                },
                {
                    title: 'Back end',
                    paragraphs: [
                        'Some applications require updating and retrieving information from databases or using authenticated services, that’s when the back end comes in. Tools running on another machine will verify if you have permission to access or modify certain data.'
                    ]
                }
            ]
        },
        es: {
            title: 'Desarrollo Web',
            subsections: [
                {
                    title: 'Front end',
                    paragraphs: [
                        'Esta misma página se ejecuta completamente en el front end, lo que significa que se ejecuta completamente en tu dispositivo. Fue hecho usando herramientas como AngularJS, UI Bootstrap y Bootstrap; junto con HTML, CSS y JavaScript puro.'
                    ]
                },
                {
                    title: 'Back end',
                    paragraphs: [
                        'Algunas aplicaciones requieren la actualización y recuperación de información de bases de datos o el uso de servicios autenticados, en donde entra el back end. Las herramientas que se ejecutan en un servidor que verificará si tiene permiso para acceder o modificar ciertos datos.'
                    ]
                }
            ]
        }
    }
}]);


