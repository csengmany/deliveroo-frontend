import Meal from "./Meal";
const Category = ({
    category,
    index,
    cart,
    setCart,
    quantity,
    setQuantity,
    amount,
    setAmount,
}) => {
    return (
        <div className="catgegory" key={index}>
            {/* if the category has not meal don't display the category */}
            {category.meals.length > 0 && <h2>{category.name}</h2>}
            <div className="meals">
                {/* map on category.meals to display every "meal" */}
                {category.meals.map((meal, index) => {
                    return (
                        <Meal
                            className="item"
                            meal={meal}
                            key={meal.id}
                            index={index}
                            cart={cart}
                            setCart={setCart}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            amount={amount}
                            setAmount={setAmount}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Category;
