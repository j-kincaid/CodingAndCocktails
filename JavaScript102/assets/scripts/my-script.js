const menu = {
  drinkArray: [{
      'id': 'focusedLady',
      'label': 'Focused Lady',
      'photoId': 'ke-PACXFFS8'
    },
    {
      'id': 'strongLady',
      'label': 'Strong Lady',
      'photoId': '45i1V5ho-fI'
    },
    {
      'id': 'frontEndPunch',
      'label': 'Front-End Punch',
      'photoId': 'pPhN8HFzkDE'
    },
    {
      'id': 'cachedOut',
      'label': 'Cached Out',
      'photoId': 'JKMnm3CIncw'
    },
    {
      'id': 'httPapaya',
      'label': 'httPAPAYA://',
      'photoId': 'YnaPN0dl4A8'
    },
    {
      'id': 'nerdyDaiquiri',
      'label': 'Nerdy Daiquiri',
      'photoId': 'paz5CWdB2ys'
    },
    {
      'id': 'theAvernaCode',
      'label': 'The Averna Code',
      'photoId': 'eN6_2u8Pcrc'
    },
    {
      'id': 'focusedTheMostest',
      'label': 'Focused the Mostest',
      'photoId': 'FdLew1-wMI8'
    },
  ],
  buildDrinkMenu: function() {
    let fragment = document.createDocumentFragment();

    this.drinkArray.forEach( (drink) => {
      let labelNode = document.createElement('label');
      labelNode.setAttribute('for', drink.id);

      let radioNode = document.createElement('input');
      radioNode.id = drink.id;
      radioNode.name = 'drink';
      radioNode.setAttribute('type', 'radio');
      radioNode.setAttribute('value', drink.label);

      const textNode = document.createTextNode(drink.label);

      labelNode.appendChild(radioNode);
      labelNode.appendChild(textNode);
      fragment.appendChild(labelNode);
    });

    document.querySelector('.radio-group').appendChild(fragment);
  }
};

let numberOfDrinks = 0;

const submitOrder = function (name, drinkId) {
  numberOfDrinks++;


  // 4. Change the submitOrder function to take drink << different font << as a second parameter.
  if (numberOfDrinks < 5) {

    const drinkObject = menu.drinkArray.find( (arrayElement => {
       return arrayElement.id === drinkId;
    }));
    fetchImage(drinkObject.photoId);

    let node = document.createElement('h3');
    const textNode = document.createTextNode(`${name} would like a ${drinkObject.label}`);
    node.appendChild(textNode);

    document.querySelector('.order-details').appendChild(node);
  } else {
    alert("Drink order queue is full. Please try ordering again in a few minutes.");
  }

  // In Step 6 it's unclear where to place this.
  updateOrderCount(numberOfDrinks);
};

const updateOrderCount = (count) => {
  document.getElementById('drink-count').innerHTML = `Drinks Ordered: ${count}`;
};

const fetchImage = (photoId) => {
  const url = `https://source.unsplash.com/${photoId}/300x200`;

  fetch(url)
    .then((response) => { return response.blob();  })
    .then((blob) => {
      console.log(blob);
      const imgUrl = URL.createObjectURL(blob);
      document.getElementById('cocktail-image').src = imgUrl;
    })
    .catch((error) => { console.log(error); });
};


document.addEventListener("DOMContentLoaded", function(event) {

  menu.buildDrinkMenu();

  document.getElementById('order-btn').addEventListener('click', function() {
    // I was confused and placed these two const statements after
    // submitOrder(orderName, drinkName);
    const orderName = document.getElementById('order-form-input').value;
    const drinkName = document.querySelector('input[type="radio"]:checked').value;
    const drinkId = document.querySelector('input[type="radio"]:checked').id;

    submitOrder(orderName, drinkId);
  });

  document.getElementById('order-btn').addEventListener('click', function() {
    console.log('second click handler');
  });

});
