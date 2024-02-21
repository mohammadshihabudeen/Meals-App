import { View, Text, StyleSheet, Pressable, Image } from "react-native"

export default MealItem = ({ item , onPress}) => {
    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color:"#ccc"}} 
        onPress={onPress}
        >
            <View>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.image}
                />
                <Text style={styles.heading}>
                    {item.title}
                </Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{item.duration}m</Text>
                <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
}
const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity : 0.25,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        overflow: "hidden"
    },
    image: {
        height: 250,
        width: "100%"
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        margin: 8
    },
    details : {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem : {
        marginHorizontal: 4,
        fontSize: 12
    }
})