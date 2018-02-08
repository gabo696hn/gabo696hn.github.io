const title = 'Welcome';
const paragraphs = [];
paragraphs.push('Greetings, my name is Gabriel and I’m a systems engineer passionate about data analysis and web application development.');
paragraphs.push('I’ve worked with the computational tool R and the KDD methodology. I’m currently studying other tools such as python and svg charts, intending to amplify my possibilities.');
paragraphs.push('I’m also studying the languages associated with web, since it seems to me that currently is the best way to present information.');
// console.log(paragraphs);
const imgsrc = [];
imgsrc.push('img/home/1.svg');
imgsrc.push('img/home/2.svg');
imgsrc.push('img/home/3.svg');
// console.log(imgsrc);
const descriptions = [];
descriptions.push('this is the img 1');
descriptions.push('this is the img 2');
descriptions.push('this is the img 3');
const images = [];

for (let index = 0; index < imgsrc.length; index++) {
    images.push({
        src: imgsrc[index],
        desc: descriptions[index]
    })
}

const imagery = {
    descriptions: descriptions,
    src: imgsrc
};

const subsection = {
    title: title,
    paragraphs: paragraphs,
    imagery: images
};

//console.log(subsection.imagery);

const welcome = JSON.stringify(subsection);

console.log(welcome);










var fs = require('fs');
fs.writeFile('js/data.json', JSON.stringify(subsection, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});