// Note: The *Template Literals* section begins with _1. Inside the updateOrderCount function, update innerHTML..._ but we do not have an updateOrderCount() function at the end of the previous section/screen *Use built in array function to build a DOM*. The instructions are clear otherwise but it looks like we need a different introduction to template literals.


const cocktailsArray = [{
    'id': 'focusedLady',
    'label': 'Focused Lady'
},
{
    'id': 'strongLady',
    'label': 'Strong Lady'
},
{
    'id': 'frontEndPunch',
    'label': 'Front-End Punch'
},
{
    'id': 'cachedOut',
    'label': 'Cached Out'
},
{
    'id': 'httPapaya',
    'label': 'httPAPAYA://'
},
{
    'id': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri'
},
{
    'id': 'theAvernaCode',
    'label': 'The Averna Code'
},
{
    'id': 'focusedTheMostest',
    'label': 'Focused the Mostest'
},
];

const buildCocktailsMenu = (cocktails) => {
    let cocktailsString = '';
    cocktails.forEach( (cocktail) => {
        cocktailsString += `<label class="radio" for="${cocktail.id}"><input type="radio" id="${cocktail.id}" name="drink" value="${cocktail.label}">${cocktail.label}</label>`;
    });

    document.querySelector('.radio-group').innerHTML = cocktailsString;
};

const submitOrder = (name, drink) => {
    let node = document.createElement('h3');
    const textNode = document.createTextNode(`${name} would like a  ${drink}`);
    node.appendChild(textNode);
    document.querySelector('.order-details').appendChild(node);
};

document.addEventListener("DOMContentLoaded", (event) => {

    buildCocktailsMenu(cocktailsArray);

    document.getElementById('order-btn').addEventListener('click', () => {
        const drinkName = document.querySelector('input[type="radio"]:checked').value;
        const orderName = document.getElementById('order-form-input').value;
        submitOrder(orderName, drinkName);
    });

});

// Also of note: In *Fix a bug and add an enhancement*, I used this

// if (orderName === true) {
//     submitOrder(orderName, drinkName);

// and the drink order didn't submit even without needing to add .trim() to orderName.

// Under *Enhance the web app*

// Step 2 instructions:
// _isAvailable == true_ in one spot and _isAvailable === true_ in the example that follows.

// Step 3's expanded help has _element_ as a parameter of
// const availableDrinks = cocktails.filter( (element) => {
//     return element.isAvailable == true;
// });
// but arrayElement is used in other areas.
