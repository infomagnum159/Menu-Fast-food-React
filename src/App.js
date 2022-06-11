import React, {useState} from "react";
import Ingredient from './Components/Ingredient/Ingredient';
import Order from './Components/Order/Order';
import './App.css';
import HamburgerImage from './Components/assets/burger.png';
import CheeseburgerImage from './Components/assets/cheeseburger.jpg';
import FriesImage from './Components/assets/fries.jpg';
import CoffeeImage from './Components/assets/coffee.jpg';
import TeaImage from './Components/assets/tea.jpg';
import ColaImage from './Components/assets/cola.jpg';

const menu = [
  {name: 'Hamburger', price: 80, image: HamburgerImage},
  {name: 'Cheeseburger', price: 90, image: CheeseburgerImage},
  {name: 'Fries', price: 45, image: FriesImage},
  {name: 'Coffee', price: 70, image: CoffeeImage},
  {name: 'Tea', price: 50, image: TeaImage},
  {name: 'Cola', price: 40, image: ColaImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0}
  ]);

  const increaseCount = name => {
    const ingredCopy = ingredients.map(ingred => {
      if (ingred.name === name) {
        return {
          ...ingred,
          count: ingred.count + 1,
        }
      }
      return ingred;
    });
    setIngredients(ingredCopy)
  };

  const decreaseCount = name => {
    const ingredCopy = ingredients.map(ingred => {
      if (ingred.name === name && ingred.count > 0) {
        return {
          ...ingred,
          count: ingred.count - 1,
        }
      }
      return ingred;
    })
    setIngredients(ingredCopy)
  };
  const counterInfo = {
   display: 'block',
    marginLeft: '20px',
    fontWeight: '400'
  };
  const counterStyles = {
    display: 'none',
  };
  const getTotal = () => {
    let totalPrice = 0;
    menu.forEach(ingredient =>
        {
          const price = ingredient.price;
          let itemPrice = 0;
          if(totalPrice > 0) {
            counterStyles.display = 'block'
            counterInfo.display = 'none'
          }
          const count = ingredients.find(ing => ing.name === ingredient.name).count;
          if(count){
            itemPrice = price * count;
          }
          totalPrice += itemPrice;
        }
    );
    return totalPrice;
  };
  const ingredComponents = menu.map(ingred => (
      <Ingredient
          key={ingred.name}
          name={ingred.name}
          price={ingred.price}
          onIncreaseClick={() => increaseCount(ingred.name)}
          image={ingred.image}
      >
      </Ingredient>
  ));
const orderIngredients = menu.map(ingred => (

  <Order
    key={ingred.name}
    name={ingred.name}
    count={ingredients.find(item => item.name === ingred.name).count}
    price={ingred.price}
    onDecrease={() => decreaseCount(ingred.name)}
    >
  </Order>
));
  return (
      <div className="Main-Content">
        <div className="Order">
          <legend>Order Details</legend>
          {orderIngredients}
          <p style={counterInfo}>
            <p>Order is empty!</p>
            <p>Please add some items!</p>
           </p>
          <p style={counterStyles}>Total price: {getTotal()} KGS</p>
        </div>
        <div className="Items">
          <legend>Add items</legend>
        {ingredComponents}
        </div>
      </div>
  );
}
export default App;


