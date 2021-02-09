import Category from "./Category";
import Cart from "./Cart";

const CategoriesContainer = ({ categories }) => {
    return (
        <div className="categories-container">
            <div>
                {categories.map((category, index) => {
                    return <Category key={index} category={category} />;
                })}
            </div>

            <Cart />
        </div>
    );
};

export default CategoriesContainer;
