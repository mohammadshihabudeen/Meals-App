import { View ,Text , StyleSheet, FlatList} from "react-native"
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

export default MealsList = ({displayMeals}) =>{
    const navigation = useNavigation();
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