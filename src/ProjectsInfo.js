import uni from './images/uni.gif';
import phd from './images/phd.gif';
import javagame from './images/javagame.gif';

const projectInfo = [

    {
        id: 1,
        title: "Analytical Phonon Band Structures",
        image : uni,
        description: { what: 'Visualisation of how a (high symmetry) crystal behaves when a magnetic field is applied.', why: 'Colourful patterns appearing and disappearing are simple enough to see regardless of how much physics you know. Here they capture the driving force behind a complex piece of (topological) theoretical physics and it looks really cool.' },
        skillsUsed: ["Matlab", "Applied maths", "Mathematical programming"],
        linkToCode: { description: 'Code', link: 'https://github.com/ashleytsmith/Analytical_phonon_band_structures' },
        linkToApplication: null,
        imageBorder: 'black',

    },

    {
        id: 2,
        title: "Searching Algorithms for Materials Modelling",
        image : phd,
        description: { what: 'Neighbour and connectivity search algorithms for 3D (periodic) crystals plus a ray tracing visualisation.', why: 'An open ended high performance programming challenge with a small enough scope for one person to finish and enough nuances to make it highly rewarding. Ray tracing is enourmously helpful (but sadly underutilised) for viewing chemical structures.' },
        skillsUsed: ["Python","NumPy", "POV-Ray", "Algorithm development","Test-driven development"],
        linkToCode: { description: 'Code', link: 'https://github.com/ashleytsmith/Searching_algorithms_for_materials_modelling' },
        linkToApplication: null,
        imageBorder: 'black',
    },

    {
        id: 3,
        title: "Brick Breaker",
        image : javagame,
        description: { what: 'Version of the game Brick Breaker written in Java with a clean and object orientated focused design.', why: 'Each piece of the game is an object and Java is a perfect language for making these objects interact. It\'s strongly typed, has strict rules, and it forces you towards following them if you engineer in right spirit.' },
        skillsUsed: ["Java", "OOP"],
        linkToCode: { description: 'Code', link: 'https://github.com/ashleytsmith/Brick-Breaker' },
        linkToApplication: null,
        imageBorder: 'primary',
    },


];


export default projectInfo;