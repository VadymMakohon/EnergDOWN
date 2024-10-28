function getDrinks() {
  let drinks = [];
  for (let drink of model.drinks) {
    drinks.push(drink);
  }

  return drinks;
}

function drinksHTML() {
  let drinksHtml = ``;
  let drinks = getDrinks();

  if (drinks.length > 0) {
    for (const drink of drinks) {
      drinksHtml += `<li>${drink.name} ${drink.caffeineContent} mg</li>`;
    }
  }
  console.log(drinks);

  return drinksHtml;
}
