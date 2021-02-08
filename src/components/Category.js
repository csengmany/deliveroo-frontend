import Meal from "./Meal";

const Category = ({ category }) => {
    return (
        <div className="catgegory">
            {/* if the category has not meal don't display the category */}
            {category.meals.length > 0 && <h2>{category.name}</h2>}
            <div className="meals">
                {/* map on category.meals to display every "meal" */}
                {category.meals.map((meal) => {
                    return <Meal meal={meal} key={meal.id} />;
                })}
            </div>
        </div>
    );
};
export default Category;
