import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal }) => {
    return (
        <div className={`meal shadow`} onClick={() => {}}>
            <div>
                <h3>{meal.title}</h3>
                <p className="description">{meal.description}</p>
                <span>{`${meal.price.replace(".", ",")} €`}</span>

                {/* if there the meal is popular display a star */}
                {meal.popular && (
                    <span className="star">
                        <FontAwesomeIcon icon="star" />
                        <span> Populaire</span>
                    </span>
                )}
            </div>
            {/* if the meal has a picture display it */}
            {meal.picture && <img src={meal.picture} alt={meal.title} />}
        </div>
    );
};
export default Meal;
