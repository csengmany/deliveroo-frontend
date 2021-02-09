import "./assets/styles/App.css";

import axios from "axios";

import { useState, useEffect } from "react";

//Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesContainer from "./components/CategoriesContainer";

//add icons to use in project
library.add(faStar);

function App() {
    const [data, setData] = useState([]);
    //avoid loading errors
    const [isLoading, setIsLoading] = useState(true);

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [amount, setAmount] = useState(0);

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
            <CategoriesContainer
                categories={data.categories}
                cart={cart}
                setCart={setCart}
                quantity={quantity}
                setQuantity={setQuantity}
                amount={amount}
                setAmount={setAmount}
            />

            <Footer />
        </div>
    );
}

export default App;
