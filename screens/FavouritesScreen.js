import { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { FavouritesContext } from "../store/context/favourites-context"
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default FavouritesScreen = () => {
    const favMealctx = useContext(FavouritesContext);
    const favMeals = MEALS.filter((meal) =>
        favMealctx.ids.includes(meal.id)
    )
    if (favMeals.length == 0) {
        return <View style={styles.cont}>
            <Text style={styles.text}>You have no Favourite meals yet!</Text>
        </View>
    }
    return (
        <MealsList displayMeals={favMeals} />

    )
}

const styles = StyleSheet.create(
    {
        cont: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white"
        }
    }
)