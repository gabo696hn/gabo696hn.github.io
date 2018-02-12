let title = 'Welcome';
let short = 'Welcome';
let paragraph = 'Greetings, my name is Gabriel and I\'m a systems engineer passionate about data analysis and web application development.';
let paragraphs = [];
paragraphs.push(paragraph);
paragraphs.push('I\'ve worked with the computational tool https://www.r-project.org/ and the KDD methodology. I\'m currently studying other tools such as https://www.python.org/ and svg charts, intending to amplify my possibilities.');
paragraphs.push('I\'m also studying languages associated with the web, since it seems to me that currently is the best way to present information.');

let src = 'img/home/1.svg';
let description = 'this is the img 1';

let image = {
    id: 0,
    image: src,
    text: description
}

let slides = [];
slides.push(image);

let subsection = {
    title: title,
    short: short,
    paragraphs: paragraphs,
    slides: slides
};

let subsections = [];
subsections.push(subsection);

title = 'Home';
let banner = 'img/home.svg';

let section = {
    title: title,
    subsections: subsections,
    banner: banner
};

let sections = [];
sections.push(section);
sections[0].subsections[0].slides.pop();

section = {
    title: 'Data Analysis',
    banner: 'img/da.svg',
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
            slides: []
        },
        {
            title: 'Data mining',
            short: 'Mining',
            paragraphs: [
                'Various data mining techniques allow extracting information in the form of mathematical models. Classification techniques, which allow predicting an output attribute from other input attributes; Association techniques, which allow finding logical patterns of objects’ behavior; grouping techniques that allow finding similarities and dissimilarities between groups of objects; and outlier detection techniques ​​that allow to find objects with exceptional behaviors.'
            ],
            slides: []
        },
        {
            title: 'Pattern evaluation',
            short: 'Evaluation',
            paragraphs: [
                'Data mining yields patterns that are interesting from a technical point of view, that is, they have high interest measures; as support, trust or certainty, among others. However, not all the patterns found are usually interesting for the organization.',
                'The evaluation of patterns is the stage of selecting the patterns that may represent some benefit for the factors interested in the study, according to their perspectives or expectations.'
            ],
            slides: []
        },
        {
            title: 'Knowledge presentation',
            short: 'Presentation',
            paragraphs: [
                'It becomes necessary to choose the appropriate representation techniques so that the interested factors can assimilate the results of the analysis, such as tables or graphs where models are exposed in a comprehensible way.'
            ],
            slides: []
        }
    ]
}
sections.push(section);

section = {
    title: 'Web Development',
    banner: 'img/wd.svg',
    subsections: [
        {
            title: 'Front end',
            short: 'Front end',
            paragraphs: [
                'This very page is running entirely on the front end, meaning that is running entirely on your device. It was made using tools like AngularJS, UI Bootstrap and Bootstrap; along with plain HTML, CSS and JavaScript.'
            ],
            slides: []
        },
        {
            title: 'Back end',
            short: 'Back end',
            paragraphs: [
                'Some applications require updating and retrieving information from databases or using authenticated services, that’s when the back end comes in. Tools running on another machine will verify if you have permission to access or modify certain data.'
            ],
            slides: []
        }
    ]
}
sections.push(section);
section = {
    title: 'Contact',
    banner: 'img/home.svg',
    subsections: [
        {
            title: 'Contact',
            short: 'Contact',
            paragraphs: [],
            slides: []
        }
    ]
}
sections.push(section);

// console.log(subsection.title);

// console.log(sections[1].subsections[0].slides.length);

/*var fs = require('fs');
fs.writeFile('js/data.json', JSON.stringify(sections, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log('File has been created');
});*/

// is easier to modify json for another language

/*var fs = require('fs');
let rawdata = fs.readFileSync('js/data-es.json');
let sections_es = JSON.parse(rawdata);*/
//console.log(sections);
//console.log(sections_es);


sections_es = [
    {
        title: 'Inicio',
        subsections: [
            {
                title: 'Bienvenido',
                short: 'Bienvenido',
                paragraphs: [
                    'Saludos, mi nombre es Gabriel y soy un ingeniero de sistemas apasionado por el análisis de datos y el desarrollo de aplicaciones web.',
                    'He trabajado con la herramienta computacional https://www.r-project.org/ y la metodología KDD. Actualmente me encuentro estudiando otras herramientas como https://www.python.org/ y graficas svg, con la intención de amplificar mis posibilidades.',
                    'También me encuentro estudiando los lenguajes asociados con la web, ya que me parece que actualmente es la mejor forma de presentar información.'
                ],
                slides: []
            }
        ],
        banner: 'img/home.svg'
    },
    {
        title: 'Análisis de Datos',
        banner: 'img/da.svg',
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
                slides: []
            },
            {
                title: 'Minería de datos',
                short: 'Minería',
                paragraphs: [
                    'Diversas técnicas de minería de datos permiten extraer información en forma de modelos matemáticos. Técnicas de clasificación, que permiten predecir un atributo de salida desde otros atributos de entrada; Técnicas de asociación, que permiten encontrar patrones lógicos del comportamiento de los objetos; técnicas de agrupamiento que permiten encontrar similitudes y diferencias entre grupos de objetos; y técnicas de detección de valores atípicos que permiten encontrar objetos con comportamientos excepcionales.'
                ],
                slides: []
            },
            {
                title: 'Evaluación de patrones',
                short: 'Evaluación',
                paragraphs: [
                    'La minería de datos produce patrones que son interesantes desde un punto de vista técnico, es decir, tienen altas medidas de interés; como el soporte, la confianza o la certeza, entre otros. Sin embargo, no todos los patrones encontrados suelen ser interesantes para la organización.',
                    'La evaluación de patrones es la etapa de selección de patrones que pueden representar algún beneficio para los factores interesados en el estudio, de acuerdo con sus perspectivas o expectativas.'
                ],
                slides: []
            },
            {
                title: 'Presentación del conocimiento',
                short: 'Presentación',
                paragraphs: [
                    'Es necesario elegir las técnicas de representación adecuadas para que los factores interesados puedan asimilar los resultados del análisis, como tablas o gráficos donde los modelos se expongan de manera comprensible.'
                ],
                slides: []
            }
        ]
    },
    {
        title: 'Desarrollo Web',
        banner: 'img/wd.svg',
        subsections: [
            {
                title: 'Front end',
                short: 'Front end',
                paragraphs: [
                    'Esta misma página se ejecuta completamente en el front end, lo que significa que se ejecuta completamente en tu dispositivo. Fue hecho usando herramientas como AngularJS, UI Bootstrap y Bootstrap; junto con HTML, CSS y JavaScript puro.'
                ],
                slides: []
            },
            {
                title: 'Back end',
                short: 'Back end',
                paragraphs: [
                    'Algunas aplicaciones requieren la actualización y recuperación de información de bases de datos o el uso de servicios autenticados, en donde entra el back end. Las herramientas que se ejecutan en un servidor que verificará si tiene permiso para acceder o modificar ciertos datos.'
                ],
                slides: []
            }
        ]
    },
    {
        title: 'Contacto',
        banner: 'img/home.svg',
        subsections: [
            {
                title: 'Contacto',
                short: 'Contacto',
                paragraphs: [],
                slides: []
            }
        ]
    }
]


data = {
    en: sections,
    es: sections_es
};
//console.log(data['es'][0].subsections[0]);