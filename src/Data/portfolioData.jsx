import img1 from '../Assets/project2.jpg';
import img2 from '../Assets/project1.jpg';
import img3 from '../Assets/weatherapp.jpg';
import img4 from '../Assets/fizzbuzz.jpg';
import img5 from '../Assets/magazine1.jpg';
import GitHub from '@material-ui/icons/GitHub';
import { Book } from '@material-ui/icons';

const portfolioData = [
    {
        id: 1,
        category: 'Web Design',
        image: img1,
        link1: 'https://giacomosorbi.github.io/NicaDago-module-ii/',
        link2: <GitHub />,
        title: 'Stillness',
        text: 'This artist blog was created for my second university project. It was created using React JS. As it was my first time using React, the slider has a minor problem that should be fixed. One day, in a far away land I might do it. It was uploaded on my university\'s lecturer GitHub account for marking.'
    },
    {
        id: 2,
        category: 'Web Design',
        image: img2,
        link1: 'https://giacomosorbi.github.io/NicaDago-module-i/index.html',
        link2:  <GitHub />,
        title: 'Escapes',
        text: 'This travel website was created for my first university project. It was created during the first lockdown in UK when I dreamed a lot of travelling abroad. It was created with simple HTML/CSS/JS. There is an error that I might fix in the future. It was uploaded on my university\'s lecturer GitHub account for marking.'
    },
    {
        id: 5,
        category: 'Graphic Design',
        image: img5,
        link1: 'https://online.fliphtml5.com/cdkpu/rrdx/',
        link2: <Book />,
        title: 'Generation Zen',
        text: 'Generation Zen is a magazine created for the graphic design course that was part of my master. It was created using InDesign and Photoshop, Illustrator and Procreate. The design, all the articles, advertisements and drawings are mine. Please note, names and locations are fictional.'
    },
    {
        id: 3,
        category: 'Web Design',
        image: img3,
        link1: 'https://NicaDago.github.io/WeatherApp',
        link2: <GitHub />,
        title: 'Weather App',
        text: 'This weather app exercise was created as an exercise for my university course using json'
    },
    {
        id: 4,
        category: 'Web Design',
        image: img4,
        link1: 'https://nicadago.github.io/FizzBuzz2/',
        link2: <GitHub />,
        title: 'Fizzbuzz',
        text: 'This fizzbuzz game exercise was created as an exercise for my university course and was my first java script exercise'
    }
]

export default portfolioData;