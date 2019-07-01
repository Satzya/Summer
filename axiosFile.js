let axios = require('axios');


axios.get(`http://dummy.restapiexample.com/api/v1/employees`).then((res) => {
    for (name in res.data) {
        // console.log(res.data[name].employee_name);
        // console.log(res.data)
    }
    // console.log(res.data);
}).catch((error) => {
    console.log(`${error} here`)
})


axios.post(`http://dummy.restapiexample.com/api/v1/employees`, {
    name: 'abc',
    salary: 5655,
    profile: 'NAAI'
}).then((res) => {
    // console.log(res.data);
}).catch((error) => {
    console.log(error)
})

// 