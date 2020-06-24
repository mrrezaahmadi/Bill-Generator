let total_value = 0
let discount_value = 0


$('form').on('submit', e => {
    e.preventDefault()
})

$('input').on('change', e => {
    for (const discount of discounts) {
        if (discount.title === e.target.value) {
            if (total_value > discount.value) {
                discount_value = discount.value
                total_value -= discount.value
                renderer(foods)
            }
        }
    }
})



const add = (id) => {
    const addedItem = foods.find(food => {
        return food.id === id
    })

    addedItem.amount += 1
    addedItem.value = addedItem.amount * addedItem.price
    total_value += addedItem.price
    renderer(foods)
}

const remove = (id) => {
    const removedItem = foods.find(food => {
        return food.id === id
    })

    if (removedItem.amount > 0) {
        removedItem.amount -= 1
        removedItem.value = removedItem.amount * removedItem.price
        total_value -= removedItem.price
    }
    renderer(foods)
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
        <h2>Total value: ${total_value}</h2>
        <h2>Taxes: ${total_value / 10}</h2>
        <h2>Discount: ${discount_value}</h2>
    `)
}
