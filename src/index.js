//import react and reactdom
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import ReactDOM from "react" this was in react 17;
//create a App component  where First letter of the component is Name is captital
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //adding css  by using javascript object
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <div>
        <h1 style={style}>Fast React Pizza Co.</h1>
      </div>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = []; //if we are not having any pizza in our menu or in that case we don't want to show that paragraph heading for that case we will use react fragement;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <p>
        Authentic italian cuisine .6 creative dishes choose from.All from our
        stone oven all organic all delicous.
      </p> */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {numPizzas > 0 ? (
        //this is react fragment
        <>
          <p>
            Authentic italian cuisine .6 creative dishes choose from.All from
            our stone oven all organic all delicous.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're working on our menu please come back later !!</p>
      )}
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={7}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/funghi.jpg"
        price={15}
      /> */}
    </main>
  );
}
//start making a components
//instead of passing the props to the compoents we pass the object
function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <h3>{pizzaObj.ingredients}</h3>
        {/* {pizzaObj.soldOut ? (
            <span>SOLD OUT</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHour = 6;
  const closeHour = 24;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(isOpen);
  //if (hours >= openhour && hours <= closehour) alert("we're currently open");
  //else alert("we're currently close");

  return (
    <footer className="footer">
      {isOpen && <Orders closeHour={closeHour} />}
    </footer>
  );
  /*new Date().toLocaleTimeString(). we're currently open !*/
}
function Orders(props) {
  return (
    <div className="order">
      <p>We're open until {props.closeHour}:00 visit us or order online</p>
      <button class="btn">Order</button>
    </div>
  );
}
//react 18 version
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//before react 18 is was like this and
//React.render(<App/>,document.getElementById("root"));
