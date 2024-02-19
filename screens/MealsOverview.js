import { View ,Text , StyleSheet, FlatList} from "react-native"
import { MEALS , CATEGORIES} from "../data/dummy-data"
import MealItem from "../components/MealItem";
import { useLayoutEffect} from "react";

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
    const renderMealItem = (itemData) =>{
        return <MealItem item={itemData.item} onPress={
            ()=>{
                navigation.navigate("Meals Details", {
                    mealId : itemData.item.id,
                })
            }
        }/>
    }
    return (
        <View>
            <FlatList 
            data = {displayMeals}
            keyExtractor={(itemData)=>{
                itemData.id
            }}
            renderItem={renderMealItem}
            />
        </View>
    )

}