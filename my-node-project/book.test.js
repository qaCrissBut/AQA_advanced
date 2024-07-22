// const axios = require ("axios")

// test ("GET Book code 200", async()=>{
//     const response = await axios.get("https://demoqa.com/BookStore/v1/Books")
//     expect(response.status).toBe(200)


// } )

// const axios = require ("axios")

// test ("GET Book code 200", async()=>{
//     const response = await axios.get("https://demoqa.com/BookStore/v1/Books")
//     expect(response.data.books).toBeDefined()
//    console.log(response.data)
// } )



// const axios = require ("axios")

// axios.post('/posts', {
//     userId: 11,
//     id: 111,
//     title: 'homework',
//     body: 'text'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const axios = require("axios");

test ("user can get token", async () => {
    const authResponse = await axios.post("http://demoqa.com/Account/v1/GenerateToken",
        {"userName": "testcrissbut@gmail.com",
        "password": "121212Cri$$"
        })
        console.log(authResponse.data);
       
        expect(authResponse.status).toBe(200);
        expect(authResponse.data).toHaveProperty('token');

     
})








