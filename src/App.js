import "./App.css";

import axios from "axios";

import { useState, useEffect } from "react";

//Import components
import Header from "./components/Header";
import Category from "./components/Category";

//Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
library.add(faStar);

function App() {
    const [data, setData] = useState([]);
    //avoid loading errors
    const [isLoading, setIsLoading] = useState(true);

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
            <Header
                title={data.restaurant.name}
                description={data.restaurant.description}
                image={data.restaurant.picture}
                alt={data.restaurant.picture}
            />
            <div className="category-container">
                <div>
                    {data.categories.map((category, index) => {
                        return <Category key={index} category={category} />;
                    })}
                </div>
                <Cart />
            </div>

            <Footer />
        </div>
    );
}

export default App;
