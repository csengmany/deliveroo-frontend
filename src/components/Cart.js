const Cart = ({ cart, setCart }) => {
    return (
        <div className="cart">
            <button>Valider mon panier</button>
            <div>{cart}</div>
        </div>
    );
};

export default Cart;
