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
            <CategoriesContainer categories={data.categories} />
            <Footer />
        </div>
    );
}

export default App;
