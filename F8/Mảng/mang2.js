

let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0,
    }
];

// courses.every(function (course, a) {
//     console.log(a, course)
// })

var isFree = courses.filter(function (course, index) {
    console.log(index)
    return course.name === 'Ruby'
    
})
console.log(isFree)
