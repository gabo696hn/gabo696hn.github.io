app.controller('HomeController', ['$scope', function($scope) {
    $scope.banner = 'img/home.svg';
    $scope.section = {
        en: {
            title: 'Home',
            subsections: [
                {
                    title: 'Welcome',
                    paragraphs: [
                        'Greetings, my name is Gabriel and I\'m a systems engineer passionate about data analysis and web application development.',
                        'I\'ve worked with the computational tool https://www.r-project.org/ and the KDD methodology. I\'m currently studying other tools such as https://www.python.org/ and svg charts, intending to amplify my possibilities.',
                        'I\'m also studying languages associated with the web, since it seems to me that currently is the best way to present information.'
                    ]
                }
            ]
        },
        es: {
            title: 'Inicio',
            subsections: [
                {
                    title: 'Bienvenido',
                    paragraphs: [
                        'Saludos, mi nombre es Gabriel y soy un ingeniero de sistemas apasionado por el análisis de datos y el desarrollo de aplicaciones web.',
                        'He trabajado con la herramienta computacional https://www.r-project.org/ y la metodología KDD. Actualmente me encuentro estudiando otras herramientas como https://www.python.org/ y graficas svg, con la intención de amplificar mis posibilidades.',
                        'También me encuentro estudiando los lenguajes asociados con la web, ya que me parece que actualmente es la mejor forma de presentar información.'
                    ]
                }
            ]
        }
    }
}]);