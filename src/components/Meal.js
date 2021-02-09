import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meal = ({
    meal,
    cart,
    setCart,
    quantity,
    setQuantity,
    amount,
    setAmount,
}) => {
    return (
        <div
            className={`meal shadow`}
            onClick={() => {
                // add meal to cart
                const newCart = [...cart];
                //add quantity of meal
                const newQuantity = [...quantity];

                //if title meal does not exist in cart
                if (newCart.indexOf(meal) === -1) {
                    newCart.push(meal);
                    newQuantity.push(1);
                } else {
                    //if title meal is already in cart increment the count
                    newQuantity[newCart.indexOf(meal)] =
                        newQuantity[newCart.indexOf(meal)] + 1;
                }
                setQuantity(newQuantity);
                setCart(newCart);
                setAmount(amount + Number(meal.price));
            }}
        >
            <div>
                <h3>{meal.title}</h3>
                <p className="description">
                    {meal.description
                        ? meal.description.length > 50 &&
                          meal.description.slice(0, 50) + "..."
                        : ""}
                </p>
                <span>{`${meal.price.replace(".", ",")} €`}</span>

                {/* if there the meal is popular display a star */}
                {meal.popular && (
                    <span className="star">
                        <FontAwesomeIcon icon="star" />
                        <span>Populaire</span>
                    </span>
                )}
            </div>
            {/* if the meal has a picture display it */}
            {meal.picture && <img src={meal.picture} alt={meal.title} />}
        </div>
    );
};
export default Meal;
