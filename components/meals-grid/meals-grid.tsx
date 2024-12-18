import MealItem from '../meals-item';
import classes from './meals-grid.module.css';
import { MealItemProps } from '@/components/meals-item/meals-item';

type MealsGridProps = {
    meals: MealItemProps[];
}

export default function MealsGrid ({meals = []}: MealsGridProps){
    return (
        <ul className={classes.meals}>
            {meals.map(meal => 
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            )}
        </ul>
    )

}