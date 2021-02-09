import Category from "./Category";
import Cart from "./Cart";

const CategoriesContainer = ({
    categories,
    cart,
    setCart,
    quantity,
    setQuantity,
    amount,
    setAmount,
}) => {
    return (
        <div className="categories-container">
            <div>
                {categories.map((category, index) => {
                    return (
                        <Category
                            key={index}
                            category={category}
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

            <div className="cart-container">
                <Cart
                    cart={cart}
                    setCart={setCart}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    amount={amount}
                    setAmount={setAmount}
                />
            </div>
        </div>
    );
};

export default CategoriesContainer;
