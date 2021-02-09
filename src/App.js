import "./assets/styles/App.css";

import axios from "axios";

import { useState, useEffect } from "react";

//Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import CategoriesContainer from "./components/CategoriesContainer";
// import Category from "./components/Category";
// import Cart from "./components/Cart";
// import Meal from "./components/Meal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//add icons to use in project
library.add(faStar);

function App() {
    const [data, setData] = useState([]);
    //avoid loading errors
    const [isLoading, setIsLoading] = useState(true);

    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState([]);

    //useEffect to update data une seule fois:  au chargement du composant
    useEffect(() => {
        //axios requet
        const fetchDta = async () => {
            try {
                const response = await axios.get(
                    "https://my-deliveroo-backend-app.herokuapp.com/"
                );
                console.log(response.data);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchDta();
    }, []);

    return isLoading ? (
        <span>En cours de chargement...</span>
    ) : (
        <div className="App">
            <Header data={data.restaurant} />
            {/* <CategoriesContainer categories={data.categories} /> */}
            <div className="categories-container">
                <div>
                    {data.categories.map((category, index) => {
                        return (
                            // <Category key={index} category={category} />;
                            <div className="catgegory" key={index}>
                                {/* if the category has not meal don't display the category */}
                                {category.meals.length > 0 && (
                                    <h2>{category.name}</h2>
                                )}
                                <div className="meals">
                                    {/* map on category.meals to display every "meal" */}
                                    {category.meals.map((meal, index) => {
                                        return (
                                            // <Meal
                                            //     meal={meal}
                                            //     key={meal.id}
                                            //     index={index}

                                            // />

                                            <div
                                                key={index}
                                                className={`meal shadow`}
                                                onClick={() => {
                                                    // add meal to cart
                                                    const newCart = [...cart];
                                                    //add amount of meal
                                                    const newAmount = [
                                                        ...amount,
                                                    ];

                                                    //if title meal does not exist in cart
                                                    if (
                                                        newCart.indexOf(
                                                            meal.title
                                                        ) === -1
                                                    ) {
                                                        newCart.push(
                                                            meal.title
                                                        );
                                                        newAmount.push(1);
                                                    } else {
                                                        //if title meal is already in cart increment the count
                                                        newAmount[
                                                            newCart.indexOf(
                                                                meal.title
                                                            )
                                                        ] =
                                                            newAmount[
                                                                newCart.indexOf(
                                                                    meal.title
                                                                )
                                                            ] + 1;
                                                    }
                                                    setAmount(newAmount);
                                                    setCart(newCart);
                                                    console.log(
                                                        "amount => ",
                                                        newAmount,
                                                        "newCart=>",
                                                        newCart
                                                    );
                                                }}
                                            >
                                                <div>
                                                    <h3>{meal.title}</h3>
                                                    <p className="description">
                                                        {meal.description
                                                            ? meal.description
                                                                  .length >
                                                                  50 &&
                                                              meal.description.slice(
                                                                  0,
                                                                  50
                                                              ) + "..."
                                                            : ""}
                                                    </p>
                                                    <span>{`${meal.price.replace(
                                                        ".",
                                                        ","
                                                    )} €`}</span>

                                                    {/* if there the meal is popular display a star */}
                                                    {meal.popular && (
                                                        <span className="star">
                                                            <FontAwesomeIcon icon="star" />
                                                            <span>
                                                                Populaire
                                                            </span>
                                                        </span>
                                                    )}
                                                </div>
                                                {/* if the meal has a picture display it */}
                                                {meal.picture && (
                                                    <img
                                                        src={meal.picture}
                                                        alt={meal.title}
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* <Cart cart={cart} setCart={setCart} /> */}
                <div className="cart">
                    <button>Valider mon panier</button>
                    <div>
                        <div>
                            <div>{amount}</div>
                        </div>
                        <div>{cart}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
