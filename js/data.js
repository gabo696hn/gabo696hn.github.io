let title = 'Welcome';

let paragraph = 'Greetings, my name is Gabriel and I’m a systems engineer passionate about data analysis and web application development.';
let paragraphs = [];
paragraphs.push(paragraph);
paragraphs.push('I’ve worked with the computational tool R and the KDD methodology. I’m currently studying other tools such as python and svg charts, intending to amplify my possibilities.');
paragraphs.push('I’m also studying the languages associated with web, since it seems to me that currently is the best way to present information.');

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
sectios[0].subsections[0].slides.pop();

section = {
    title: 'Data Analysis',
    banner: 'img/da.svg',
    subsections: [
        {
            title: 'Exploratory analysis',
            paragraphs: [
                'Identifying objects and attribute types allows us to treat them correctly. It may seem elementary, but it turns necessary when we face large amounts of attributes. We wouldn’t apply a measure of central tendency to a date or graph a price bar chart.',
                'Central tendency and the dispersion along with graphs that illustrate them allow us to know the distribution of attribute values, correlation between several attributes and possible outliers.'
            ],
            slides: [
                {
                    id: 0,
                    image: 'img/da/boxplot.svg',
                    text: 'boxplot'
                },
                {
                    id: 1,
                    image: 'img/da/barplot.svg',
                    text: 'barplot'
                }
            ]                
        },
        {
            title: 'Preprocessing',
            paragraphs: [
                'Real world databases contain errors, missing values ​​and spurious values, so it’s necessary to apply techniques to clean them. Data is often distributed in different objects or sources and it is necessary to integrate them in a consistent way to avoid the appearance of additional errors.',
                'In general, data sources are not optimized for the analysis. It is necessary to reduce the computational cost through reduction techniques and to mold data through transformation techniques so they are prepared for the analysis.'
            ],
            slides: []
        },
        {
            title: 'Data mining',
            paragraphs: [
                'Various data mining techniques allow extracting information in the form of mathematical models. Classification techniques, which allow predicting an output attribute from other input attributes; Association techniques, which allow finding logical patterns of objects’ behavior; grouping techniques that allow finding similarities and dissimilarities between groups of objects; and outlier detection techniques ​​that allow to find objects with exceptional behaviors.'
            ],
            slides: []
        },
        {
            title: 'Pattern evaluation',
            paragraphs: [
                'Data mining yields patterns that are interesting from a technical point of view, that is, they have high interest measures; as support, trust or certainty, among others. However, not all the patterns found are usually interesting for the organization.',
                'The evaluation of patterns is the stage of selecting the patterns that may represent some benefit for the factors interested in the study, according to their perspectives or expectations.'
            ],
            slides: []
        },
        {
            title: 'Knowledge presentation',
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
            paragraphs: [
                'Paragraph 1.',
                'Paragraph 2.'
            ],
            slides: []
        },
        {
            title: 'Back end',
            paragraphs: [
                'Paragraph.'
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
            paragraphs: [
                'Paragraph 1 <b>hola</b>.',
                'Paragraph 2.'
            ],
            slides: [
                {
                    id: 0,
                    image: 'http://gabosapp.pythonanywhere.com/',
                    text: 'contact app'
                }
            ]
        }
    ]
}
sections.push(section);

// console.log(subsection.title);

// let welcome = JSON.stringify(subsection);

console.log(sections[1].subsections[0].slides.length);










/*var fs = require('fs');
fs.writeFile('js/data.json', JSON.stringify(subsection, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});*/