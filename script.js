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


const add = (id) => {
    const addedItem = foods.find(food => {
        return food.id === id
    })

    addedItem.amount += 1
    addedItem.value = addedItem.amount * addedItem.price
    renderer(foods)
}

const remove = (id) => {
    const removedItem = foods.find(food => {
        return food.id === id
    })

    if (removedItem.amount > 0) {
        removedItem.amount -= 1
        removedItem.value = removedItem.amount * removedItem.price
    }
    renderer(foods)
}

const total = (foods) => {
    let sum = 0
    
    foods.forEach(food => {
        sum += food.value
    });

    return sum
}


const renderer = (foods) => {
    $('.main, .description').html('')

    foods.forEach(food => {
        $('.main').append(`
            <div class="items">
                <h3>${food.name}</h3>
                <p>Price: ${food.price}</p>
                <p>Amount: ${food.amount}</p>
                <p>Value: ${food.value}</p>
                <button onClick="add(${food.id})" id="addBtn" > + </button>
                <button onClick="remove(${food.id})" id="removeBtn" > - </button>
            </div>
        `)
    });
    $('.description').append(`
        <h2>Total value: ${total(foods)}</h2>
    `)
}

renderer(foods)