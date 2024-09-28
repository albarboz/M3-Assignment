let score = parseInt(prompt('Enter a number between 1 and 100'))

if (score < 1 || score > 100) {
   console.log('Only numbers between 1 and 100 are accepted')
} else {
   switch (true) {
       case score >= 90: console.log('You recieved an A')
           break
       case score >= 80: console.log('You recieved an B')
           break
       case score >= 70: console.log('You recieved an C')
           break
       case score >= 60: console.log('You recieved an F')
           break
       default:
           console.log('You fail!')
   }
} 



/*
Updated version: 

let score = parseInt(prompt('Enter a number between 1 and 100'))

if (isNaN(score) || score < 1 || score > 100) {
    console.log('Only numbers between 1 and 100 are accepted')
} else {
    const grades = [
        { min: 90, letter: 'A' },
        { min: 80, letter: 'B' },
        { min: 70, letter: 'C' },
        { min: 60, letter: 'F' },
    ]

    const grade = grades.find(g => score >= g.min)
    if (grade) {
        const article = ['A', 'F'].includes(grade.letter) ? 'an' : 'a'
        console.log(`You recieved ${article} ${grade.letter}`)
        
    } else {
        console.log('You fail')
    }

}
*/