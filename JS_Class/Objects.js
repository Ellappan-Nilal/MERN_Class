var cap = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 102,
    friends: ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'],
    address: {
        state: 'New York',
        city: {
            name: 'Brooklyn',
            pincode: 123456
        }
    }
}
console.log(JSON.stringify(cap, null, 2));

