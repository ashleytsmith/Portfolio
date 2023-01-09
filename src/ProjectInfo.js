import uni from './images/uni.gif';
import phd from './images/phd.gif';
import javagame from './images/javagame.gif';

const projectInfo = [

    {
        id: 1,
        image : uni,
        description: { what: 'Visualisation of how a (high symmetry) crystal behaves when a magnetic field is applied.', why: 'Colourful patterns appearing and disappearing are simple enough to see regardless of how much physics you know. Here they capture the driving force behind a complex piece of (topological) theoretical physics and it looks really cool.' },
        imageBorder: 'black',

    },

    {
        id: 2,
        image : phd,
        description: { what: 'Neighbour and connectivity search algorithms for 3D (periodic) crystals plus a ray tracing visualisation.', why: 'An open ended high performance programming challenge with a small enough scope for one person to finish and enough nuances to make it highly rewarding. Ray tracing is enourmously helpful (but sadly underutilised) for viewing chemical structures.' },
        imageBorder: 'black',
    },

    {
        id: 3,
        image : javagame,
        description: { what: 'Version of the game Brick Breaker written in Java with a clean and object orientated focused design.', why: 'Each piece of the game is an object and Java is a perfect language for making these objects interact. It\'s strongly typed, has strict rules, and it forces you towards following them if you engineer in right spirit.' },
        imageBorder: 'primary',
    },


];


export default projectInfo;