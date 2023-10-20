// function cakes(recipe, available) {
//     let ingredients = Object.keys(recipe)
//     let arr = []
//     for (let i = 0; i < ingredients.length; i++) {
//         let ingredient = ingredients[i]
//         if (available[ingredient] >= recipe[ingredient]) {
//             arr.push(Math.floor(available[ingredient] / recipe[ingredient]))
//         } else {
//             arr.push(0)
//         }
//     }
//     return arr[0]
// }
function cakes(recipe, available) {
    let ingredients = Object.keys(recipe)
    let arr = []
    for (let ingredient in ingredients)
        if (available[ingredient] >= recipe[ingredient]) {
            arr.push(Math.floor(available[ingredient] / recipe[ingredient]))
        } else {
            arr.push(0)
        }
    return arr
}
let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available))