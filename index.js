// function a() {
//     console.log ('Hey there')
// }

// a()
// a = 10
// a()

// const a = () => {
//     console.log ('Hey there')
// }

// a()
// a = 10
// a()

// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// }

// console.log (myCity.country)
// console.log (myCity.city)
// console.log (myCity.popular)


// const myCity = {
//     city: 'New York'
// }
// myCity.city = 'Las Vegas'
// myCity.popular = true
// myCity.country = 'USA'

// delete myCity.popular
// delete myCity.country
// delete myCity.city

// myCity ['popular'] = true

// const countryPropertyName = 'country'
// myCity [countryPropertyName] = 'USA'

// console.log (myCity)


// const myCity = {
//     city: 'New York', 
//     info: {
//         isPopular: true,
//         country: 'USA'}
           
// }
// delete myCity.info['country']
// console.log (myCity.info)

// const myCity = {
//         city: 'New York', 
//         cityGreeting: function () {
//             console.log ('Greetings!!')
//         }
//     }
//     myCity.cityGreeting()

// const a = 10
// let b = a
// b = 30
// console.log (a)
// console.log (b)

// const person = {
//     name: 'Bob',
//     age: 21
// }

// person.age = 22
// person.isAdult = true

// console.log (person.age)
// console.log (person.isAdult)

// const person = {
//     name: 'Bob',
//     age: 21
// }

// const person2 = person

// person2.age = 26
// person.isAdult = true

// console.log (person.age)
// console.log (person.isAdult)


// const person = {
//     name: 'Bob',
//     age: 21
// }

// const person2 = Object.assign({},person)

// person2.age = 26

// console.log (person.age)
// console.log (person2.age)


// const person = {
//     name: 'Bob',
//     age: 21
// }

// const person2 = { ... person }

// person2.name = 'Alice'

// console.log (person.name)
// console.log (person2.name)


 
// const person = {
//     name: 'Bob',
//     age: 21
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Alice'

// console.log (person.name)
// console.log (person2.name)


// let a = 5
// let b = 3
 
// function sum(a,b){
//    const c = a + b
//     console.log(c)
//  }

//  sum(a,b)

//  a = 6
//  b = 8

//  sum(a,b)


// function myFn(a,b) {
//     let c
//     a = a + 1
//    c = a + b
// return c
// }

// myFn  (10, 30)

// console.log (n)

// function printMyName () {
//     console.log ('Bogdan')
// }
// console.log ('Start')

// setTimeout (printMyName,1000)

// let a 
// let b
// function myFn () {
// let b
// a = true
// b = 10
// console.log(a)
// }
// myFn()

// console.log (a)
// console.log (b)

// fetch('https://jsonplaceholder.typicode.com/todos/55')
// .then(respons => Response.json())
// .then(json => console.log(json))
// .catch(error => console.error(error))

function printMyName () {
    console.log ('Criss')
}


setTimeout (printMyName,2000)