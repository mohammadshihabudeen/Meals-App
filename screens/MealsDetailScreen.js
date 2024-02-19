import { View, Text, Image, StyleSheet, FlatList, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import ListItems from "../components/ListItems"
export default MealdetailScreen = ({ route }) => {
    mealId = route.params.mealId
    const meal = MEALS.find((m) => m.id === mealId)
    return <ScrollView style={styles.mealItem}>
        <Text style={styles.heading}>
            {meal.title}
        </Text>
        <Image style={styles.image}
            source={{ uri: meal.imageUrl }}
        />
        <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
        <View style={{alignSelf:"center",paddingBottom: 30}}>
            <View style={styles.detailContainer}>
                <Text style={styles.subheading}>INGREDIENTS</Text>
                <ListItems meal={meal.ingredients}/>
                <Text style={styles.subheading}>STEPS</Text>
                <ListItems meal={meal.steps}/>
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 12,
        borderRadius: 8,
        backgroundColor: "#653939",
        elevation: 4,
        shadowColor: "white",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: "hidden"
    },
    image: {
        height: 250,
        width: "100%"
    },
    detailContainer: {
        maxWidth: "80%",

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: "#ffbbbb"
    },
    heading: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        color: "#ffbbbb"
    },
    subheading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 12,
        marginVertical: 6,
        color: "#ffbbbb",
        padding: 6,
        borderBottomColor: "#ffbbbb",
        borderBottomWidth: 2
    },
});