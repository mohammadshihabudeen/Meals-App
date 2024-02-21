import { View ,Text , StyleSheet, FlatList} from "react-native"
import { MEALS , CATEGORIES} from "../data/dummy-data"
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

export default MealsOverview = ({route, navigation}) =>{
    const catId = route.params.categoryId;
    useLayoutEffect(()=>{
        const pageTitle = CATEGORIES.find((cat)=>cat.id === catId).title;
        navigation.setOptions({
            title: pageTitle
        },[catId,navigation]);
    })

    const displayMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(catId) >= 0;
    })
    return <MealsList displayMeals={displayMeals}/>

}