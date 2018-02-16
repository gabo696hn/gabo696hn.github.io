app.controller('DAController', ['$scope', function($scope) {
    $scope.banner = 'img/da.svg';
    $scope.section = {
        en: {
            title: 'Data Analysis',
            subsections: [
                {
                    title: 'Exploratory analysis',
                    short: 'Exploration',
                    paragraphs: [
                        'Identifying objects and attribute types allows us to treat them correctly. It may seem elementary, but it turns necessary when we face large amounts of attributes. We wouldn\'t apply a measure of central tendency to a date or graph a price bar plot.',
                        'Central tendency and dispersion, along with graphs that illustrate them, allow us to know the distribution of attribute values, correlation between several attributes and possible outliers.'
                    ],
                    slides: [
                        {
                            id: 0,
                            image: 'img/da/boxplot.svg',
                            text: 'Age box plot'
                        },
                        {
                            id: 1,
                            image: 'img/da/barplot.svg',
                            text: 'Survival bar plot'
                        }
                    ]                
                },
                {
                    title: 'Preprocessing',
                    short: 'Preprocessing',
                    paragraphs: [
                        'Real world databases contain errors, missing values ​​and spurious values. It\'s necessary to apply techniques to clean them. Data is often distributed in different objects or sources and it\'s necessary to integrate them in a consistent way to avoid the appearance of additional errors.',
                        'In general, data sources are not optimized for the analysis. It is necessary to reduce the computational cost through reduction techniques and to mold data through transformation techniques so they are prepared for the analysis.'
                    ],
                    table: { 
                        columns: [ 'Id', 'Survived', 'Pclass', 'Name', 'Sex', 'Age' ],
                        index: [ 0, 1, 2, 3, 4 ],
                        data: [ 
                            [ 1, 0, 3, 'Braund, Mr. Owen Harris', 'male', 22 ],
                            [ 2, 1, 1, 'Cumings, Mrs. John Bradley (Florence Briggs Thayer)', 'female', 38 ],
                            [ 3, 1, 3, 'Heikkinen, Miss. Laina', 'female', 26 ],
                            [ 4, 1, 1, 'Futrelle, Mrs. Jacques Heath (Lily May Peel)', 'female', 35 ],
                            [ 5, 0, 3, 'Allen, Mr. William Henry', 'male', 35 ] 
                        ] 
                    }
                },
                {
                    title: 'Data mining',
                    short: 'Mining',
                    paragraphs: [
                        'Various data mining techniques allow extracting information in the form of mathematical models. Classification techniques, which allow predicting an output attribute from other input attributes; Association techniques, which allow finding logical patterns of objects’ behavior; grouping techniques that allow finding similarities and dissimilarities between groups of objects; and outlier detection techniques ​​that allow to find objects with exceptional behaviors.'
                    ]
                },
                {
                    title: 'Pattern evaluation',
                    short: 'Evaluation',
                    paragraphs: [
                        'Data mining yields patterns that are interesting from a technical point of view, that is, they have high interest measures; as support, trust or certainty, among others. However, not all the patterns found are usually interesting for the organization.',
                        'The evaluation of patterns is the stage of selecting the patterns that may represent some benefit for the factors interested in the study, according to their perspectives or expectations.'
                    ]
                },
                {
                    title: 'Knowledge presentation',
                    short: 'Presentation',
                    paragraphs: [
                        'It becomes necessary to choose the appropriate representation techniques so that the interested factors can assimilate the results of the analysis, such as tables or graphs where models are exposed in a comprehensible way.'
                    ]
                }
            ]
        },
        es: {
            title: 'Análisis de Datos',
            subsections: [
                {
                    title: 'Análisis exploratorio',
                    short: 'Exploración',
                    paragraphs: [
                        'Identificar los objetos y tipos de atributos nos permite tratarlos correctamente. Puede parecer elemental, pero se torna necesario cuando nos enfrentamos a grandes cantidades de atributos. No aplicaríamos una medida de tendencia central a una fecha ni haríamos un gráfico de barras de un precio.',
                        'La tendencia central y la dispersión junto con graficas que las ilustren nos permiten conocer la distribución de los valores de los atributos, la correlación entre varios atributos y posibles valores atípicos.'
                    ],
                    slides: [
                        {
                            id: 0,
                            'image': 'img/da/boxplot.svg',
                            'text': 'Gráfico de caja de la edad'
                        },
                        {
                            id: 1,
                            'image': 'img/da/barplot.svg',
                            'text': 'Gráfico de barras de la supervivencia'
                        }
                    ]
                },
                {
                    title: 'Preprocesamiento',
                    short: 'Preprocesamiento',
                    paragraphs: [
                        'Las bases de datos en el mundo real contienen errores, valores faltantes y valores espurios, por lo que es necesario aplicar técnicas para limpiarlos. Los datos a menudo se distribuyen en diferentes objetos o fuentes y es necesario integrarlos de manera consistente para evitar la aparición de errores adicionales.',
                        'En general, las fuentes de datos no están optimizadas para el análisis. Es necesario reducir el costo computacional mediante técnicas de reducción y moldear datos a través de técnicas de transformación para que estén preparados para el análisis.'
                    ],
                    table: { 
                        columns: [ 'Id', 'Survived', 'Pclass', 'Name', 'Sex', 'Age' ],
                        index: [ 0, 1, 2, 3, 4 ],
                        data: [ 
                            [ 1, 0, 3, 'Braund, Mr. Owen Harris', 'male', 22 ],
                            [ 2, 1, 1, 'Cumings, Mrs. John Bradley (Florence Briggs Thayer)', 'female', 38 ],
                            [ 3, 1, 3, 'Heikkinen, Miss. Laina', 'female', 26 ],
                            [ 4, 1, 1, 'Futrelle, Mrs. Jacques Heath (Lily May Peel)', 'female', 35 ],
                            [ 5, 0, 3, 'Allen, Mr. William Henry', 'male', 35 ] 
                        ] 
                    }
                },
                {
                    title: 'Minería de datos',
                    short: 'Minería',
                    paragraphs: [
                        'Diversas técnicas de minería de datos permiten extraer información en forma de modelos matemáticos. Técnicas de clasificación, que permiten predecir un atributo de salida desde otros atributos de entrada; Técnicas de asociación, que permiten encontrar patrones lógicos del comportamiento de los objetos; técnicas de agrupamiento que permiten encontrar similitudes y diferencias entre grupos de objetos; y técnicas de detección de valores atípicos que permiten encontrar objetos con comportamientos excepcionales.'
                    ]
                },
                {
                    title: 'Evaluación de patrones',
                    short: 'Evaluación',
                    paragraphs: [
                        'La minería de datos produce patrones que son interesantes desde un punto de vista técnico, es decir, tienen altas medidas de interés; como el soporte, la confianza o la certeza, entre otros. Sin embargo, no todos los patrones encontrados suelen ser interesantes para la organización.',
                        'La evaluación de patrones es la etapa de selección de patrones que pueden representar algún beneficio para los factores interesados en el estudio, de acuerdo con sus perspectivas o expectativas.'
                    ]
                },
                {
                    title: 'Presentación del conocimiento',
                    short: 'Presentación',
                    paragraphs: [
                        'Es necesario elegir las técnicas de representación adecuadas para que los factores interesados puedan asimilar los resultados del análisis, como tablas o gráficos donde los modelos se expongan de manera comprensible.'
                    ]
                }
            ]
        }
    }
}]);

