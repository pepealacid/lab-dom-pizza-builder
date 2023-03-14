// Write your Pizza Builder JavaScript in this file.
let finalPrice = 13;
// let totalPrice = document
//   .getElementsByClassName('.panel.price')
//   .getElementsByTagName('strong').innerText;

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (document.querySelector('.sauce.sauce-white')) {
    document
      .querySelector('.sauce.sauce-white')
      .classList.remove('sauce-white');
  } else {
    document.querySelector('.sauce').classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (document.querySelector('.crust.crust-gluten-free')) {
    document
      .querySelector('.crust.crust-gluten-free')
      .classList.remove('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (!state.pepperoni) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[0]
      .classList.remove('active');
  } else if (
    state.pepperoni &&
    !document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[0]
      .classList.contains('active')
  ) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[0]
      .classList.add('active');
  }

  if (!state.mushrooms) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[1]
      .classList.remove('active');
  } else if (
    state.mushrooms &&
    !document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[1]
      .classList.contains('active')
  ) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[1]
      .classList.add('active');
  }

  if (!state.greenPeppers) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[2]
      .classList.remove('active');
  } else if (
    state.greenPeppers &&
    !document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[2]
      .classList.contains('active')
  ) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[2]
      .classList.add('active');
  }

  if (!state.whiteSauce) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[3]
      .classList.remove('active');
  } else if (
    state.whiteSauce &&
    !document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[3]
      .classList.contains('active')
  ) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[3]
      .classList.add('active');
  }

  if (!state.glutenFreeCrust) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[4]
      .classList.remove('active');
  } else if (
    state.glutenFreeCrust &&
    !document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[4]
      .classList.contains('active')
  ) {
    document
      .querySelector('.panel.controls')
      .getElementsByTagName('button')[4]
      .classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  if (state.pepperoni) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[0].style.visibility = 'visible';
  } else if (!state.pepperoni) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[0].style.visibility = 'hidden';
  }

  if (state.mushrooms) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[1].style.visibility = 'visible';
  } else if (!state.mushrooms) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[1].style.visibility = 'hidden';
  }

  if (state.greenPeppers) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[2].style.visibility = 'visible';
  } else if (!state.greenPeppers) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[2].style.visibility = 'hidden';
  }

  if (state.whiteSauce) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[3].style.visibility = 'visible';
  } else if (!state.whiteSauce) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[3].style.visibility = 'hidden';
  }

  if (state.glutenFreeCrust) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[4].style.visibility = 'visible';
  } else if (!state.glutenFreeCrust) {
    document
      .querySelector('.panel.price')
      .getElementsByTagName('li')[4].style.visibility = 'hidden';
  }

  totalPrice = `$${finalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    if (state.pepperoni) {
      finalPrice += 1;
    } else {
      finalPrice -= 1;
    }
    renderEverything();
  });

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    if (state.mushrooms) {
      finalPrice += 1;
    } else {
      finalPrice -= 1;
    }
    renderEverything();
  });

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    if (state.greenPeppers) {
      finalPrice += 1;
    } else {
      finalPrice -= 1;
    }
    renderEverything();
  });

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    finalPrice += 3;
  } else {
    finalPrice -= 3;
  }
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) {
    finalPrice += 5;
  } else {
    finalPrice -= 5;
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
