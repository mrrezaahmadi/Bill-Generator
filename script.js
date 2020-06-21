const foods = [{
    name: 'Pizza',
    price: 35000,
    amount: 0,
    value: 0,
    id: 1

}, {
    name: 'Spaghetti',
    price: 26000,
    amount: 0,
    value: 0,
    id: 2
}, {
    name: 'Kebbab',
    price: 48000,
    amount: 0,
    value: 0,
    id: 3
}, {
    name: 'Salad',
    price: 12000,
    amount: 0,
    value: 0,
    id: 4
}];


const renderer = (foods) => {
    foods.forEach(food => {
        $('.main').append(`
            <h3>${food.name}</h3>
            <p>Price: ${food.price}</p>
            <p>Amount: ${food.amount}</p>
            <p>Value: ${food.value}</p>
            <button id="add" > + </button>
            <button id="remove" > - </button>
        `)
    });
}

renderer(foods)