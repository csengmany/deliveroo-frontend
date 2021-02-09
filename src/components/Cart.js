import add from "../assets/images/add.svg";
import soustract from "../assets/images/add.svg";

const Cart = ({ cart, setCart, quantity, setQuantity, amount, setAmount }) => {
    const addQuantity = (index) => {
        const newQuantity = [...quantity];
        newQuantity[index] += 1;
        setQuantity(newQuantity);
    };
    const reduceQuantity = (index) => {
        const newQuantity = [...quantity];
        newQuantity[index] -= 1;
        setQuantity(newQuantity);
    };

    let delivery = 2.5;
    return (
        <div className="cart">
            <button
                style={{
                    background: cart.length > 0 ? "#00cdbd" : "#bac3c3",
                    color: cart.length > 0 ? "white" : "#8b9a9b",
                }}
            >
                Valider mon panier
            </button>
            {cart.length <= 0 && <span> Votre panier est vide</span>}
            {cart.map((meal, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            marginBottom: 30,
                            display: "flex",
                        }}
                    >
                        <img
                            src={soustract}
                            alt="button reduce"
                            onClick={() => {
                                if (quantity[index] > 0) {
                                    reduceQuantity(index);
                                    setAmount(amount - Number(meal.price));
                                    console.log("meal price", meal.price);
                                }
                            }}
                        />
                        <span style={{ color: "#808484" }}>
                            {quantity[index]}
                        </span>

                        <img
                            src={add}
                            alt="button add"
                            onClick={() => {
                                addQuantity(index);
                                setAmount(amount + Number(meal.price));
                            }}
                        />
                        <div
                            style={{
                                width: "100%",
                                marginLeft: 10,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <span style={{ width: 165 }}>{meal.title}</span>
                            <span
                                style={{
                                    width: 60,
                                }}
                            >
                                {meal.price.replace(".", ",")} €
                            </span>
                        </div>
                    </div>
                );
            })}

            {cart.length > 0 && (
                <>
                    <div className="cart-detail">
                        <div>
                            <span>Sous-total </span>{" "}
                            <span>{amount.toFixed(2).replace(".", ",")} €</span>
                        </div>
                        <div>
                            <span>Frais de Livraison </span>
                            <span>
                                {delivery.toFixed(2).replace(".", ",")} €
                            </span>
                        </div>
                    </div>
                    <div className="total">
                        <span>Total</span>{" "}
                        <span>
                            {(delivery + amount).toFixed(2).replace(".", ",")} €
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
