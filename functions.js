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
                <div class="food-photo"><img></div>
                <div class="food-des">
                    <h3>${food.name}</h3>
                    <p>${food.price} تومان</p>
                    <div class="amount">
                        <p>${food.amount}</p>
                        <div class="btn">
                            <button class="btn-counter" onClick="add(${food.id})" id="addBtn" > + </button>
                            <button class="btn-counter" onClick="remove(${food.id})" id="removeBtn" > - </button>
                        </div>
                    </div>
                </div>
                <div class="food-value" >
                    <p><span>${food.value}</span> تومان</p>
                </div>
            </div>
        `)
    });

    $('.description').append(`
        <h4>جمع کل سفارشات: ${total_value} تومان</h4>
        <h4>حق سرویس و کارمزد: ${total_value / 80} تومان</h4>
        <h4>تخفیف: ${discount_value} تومان</h4>
        <h1>${total_value - (total_value / 80)}</h1>
    `)
}
